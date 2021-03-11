// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")


console.log("conencted")



// TODO: Create an array of questions for user input
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  "what is the title of your project?",
  "Please describe your project?",
  "give a table of contents?",
  "what things need to be installed",
  "what is the usage of your application?",
  "what licenses are needed?",
  "please give contribution guidelines",
  "test instructions",
  "please provide github username",
  "please enter an email address",
  "questions"

];

// TODO: Create a function to write README file
function writeToFile() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please describe your project?",
      },
      {
        type: "input",
        name: "contents",
        message: "give a table of contents?",
      },
      {
        type: "input",
        name: "install",
        message:  "what things need to be installed",
      },
      {
        type: "input",
        name: "usage",
        message: "what is the usage of your application?",
      },
      {
        type: "list",
        name: "license",
        message: "what is this liscenced under?",
        choices: ["mit", "ducks", "copyright"]
      },
      {
        type: "input",
        name: "contribution",
        message: "please give contribution guidelines",
      },
      {
        type: "input",
        name: "test",
        message: "test instructions",
      },
      {
        type: "input",
        name: "contribution",
        message: "please give contribution guidelines",
      },
      {
        type: "input",
        name: "contribution",
        message: "please provide github username",
      },
      {
        type: "input",
        name: "contribution",
        message: "please enter an email address",
      },
      {
        type: "checkbox",
        name: "badges",
        message: "what badges do you want?",
        choices: ["fuck it", "electricity", "cat gifs"]
      },

    ]).then(data => {
      console.table(data)
      var list = []
      for (let i = 0; i < data.badges.length; i++) {
        switch (data.badges[i]) {
          case "fuck it":
            list.push("[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)")
            break;
          case "electricity":
            break;
          case "cat gifs":
            break;
          default:
            break
        }
        console.log(data.badges[i])

      }
      let template = `# ${data.title} \n ## ${data.description} \n ## ${data.contents} \n ## ${data.install}\n ## ${data.usage}\n ## ${data.license}\n ## ${data.contribution}\n \n ## ${data.test}\n ## \n\n ${list}`
      fs.writeFile("README.md", template, (err) => {
        if (err) {
          throw err
        }
      })
    })
};




// TODO: Create a function to initialize app
function init() {

  writeToFile()
}

// Function call to initialize app
init();







// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```
