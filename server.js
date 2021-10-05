const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000);

console.table([
    {
        name: 'foo',
        age: 10
    }, {
        name: 'bar',
        age: 20
    }
]);

const questions = [
    {
        type: 'list',
        name: 'start',
        message: 'how can ETO help you',
        choices: [
            'view departments',
            'view roles',
            'view employees',
            'add department',
            'add role',
            'add employee',
            'update employee'
        ]
    }
]


function init() {
    inquirer.prompt(questions)
    .then((response) => {
        switch (response.start) {
            case 'view departments':
                viewDepartment();
                break;
            case 'view roles':
                viewRoles();
                break;
            case 'view employees':
                viewEmployees();
                break;
            case 'add department':
                addDepartment();
                break;
            case 'add role':
                addRole();
                break;
            case 'add employee':
                addEmployee();
                break;
            default:
                updateEmployee();
        }
    })

    function viewDepartment() {
        console.log("YOU ARE VIEWING THE DEPARMENT.");
    }
    function viewRoles() {
        console.log("YOU ARE VIEWING ROLES");
    }
    function viewEmployees() {
        console.log("YOU ARE VIEWING EMPLOYEES");
    }
    function addDepartment() {
        console.log("YOU ARE ADDING A DEPARTMENT");
    }
    function addRole() {
        console.log("YOU ARE ADDING A ROLE");
    }
    function addEmployee() {
        console.log("YOU ARE ADDING AN EMPLOYEE");
    }
    function updateEmployee() {
        console.log("YOU ARE UPDATING AN EMPLOYEE");
    }
}

init();