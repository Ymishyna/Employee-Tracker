const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const db = require('./db/connection');
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
db.connect((err) => {
    if (err) throw err;
    app.listen(PORT, () => {});
});