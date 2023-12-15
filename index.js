const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Write a description of your project:',
                name: 'description',
            },
            {
                type: 'checkbox',
                message: 'What sections do you need for your README.md?',
                name: 'tableOfContents',
                choices: ['Installation', 'Usage', 'Licence', 'Contributing', 'Tests', 'Questions']
            },
            {
                type: 'input',
                message: 'What are the steps required for installing your project?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Provide instructions and examples for use:',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'Which licence do you need for your project?',
                name: 'licence',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            },
            {
                type: 'input',
                message: 'Provide guidelines on how to contribute:',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'Provide examples on how to run tests for your project:',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'Additional information:',
                name: 'questions',
            },
        ]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    //generateMarkdown.js()
}

// function call to initialize program
init();
