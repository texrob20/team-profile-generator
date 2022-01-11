const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

var employees = [];    //data set to collect all inputted employees

// begins the creation of the team with the manager's information
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
//creates manager using Manager class
.then (managerInfo => {
  let {name, id, email, office} = managerInfo;
  const manager = new Manager (name, id, email, office);
  employees.push(manager);
})
};
// function to create employee, allows user to select either engineer or intern
const addEmployee = () => {
    console.log(`-------------
    Add the next employee to the team
    -------------`);
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
        type: 'input', // only asked if the employee is an engineer
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
        type: 'input',  // only asked if the employee is an intern
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
    {   // asks if another employee needs to be added
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }, 
])
// creates new employee based on role
.then (employeeData => {
    let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
    let employee;
    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
    }
    employees.push(employee); //adds new employee to data set
    // checks to see if another employee needs to be added
    if (confirmAddEmployee) {
        return addEmployee(); 
    } else {
        return employees;
    }
})
};
// takes generated html code and writes it to the index.html file
function writeToFile(data) {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
       console.log(err);
       return;
    } else {
       console.log("The team profile page has been created.  It can be viewed at index.html")
    }
  })
}
// execution of code starting with manager, then employees, then html generation, then creation of file
addManager()
.then (addEmployee)
.then (employees => {
  return generateHTML(employees);
}) 
.then (page => {
    return writeToFile(page);
})     
.catch(err => {
    console.log(err);
});
