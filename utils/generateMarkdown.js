// generateReadme function populating the README.md
function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectTitle} </h1>

![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />
## Description
🔍 ${data.projectDescription}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.projectInstallation}

## Usage
${data.projectUsage}

## License
![badge](https://img.shields.io/badge/license-${data.projectLicense}-blue)
<br />
This application is covered by the ${data.projectLicense} license. 

## Contributing
${data.projectContributing}

## Tests
✏️ ${data.projectTests}

## Questions
${data.projectQuestions}<br />
<br />
:octocat: Find me on GitHub: [${data.projectUsername}](https://github.com/${data.projectUsername})<br />
<br />

Feel free to Eamil me : ${data.email}<br /><br />
_This README was generated with by [README-generator](https://github.com/dantheman4500/nods-js_auto_readme) 
  `;
}

module.exports = generateMarkdown;
