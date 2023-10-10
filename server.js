const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const db = require('./config/connection');
const cTable = require('console.table');

const PORT = process.env.PORT || 3000;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for Not Found
app.use((req, res) => {
    res.status(404).end();
});

// Connecting and checking for error 
db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => { });
});

// Start the prompt function 
function startPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add A Department',
            'Quit'],
    }).then(answer => {
        switch (answer.menu) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Quit':
                quit();
                break;
        }
    })
};

// View all departments
function viewAllDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return;
        }
        console.table(result);
        startPrompt();
    });
};

// View all roles
function viewAllRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return;
        }
        console.table(result);
        startPrompt();
    });
};

// View all employees
function viewAllEmployees() {
    const sql = `SELECT employee.id,
                employee.first_name,
                employee.last_name,
                role.title AS title,
                department.department_name AS 'department',
                role.salary
                CONCAT(manager.first_name, ' ' ,manager.last_name) AS manager,
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee AS manager ON employee.manager_id = manager.id
                ORDER By employee.id`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        startPrompt();
    });
};

// Add departments
function addDepartment() {
    inquirer.prompt([
        {
            name: "department_name",
            type: "input",
            message: "What is the name of the departmwnt?"
        }
    ]).then((answer) => {

        const sql = `INSERT INTO department (department_name)
                VALUES (?)`;
        const params = [answer.department_name];
        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log(`Added ${params} to the database`);

            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message })
                    return;
                }
                console.table(result);
                startPrompt();
            });
        });
    });
};

// Add a role
function addRole() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the role?",
            validate: salary => {
                if (isNaN(salary) || salary < 0) {
                    return 'Please enter a number (no dots, spaces, commas)'
                }
                return true;
            }
        },
        {
            name: "department",
            type: "list",
            message: "Which department does the role belong to?",
            choices: departments
        }
    ]).then(function (response) {
        db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [response.title, response.salary, response.department], function (err, data) {
            if (err) throw err;
            console.log(`Adeed ${response.title} to the database`);

            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message })
                    startPrompt();
                }
                console.table(result);
                startPrompt();
            });
        })
    });
};

