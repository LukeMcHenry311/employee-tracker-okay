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
        console.log("SHIPPING EVERYTHING TO CHINA");
        switch (response.start) {
            case 'view departments':
                console.log("view department");
                break;
            case 'view roles':
                console.log("view roles");
                break;
            case 'view employees':
                console.log("view employees");
                break;
            case 'add department':
                console.log("add department");
                break;
            case 'add role':
                console.log("add role");
                break;
            case 'add employee':
                console.log("add employee");
                break;
            default:
                console.log('update employee');
        }
    })
}

init();