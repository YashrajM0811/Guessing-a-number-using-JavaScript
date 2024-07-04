# Guess a Number using JavaScript

This project demonstrates the implementation of core JavaScript concepts through the creation of a "Guess a Number between 1 to 999" game. The game challenges users to guess a randomly generated number within a specified range and provides feedback on their guesses.

## Introduction

The "Guess a Number between 1 to 999" game is a simple yet engaging application that leverages JavaScript to provide an interactive user experience. This project helps in understanding fundamental JavaScript concepts, such as event handling, DOM manipulation, random number generation, and conditional statements.

## Getting Started

To get started with this project, clone the repository or download the files. Open the `index.html` file in your browser to play the game.

## Files Included

- `index.html`: Contains the structure of the application.
- `style.css`: Contains the styles for the application.
- `script.js`: Contains the JavaScript code to make the application functional.

## HTML Structure

The `index.html` file defines the structure of the "Guess a Number between 1 to 999" game. 

## CSS Styling

The `style.css` file is used to style the application. Customize the appearance of the game by modifying this file.

## JavaScript Functionality

The `script.js` file contains the JavaScript code that makes the application functional. 

### Explanation of the JavaScript Code

1. Selecting Elements: The `input` variable references the input field, the `btn` variable references the submit button, the `wrong` variable references the div for feedback messages, and the `guesses` variable references the div for displaying the number of guesses.
2. Random Number Generation: The `answer` variable stores a random number between 1 and 999.
3. Event Listener: An event listener is added to the button to handle the click event.
4. Guessing Logic: The `guessesNumber` function checks if the input is valid and provides feedback if the guess is too high, too low, or correct. It also updates the number of guesses.
5. Game Reset: The `resetGame` function resets the game variables and UI elements for a new round.

## How to Play

1. Open the `index.html` file in your web browser.
2. Enter a number between 1 and 999 in the input field.
3. Click the "Submit Guess" button.
4. The game will provide feedback on whether your guess is too high, too low, or correct.
5. The number of guesses will be displayed.
6. If you guess the correct number, the game will congratulate you and reset after 5 seconds for a new round.

## Conclusion

This "Guess a Number between 1 to 999" game is a fun project that demonstrates the power of JavaScript in creating interactive web applications. By understanding and modifying this project, you can learn essential JavaScript concepts and improve your web development skills.