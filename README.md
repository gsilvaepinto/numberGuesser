# Number Guessing Game

A simple JavaScript-based number guessing game where the player has to guess a randomly generated number between 1 and 100. The game provides feedback on each guess and tracks the number of attempts.

## Features

- Generates a random number between 1 and 100.
- Provides hints whether the guessed number is too high or too low.
- Keeps track of the number of attempts.
- Allows user to press "Enter" to submit a guess.
- Displays a reset button when the correct number is guessed.
- Validates input to ensure it's a number within the correct range.
- Removes previous feedback before displaying new hints.

## Screenshot

![Game Screenshot](screenshot.jpg) *(Add your screenshot here)*

## Technologies Used

- HTML
- CSS
- JavaScript (DOM Manipulation, Event Listeners)

## How to Play

1. Enter a number between **1 and 100** in the input field.
2. Press **Enter** or click the **Submit** button to guess.
3. The game will give you hints:
   - "Secret number is higher." → Your guess was too low.
   - "Secret number is lower." → Your guess was too high.
   - "Congratulations!" → You guessed the correct number!
4. Click **Reset** to start a new game.
