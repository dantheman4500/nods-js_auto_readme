const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
//* These are the qeastions that will fill the read me
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is your project's tittle ?",
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please give me a description of your project.',
      },
      
      {
    
        type: 'input',
        name: 'projectInstallation',
        message: 'Describe the installation process if any:',
      },
      {
        type: "input",
        name: "projectUsage",
        message: "What is this project use for?"
      },
      {
        type: "list",
        name: "projectlicense",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
      },
      {
        type: "input",
        name: "projectContributing",
        message: "Who are the contributors of this projects?"
      },
      {
        type: "input",
        name: "projectTests",
        message: "Is there a test included?"
      },
      {
        type: "input",
        name: "projectUsername",
        message: "Please enter your GitHub username: "
      },
      {
        type: "input",
        name: "projectEmail",
        message: "Please enter your email: "
      }
];

// *Returns create a file amd appends it to the current folder and all the data in too
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
  
// *Prompts the user with the queastions and then take the response from the queastions and pass them threw the write the file functions
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log('✔️  All Done Please Wait While We Generating README...');
        writeToFile('README.md', generateMarkdown({...data}));
        
    });
};


// Function call to initialize app
init();
