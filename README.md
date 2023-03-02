# Team Profile Generator

## Description 

The aim of this a project was to create a command-line application that takes information about employees on a software engineering team and generates a HTML webpage that displays the information for each employee. 

## Installation 

To generate your README using the application, git clone the repo to your local machine.

Run npm install, which will install the inquirer package.

Start the application by running node index.js in the command line.

## Usage 


After running node index.js in the command line, the application will prompt the user with a series of questions regarding their team. 

The user will first be prompted to enter information regarding the Manager (name, ID, email, office number), and they will then be given the choice to add Engineer details (name, ID, email, GitHub) and Intern details (name, ID, email, School).

A HTML file is then created by the application, with containers displaying the information given for each employee. When the email address is clicked on the page, the user's default email program opens with the address in the to field. When the Engineer's GitHub is clicked on the page, the user is redirected to the Engineer's GitHub page. 

An example HTML file has been included in the dist folder of this repo to demonstrate the final product. 

[Team Profile Generator.webm](https://user-images.githubusercontent.com/101362057/222438611-88543aec-46a6-447c-ac24-fdf2eadd0c02.webm)

![screenshot](images/screenshot.png?raw=true "screenshot")

## Tests

Tests can be found under in the test folder of this repo. After installing Jest, run npm test to run tests on constructors.
