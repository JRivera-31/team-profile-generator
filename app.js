const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employees = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!
const employeePrompt = () => { // Prompts for employee info
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employees first name and last name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the employees ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the employees email?",
                name: "email"
            },
            {
                type: "list",
                message: "What is the employees role?",
                choices: ["Manager", "Engineer", "Intern"],
                name: "role"
            }
        ])
        .then(answers => { // Displays different prompts by role
            if (answers.role === "Manager") {
                managerPrompt(answers)
            } else if (answers.role === "Engineer") {
                engineerPrompt(answers)
            } else if (answers.role === "Intern") {
                internPrompt(answers)
            }
        })
}

const engineerPrompt = engineer => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their Github username",
                name: "github"
            }
        ])
        .then(answers => {
            // Save answer to engineer object
            engineer.gitHub = answers.github

            // Push new engineer object to array
            employees.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.role, engineer.gitHub))

            // Call add employee method
            addEmployee()
        })
}

const managerPrompt = manager => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their office number?",
                name: "officenumber"
            }
        ])
        .then(answers => {
            // Save answer to manager object 
            manager.officeNumber = answers.officenumber

            // Push new manager object to employees array
            employees.push(new Manager(manager.name, manager.id, manager.email, manager.role, manager.officeNumber))

            // Call add employee method
            addEmployee()
        })
}

const internPrompt = intern => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their school?",
                name: "school"
            }
        ])
        .then(answers => {
            // Save answer to intern object 
            intern.school = answers.school

            // Push new intern to employees array
            employees.push(new Intern(intern.name, intern.id, intern.email, intern.role, intern.school))

            // Call add employee method
            addEmployee();
        })
}


const addEmployee = () => {
    // Ask to add more employees
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to add more employees?",
                name: "choice"
            }
        ])
        .then(answer => { 
                // Display employee prompt if confirmed to add more employees
            if (answer.choice) {
                employeePrompt()
            } else {
                // Render html file if done adding employees
                let renderHTML = render(employees)
                fs.writeFile(outputPath, renderHTML, "utf8", err => {
                    if (err) {
                        throw err
                    } else {
                        console.log("Success")
                    }
                })
            }
        })
}

employeePrompt()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
