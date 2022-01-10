const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

var employees = [];    

const addManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is the name of the manager?",
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
        message: "What is the ID of the manager?",
        name: 'id',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter the manager's ID.");
            }}
    },
    {
        type: 'input',
        message: "What is the email of the manager?",
        name: 'email',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter an email.");
            }}
    },
    {
        type: 'input',
        message: "Provide the manager's office number.",
        name: 'office',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter an office number.");
            }}
    },
])
.then (managerInfo => {
  let {name, id, email, office} = managerInfo;
  const manager = new Manager (name, id, email, office);
  employees.push(manager);
  console.log(manager);
})
};
const addEmployee = () => {
    return inquirer.prompt([  
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ['Engineer', 'Intern']
        },  
        {
            type: 'input',
            message: "What is the name of the employeer?",
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
                return console.log("Please enter the employee's ID.");
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
])
.then (employeeData => {
    let {name, id, email, role, office, github, school, confirmAddEmployee} = employeeData;
    let employee;
    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
    }
    console.log(employee);
    employees.push(employee);
    console.log(employees);
    if (confirmAddEmployee) {
        addEmployee(employees); 
    } else {
        return employees;
    }
})
};

addManager()
.then (addEmployee)
//.then (employees => {
//  return generateHTML(employees);
//}) 
//.then (pageHTML => {
//    return writeToFile(pageHTML);
//})     
.catch(err => {
    console.log(err);
});
