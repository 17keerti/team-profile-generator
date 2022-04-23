const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const myTeamArray = [];

function addManager() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the team manager's name?",
      name: 'name',
    },
    {
      type: 'input',
    message: "What is the team manager's id ?",
    name: 'id',
    },
    {
      type: 'input',
      message: "What is the team manager's email ?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the team manager's office number?",
      name: 'officeNumber',
    }
    ])
    .then((managerResponse) => {
      const  { name, id, email, officeNumber } = managerResponse; 
        const manager = new Manager (name, id, email, officeNumber);

        myTeamArray.push(manager); 
        console.log(manager); 
    })
}


function addEmployee() {
  return inquirer.prompt ([
    {
      type: 'list',
      message: "Which type of team member would you like to add ?",
      name: 'role',
      choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
      default: 'I dont want to add any more team members',
    }
  ]) 
  .then(function (roleResponse){
    if(roleResponse.role === 'Engineer'){
      addEngineer();
    } else if(roleResponse.role === 'Intern'){
      addIntern();
    }
  })
}

function addEngineer() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the your Engineer's name?",
      name: 'name',
    },
    {
        type: 'input',
      message: "What is the your Engineer's id ?",
      name: 'id',
    },
    {
      type: 'input',
      message: "What is the your Engineer's email ?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the your Engineer's Github username ?",
      name: 'githubUsername',
    },
  ])
  .then((engineerResponse) => {
    const  { name, id, email, officeNumber } = engineerResponse; 
        const engineer = new Engineer (name, id, email, officeNumber);

        myTeamArray.push(engineer); 
        console.log(engineer); 
  })
}


function addIntern() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the your Intern's name?",
      name: 'name',
    },
    {
      type: 'input',
    message: "What is the your Intern's id ?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is the your Intern's email ?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is your Intern's School ?",
    name: 'school',
  }
  ])
  .then((internResponse) => {
    const  { name, id, email, school } = internResponse; 
        const intern = new Intern (name, id, email, school);

        myTeamArray.push(intern); 
        console.log(intern); 
  })
}

addEmployee();