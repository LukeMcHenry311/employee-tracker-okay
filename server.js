const inquirer = require("inquirer");
const mysql = require("mysql2");
const init = require("connect-session-sequelize");
require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "01hapanui",
    database: "tracker"
})

connection.connect(function (error) {
    if (error) {
        console.log(error)
    }
})

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


function initialize() {
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
        connection.query("select * from department", function (error, data) {
            console.table(data);
            initialize();
        })
    }
    function viewRoles() {
        console.log("YOU ARE VIEWING ROLES");
        connection.query("select * from role", function (error, data) {
            console.table(data);
            initialize();
        })
    }
    function viewEmployees() {
        console.log("YOU ARE VIEWING EMPLOYEES");
        connection.query("select * from employee", function (error, data) {
            console.table(data)
            initialize();
        })
    }
    function addDepartment() {
        console.log("YOU ARE ADDING A DEPARTMENT");
        inquirer.prompt([{
            type: "input",
            message: "what is the new department?",
            name: "depname"
        }])
            .then(response => {
                connection.query("insert into department(name) values(?)", response.depname, function (error, data) {
                    console.log("new department added")
                    initialize();
                })
            })
    }
    function addRole() {
        console.log("YOU ARE ADDING A ROLE");
        inquirer.prompt([{
            type: "input",
            message: "enter new role",
            name: "nrole"
        }, {
            type: "input",
            message: "enter salary of new role",
            name: "isalary"
        }, {
            type: "input",
            message: "enter department id",
            name: "depid"
        }
    ]).then(response => {
        connection.query("insert into role(title,salary,department_id) values(?,?,?)", [response.nrole, response.isalary, response.depid], function (error, data) {
            console.log("role added")
            initialize();
        })
    })
    }
    function addEmployee() {
        console.log("YOU ARE ADDING AN EMPLOYEE");
        inquirer.prompt([{
            type: "input",
            message: "what is the employee's first name",
            name: "fname"
        }, {
            type: "input",
            message: "what is the employee's last name",
            name: "lname"
        }, {
            type: "input",
            message: "what is the role id",
            name: "rid"
        }
    ]).then(response => {
        connection.query("insert into employee(first_name,last_name,role_id)values (?,?,?)", [response.fname, response.lname, response.rid], function (error, data) {
            console.log("employee added")
            initialize();
        })
    })
    }
    function updateEmployee() {
        console.log("YOU ARE UPDATING AN EMPLOYEE");
        inquirer.prompt([{
            type: 'number',
            name: 'updatei',
            message: 'enter employee id number'
        }, {
            type: 'number',
            name: 'updater',
            message: 'enter new role'
        }
    ]).then((answer) => {
        connection.query(
            `UPDATE employee SET role_id = ${answer.updater} WHERE id = ${answer.updatei}`, (err, res) => {
                if (err) throw err;
                console.log('employee updated');
                initialize();
            }
        )
    })
    }
}

initialize();