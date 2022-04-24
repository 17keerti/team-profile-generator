const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const templateHtml = require("./src/templateHtml");
const fileName = ("./dist/generatedHtml.html");

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
      const { name, id, email, officeNumber } = managerResponse;
      const manager = new Manager(name, id, email, officeNumber);

      myTeamArray.push(manager);
      console.log(manager);

      inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirmMoreEmployees',
          message: 'Would you like to add more team members?',
          default: false
        }
      ])
        .then((response) => {
          if (response.confirmMoreEmployees) {
            return addEmployee();
          } else {
            return myTeamArray;
          }
        })
    })

}


function addEmployee() {
  return inquirer.prompt([
    {
      type: 'list',
      message: "Which type of team member would you like to add ?",
      name: 'role',
      choices: ['Engineer', 'Intern', 'I dont want to add any more team members'],
      default: 'I dont want to add any more team members',
    }
  ])
    .then((roleResponse) => {
      if (roleResponse.role === 'Engineer') {
        addEngineer();
      } else if (roleResponse.role === 'Intern') {
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
    }
  ])
    .then((engineerResponse) => {
      const { name, id, email, githubUsername } = engineerResponse;
      const engineer = new Engineer(name, id, email, githubUsername);

      myTeamArray.push(engineer);
      console.log(engineer);
      inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirmMoreEmployees',
          message: 'Would you like to add more team members?',
          default: false
        }
      ])
        .then((response) => {
          if (response.confirmMoreEmployees) {
            return addEmployee();
          } else {
            return myTeamArray;
          }
        })
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
      const { name, id, email, school } = internResponse;
      const intern = new Intern(name, id, email, school);

      myTeamArray.push(intern);
      console.log(intern);
      inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirmMoreEmployees',
          message: 'Would you like to add more team members?',
          default: false
        }
      ])
        .then((response) => {
          if (response.confirmMoreEmployees) {
            return addEmployee();
          } else {
            return myTeamArray;
          }
        })
    })
}

function writeToFile(filename, data) {
  const templateHtml =templateHtml(data);
  fs.writeFile(filename, templateHtml, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully file has been created!');
    }
  })
}

function init() {
  addManager();
  writeToFile(fileName, myTeamArray); 
}


init();