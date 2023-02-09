// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [
    
inquirer
  .prompt([
    {
        type:"input",
        message: "What is the title of your project?",
        name:"title",
    },
    {
        type:"input",
        message: "Provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    {
        type:"input",
        message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
        name: "toc",
    },
    {
        type:"input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "install",
    },
    {
        type:"input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usage",
    },
    {
        type:"input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "collab",
    },
    {
        type:"list",
        choices: [ "MIT", new inquirer.Separator(), "GPLv2", new inquirer.Separator(), "Apache", new inquirer.Separator(), "GPLv3", new inquirer.Separator(), "Unlicense", new inquirer.Separator() ],
        message: "What license, if any, did you use for this project? If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
        name: "license",
    },
    {
        type:"input",
        message: "If your project has a lot of features, list them here.",
        name: "features",
    },
    {
        type:"input",
        message:  "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        name: "contribute",
    },
    {
        type:"input",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
        name: "tests",
    },
  ])

// TODO: Create a function to write README file
// function writeToFile(filename, data) {
// }
.then((response) =>
fs.writeFile('README.md', `# ${response.title}\n\n## DESCRIPTION\n\n${response.description}\n\n## TABLE OF CONTENTS\n\n${response.toc}\n\n## INSTALLATION\n\n${response.install}\n\n## USAGE\n\n${response.usage}\n\n## COLLABORATORS\n\n${response.collab}\n\n## LICENSE\n\n${response.license}\n\n## FEATURES\n\n${response.features}\n\n## HOW TO CONTRIBUTE\n\n${response.contribute}\n\n## TESTS\n\n${response.tests}`, (err) =>

err ? console.error(err) : console.log('README Generated')
)
);
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();



// npm init -y
// npm i inquirer@8.2.4