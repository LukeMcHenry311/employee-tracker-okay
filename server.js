const express = require('express');
const inquirer = require('inquirer');
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000);

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
                viewdepartment();
                break;
            case 'view roles':
                viewroles();
                break;
            case 'view employees':
                viewemployees();
                break;
            case 'add department':
                adddepartment();
                break;
            case 'add role':
                addrole();
                break;
            case 'add employee':
                addemployee();
                break;
            default:
                updateemployee();
        }
    })

    function viewdepartment() {
        console.log("YOU ARE VIEWING THE DEPARMENT.");
    }

    function viewroles() {
        console.log("YOU ARE VIEWING ROLES");
    }

    function viewemployees() {
        console.log("YOU ARE VIEWING EMPLOYEES");
    }

    function adddepartment() {
        console.log("YOU ARE ADDING A DEPARTMENT");
    }

    function addrole() {
        console.log("YOU ARE ADDING A ROLE");
    }

    function addemployee() {
        console.log("YOU ARE ADDING AN EMPLOYEE");
    }

    function updateemployee() {
        console.log("YOU ARE UPDATING AN EMPLOYEE");
    }

}

init();