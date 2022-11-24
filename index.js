// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = require('./utils/questions')
// TODO: Create a function to write README file

//fileContent.toostring or json.stringify"fileContent"

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./generatedREADME.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);
            const fileContent = generateMarkdown(answer);
            writeToFile(fileContent)
        });
}

init();
