const inquirer = require(`inquirer`);
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);







function questions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'give me a short description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'what needs to be installed.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Give a brief description that how to use this project',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list credits if you have any?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license used for this project.(use the arrow keys, and the space bar to pick)',
            choices: [
                "Mit_license",
                "Apache_license",
                "Boost_license",
                "MPL_2_license",
                "ISC_license",
                "GNU_General_Public_License_v3",
                "The_Unlicense",
                "No_License"
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please tell me about contributing',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please tell me about testing to be completed',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address',
        }
    ]);
}

// TODO: Create a function to write README file
const writeToFile = (data) =>
    `
${data.title} | ${badges[data.license]}
## Table of contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Credits](#Credits)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Tests](#Tests)
8. [Questions](#Questions)
## Description 
- ${data.description} 
## Installation
- ${data.installation}
## Usage
- ${data.usage}
## Credits
- ${data.credits}
## License
- ${badges[data.license]}
## Contributing
- ${data.contributing}
## Tests
- ${data.tests}
- E-mail me for any questions [${data.email}]
- Also you can find me on Github [${data.username}]
`



// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
        .then(() => console.log('Readme succesfully generated'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();