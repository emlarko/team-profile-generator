const document = require('./src/document.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');
const team = [];

const createManager = () => {
    return inquirer.prompt ([
        {
            type : 'input',
            message: "Who is the Manager?",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter the Manager's ID:",
            name: 'id'
        },
        {
            type: 'input',
            message: "Please enter the Manager's email:",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter the Manager's Office Number",
            name: 'officeNumber'
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        team.push(manager);
        console.log(manager);
    })
};

const createEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            message: "What is the employee's role?",
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type : 'input',
            message: "What is the Employee's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter the Employee's ID:",
            name: 'id'
        },
        {
            type: 'input',
            message: "Please enter the Employees's email:",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter the Employee's Github username:",
            name: 'github',
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            message: "Please enter the Intern's School:",
            name: 'school',
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            message: 'Would you like to add more team members?',
            name: 'confirmCreateEmployee',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmCreateEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        
        team.push(employee);

        if (confirmCreateEmployee) {
            return createEmployee(team);
        } else {
            return team;
        }
    })
};

const writeToFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
    err ? console.error(err) : console.log('Success')
    })
}

createManager()
    .then(createEmployee)
    .then(team => {
        return document(team);
    })
    .then(profileHTML => {
        return writeToFile(profileHTML);
    })
    .catch(err => {
        console.error(err);
    });