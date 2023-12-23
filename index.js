const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// from activity 7 
// asychronous 
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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
                message: 'Which license do you need for your project?',
                name: 'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
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
                message: 'Enter your Github username:',
                name: 'github',
            },
            {
                type: 'input',
                message: 'Enter your email address:',
                name: 'email',
            }
        ]);

//licence badges
const generateLicenseBadge = (license) => {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (license === "APACHE 2.0") {
        return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (license ==="GPL 3.0") {
        return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if (license=== "BSD 3-Clause") {
        return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    else {
        return "None";
    }
}

//README template
const generateReadMe = (answers) =>
`# ${answers.title}

## Table of Contents

- [Overview](#overview)
  - [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Overview

### Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.installation}

## License
${generateLicenseBadge(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Contact me at [GitHub](https://github.com/${answers.github}) or [${answers.email}](mailto:${answers.email}).
`;

questions()
        .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
        .then(() => console.log("Successful"))
        .catch((err) => console.error(err));



