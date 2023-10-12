# Employee Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. I am building a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents 
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Walkthrough Video](#walkthrough-video)
- [Helpful SVG Resources](#helpful-svg-resources)
- [Questions](#questions)

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./images/video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

Database schema:

![Database schema includes tables labeled “employee,” role,” and “department.”](./images/demo-01.png)   

## Installation

1. Download the zip file and copy it to a directory of your choice or clone to a directory of your choice using your terminal. 
2. Open the file in VS Code or any editor you prefer.
3. Open the terminal in VS Code and make sure you’re in the correct directory.
4. Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
5. Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
6. Ensure inquirer is installed [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Run `npm i` to install dependencies in local project directory.

## Usage

1. Open your terminal.
2. The application will be invoked by using the following command:

```bash
node server.js
```

3. Choose an action that you want to perforn
4. Answer questions that follow.

## Contributing

Any Contribution is more than welcome!

## Walkthrough Video

```
Disclaimer: The following video provides an illustrative example of how to respond to prompts using the given content. It is intended solely for instructional purposes and to showcase the concept. Users are encouraged to utilize their own responses, thoughts, and ideas when interacting with prompts to achieve personalized and authentic outcomes. The video's content should not be considered prescriptive or definitive, as individual preferences, opinions, and circumstances vary. Viewer discretion is advised, and any actions taken based on the video's content are the responsibility of the user.
````
![Walkthrough Video Link](https://drive.google.com/file/d/1V_1WphYEKgdVEsi6wGkuzpPE_pCyhLuG/view?usp=sharing)


## Questions

If you have any question, Email me at: yana.mishina.92@gmail.com

Find me on GitHub: [Ymishyna](https://github.com/Ymishyna)


