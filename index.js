const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

var employees = [];    

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is the name of the employee?",
        name: 'name',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter a name.");
            }}
    },
    {
        type: 'input',
        message: "What is the ID of the employee?",
        name: 'id',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter the employee ID.");
            }}
    },
    {
        type: 'input',
        message: "What is the email of the employee?",
        name: 'email',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter an email.");
            }}
    },
    {
        type: 'list',
        message: "Choose an employee role.",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    },
    {
        type: 'input',
        message: "Provide the manager's office number.",
        name: 'office',
        when: (input) => input.role === 'Manager',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter an office number.");
            }}
    },
    {
        type: 'input',
        message: "Provide the engineer's github username.",
        name: 'github',
        when: (input) => input.role === 'Engineer',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter a GitHub username.");
            }}
    }, 
    {
        type: 'input',
        message: "Provide the intern's school.",
        name: 'school',
        when: (input) => input.role === 'Intern',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter a school name.");
            }}
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }, 
]);
};

promptUser()
.then (employeeData => {

    let {name, id, email, role, office, github, school, confirmAddEmployee} = employeeData;
    let employee;
    if (role === "Manager") {
        employee = new Manager (name, id, email, office);        
    } else if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
    }
    console.log(employee);
    employees.push(employee);
    console.log(employees);
    if (confirmAddEmployee) {
        return promptUser(employees); 
    } else {
        return employees;
    }
})    
.catch(err => {
    console.log(err);
});
