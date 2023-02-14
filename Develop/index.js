// This is the required software that makes the application work properly.
const inquirer = require('inquirer');
const fs = require('fs');

    // These are the prompts that the application will use to create the readme. the ones labled "input" let you type in your answer and the one labled "list" lets you pick from a set list of options. The "name" of each prompt is how they are targeted later in the code.
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
        choices: [ "MIT", new inquirer.Separator(), "GPLv2", new inquirer.Separator(), "Apache", new inquirer.Separator(), "GPLv3", new inquirer.Separator(), "Unlicensed", new inquirer.Separator() ],
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
    {
        type:"input",
        message: "What is your github username?",
        name: "questions",
    },
    {
        type:"input",
        message: "what is your email address?",
        name:"questions2",
    }
  ])
// This function will add the license badge as long as the user picks a license
.then((response) => {
function renderLicenseBadge(license) {
if (license !=="Unlicensed"){
    return`![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
} else {
    return ""
}
}
// This function will add the license section to the table of contents if the user picks a license
function renderLicenseLink(license) {
    if (license !=="Unlicensed"){
        return`* [license](#license)\n`
    } else {
        return ""
    }
}
// This function adds text to the license section of the readme saying which license is being used
function renderLicenseSection(license) {
    if (license !=="Unlicensed"){
        return`This project was licensed under ${license} license`
    } else {
        return ""
    }
}
// This creates a file titled "README.md". It then adds all of the user input in the correct spots in the README
fs.writeFile('README.md', `# ${response.title}
${renderLicenseBadge(response.license)}\n\n
## DESCRIPTION\n\n- ${response.description}\n\n
## TABLE OF CONTENTS\n\n
* [Install](#install)\n
* [Usage](#usage)\n
* [Collaborators](#collab)\n
${renderLicenseLink(response.license)}
* [Features](#features)\n
* [Contribute](#contribute)\n
* [Tests](#tests)\n
* [Questions](#questions)\n\n
## INSTALLATION\n\n- ${response.install}\n\n
## USAGE\n\n- ${response.usage}\n\n
## COLLABORATORS\n\n- ${response.collab}\n\n
## LICENSE\n\n- ${renderLicenseSection(response.license)}\n\n
## FEATURES\n\n- ${response.features}\n\n
## HOW TO CONTRIBUTE\n\n- ${response.contribute}\n\n
## TESTS\n\n- ${response.tests}\n\n
## Questions\n\n- If you have any questions please feel free to contact me on github or by email.\n
- Github Profile: https://github.com/${response.questions}\n
- Email: ${response.questions2} `, (err) =>
// This lets you know in the terminal when your README has been generated
err ? console.error(err) : console.log('README Generated')
)
}
);

// npm init -y
// npm i inquirer@8.2.4
