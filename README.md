# rps_solution
 
# Rock, Paper, Scissors Game

This repository contains a simple implementation of the classic Rock, Paper, Scissors game. Here's a breakdown of the included files and their functionalities:

## 1. `game.js`
This JavaScript file contains the core logic for the Rock, Paper, Scissors game. 

- `getComputerChoice()`: This function randomly selects the computer's choice, either 'Rock', 'Paper', or 'Scissors'.
  
- `playRound(playerSelection, computerSelection)`: This function takes the player's and computer's choices and determines the round winner, returning a message indicating the result.
  
- `game()`: This function initiates a 5-round game, keeping track of scores and ultimately informing the player whether they've won, lost, or drawn against the computer.

## 2. `index.html`
This is a simple HTML file designed to execute the game. It includes:

- A heading and a paragraph briefly describing the game.
- An embedded script that imports the `game.js` file and then triggers the game.

## 3. Linking the HTML and JS files
The HTML and JS files are linked using the `<script>` tag in the `index.html` file. This is done using:

```html
<script src="game.js"></script>
```

This line imports the game.js file, making all the functions defined in it available in the index.html context.

## 4. Running the Game
If you'd like to play the game yourself, follow these steps: 
1. Clone the GitHub repository to your local machine. You enter this in your CLI:
```
git clone https://github.com/prodlabadmin/rps_solution.git
```

2. Navigate to the cloned directory using this command in your CLI
```
cd rps_solution
```

3. Open the index.html file in your preferred web browser. The game will start immediately, and you'll be prompted to make your choices for each round.

Enjoy the game! 

We hope you have fun with this simple Rock, Paper, Scissors game. Feel free to extend or modify the code as you see fit!
