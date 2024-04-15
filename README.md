# QR Code Generator

This Node.js script takes a user-entered URL, generates a QR code image, and saves both the image and the URL in a text file. It utilizes the `inquirer` npm package for user input, `qr-image` npm package for QR code generation, and the native `fs` module for file operations.

## Prerequisites
- Node.js installed on your machine.

## Installation
1. Create a new directory for your project.
2. Initialize a new Node.js project:
    ```bash
    npm init -y
    ```
3. Install dependencies:
    ```bash
    npm install inquirer qr-image
    ```

## Usage
1. Run the script:
    ```bash
    node qr_generator.js
    ```
2. Enter the URL when prompted.
3. The script generates a QR code image (`qr_img.png`) and saves the URL in a text file (`URL.txt`) in the current directory.

## Overview
- **inquirer**: Used to prompt the user for input.
- **qr-image**: Generates QR code images from the entered URL.
- **fs**: Handles file operations like writing the URL to a text file and saving the QR code image.

## Script Flow
1. Prompt the user to enter a URL using `inquirer`.
2. Generate a QR code image from the entered URL using `qr-image`.
3. Save the QR code image to a file named `qr_img.png`.
4. Write the URL to a text file named `URL.txt`.
5. Display a message indicating that the files have been saved.

## File Structure
- **qr_generator.js**: Main script file containing the logic.
- **URL.txt**: Text file containing the user-entered URL.
- **qr_img.png**: QR code image generated from the entered URL.

## Error Handling
- The script catches and handles errors related to user input and file operations.

## Disclaimer
This script is for educational purposes only. 
