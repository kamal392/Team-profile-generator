const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");

teamArray = [];

function runApp() {
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: ["Engineer", "Intern", "No more team members are needed."],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            htmlBuilder();
        }
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the manager's name!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID number?",
          validate: (nameInput) => {
            if (nameInput) {
              if (isNaN(nameInput)) {
                console.log("Please enter the valid manager's ID!");
                return false;
              } else {
                return true;
              }
            } else {
              console.log("Please enter the manager's ID!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
          validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter an email!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office phone number?",
          validate: (nameInput) => {
            if (nameInput) {
              if (isNaN(nameInput)) {
                console.log("Please enter an valid office phone number!");
                return false;
              } else {
                return true;
              }
            } else {
              console.log("Please enter an office phone number!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter an engineer's name!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?",
          validate: (nameInput) => {
            if (nameInput) {
              if (isNaN(nameInput)) {
                console.log("Please enter valid engineer's employee's ID!");
                return false;
              } else {
                return true;
              }
            } else {
              console.log("Please enter the engineer's employee's ID!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
          validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter an engineer's email!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineer's github username!");
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter an intern's name!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?",
          validate: (nameInput) => {
            if (nameInput) {
              if (isNaN(nameInput)) {
                console.log("Please enter the valid intern's employee's ID!");
                return false;
              } else {
                return true;
              }
            } else {
              console.log("Please enter the intern's employee's ID!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
          validate: (email) => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              return true;
            } else {
              console.log("Please enter an intern's email!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the intern's school!");
            }
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  function htmlBuilder() {
    console.log("Team created!");

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  addManager();
}

runApp();
