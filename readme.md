# Regular Expressions Table Generator

A simple Node.js script to generate an HTML table of regular expressions from a JSON file.

## Table of Contents

- [Regular Expressions Table Generator](#regular-expressions-table-generator)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Usage](#usage)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [How to Use](#how-to-use)
  - [Troubleshooting](#troubleshooting)
  - [Contact](#contact)

## Introduction

This Node.js script reads data from a JSON file containing regular expressions and generates an HTML table to display them. The generated HTML file can be used to showcase and document the regular expressions you have.

## Usage

The primary purpose of this script is to create a table of regular expressions from a JSON file. You can run this script using Node.js, and it will generate an HTML file.

## Getting Started

To get started, you need to set up your environment and install the necessary dependencies.

### Prerequisites

Before you can run this script, ensure you have the following installed:

- Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```git clone https://github.com/yourusername/regex-table-generator.git```

2. Change to the project directory:

    ```cd regex-table-generator```

3. Install the project dependencies using npm:
  
   ```npm install```

## How to Use

1. Create a JSON file with the regular expressions you want to document. The JSON structure should resemble this:

```{
  "regexTypes": [
    {
      "name": "Regular Expression Name",
      "description": "Description of the regular expression",
      "example": "/your-regex-pattern/"
    },
    // Continue...
  ]
}
```

2. Save your JSON file as data.json in the project directory.
3. Open your terminal, navigate to the project directory, and run the script using the following command:

    ```node app.js```
4. The script will read the JSON file, generate an HTML table, and save it as regex_table.html in the parent directory.
5. Open the generated regex_table.html file in your web browser to view your regular expressions.

## Troubleshooting

If you encounter any issues while running the script or have errors related to the JSON data, make sure that your data.json file is correctly formatted. If there are errors in the JSON data, the script will log an error message.

## Contact

If you have any questions or feedback, just PR or ping on my socials.

Thank you!
