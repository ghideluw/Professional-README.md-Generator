
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index');

function renderLicenseBadge(license) {
  console.log("render license badge", license)
  if (!license) {
    return " "
  }
  return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("render license link", license)
  if (!license) {
    return " "
  }
  return `[${license}](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("render license section", license)
  if (!license) {
    return " "
  }
  return license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.badge}
${data.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
In order to install the necessary dependencies, open the console 
and run the following:
\`\`\`${data.installations}\`\`\`
### Usage:
${data.usage}
### License:
This project is licensed under:
${renderLicenseLink(data.license)}
### Contributing
${data.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Questions:
If you have any questions contact me on [Github](https://github.com/${data.username})
or contact ${data.author} at ${data.email}
`
}



module.exports = generateMarkdown;
