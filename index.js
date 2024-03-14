import inquirer from 'inquirer';

import qr from "qr-image";

import fs from "fs";

/*This code imports the necessary packages: inquirer for user input prompts, qr-image for generating QR codes, and fs for file system operations.*/

//let qr = require('qr-image');

inquirer
	.prompt([
		{"message": "Type in your URL:", "name": "URL"}
		/* Pass your questions in here */
	])
	.then((answers) => {
		const url = (answers.URL);
		let qr_svg = qr.image('url');
		qr_svg.pipe(fs.createWriteStream('qr_image.png'));

		/*The user's input URL is retrieved from the answers object and stored in the url variable. The qr.image() function is called with the url as the input to generate a QR code image. The resulting image is then piped (written) to a file called qr_image.png using the fs.createWriteStream() function.*/

		fs.writeFile("URL.txt", url, (err) => {
			if (err) throw err;
			console.log("The file has been saved!");

			/*The inquirer.prompt() function is called to display a prompt to the user. It takes an array of question objects as its argument. In this case, there is a single question object with the message "Type in your URL:" and the name "URL". The user's input will be stored in the answers object. The code also includes a .then() block to handle the code execution after the user's input is received and a .catch() block to handle any errors that may occur during the execution.*/

			// Use user feedback for... whatever!!
		})
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});

/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

/*Saving user input to a text file:
The code uses the fs.writeFile function to create a new file called URL.txt and writes the user's URL into it. If any error occurs during the file write operation, it throws the error. Otherwise, it logs a success message to the console, indicating that the file has been saved.*/