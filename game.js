// 1. Function to get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3); // Generates a number between 0 to 2
    return choices[randomIndex];
}

// 2. Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Making the player's selection case-insensitive
    const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // Check if it's a tie
    if (playerChoice === computerSelection) {
        return 'It\'s a tie!';
    }

    // Defining the game rules
    const gameRules = {
        'Rock': 'Scissors',
        'Scissors': 'Paper',
        'Paper': 'Rock'
    };

    if (gameRules[playerChoice] === computerSelection) {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}

// Example of code if you were to play one game. Commented out and not in effect
/*
const playerSelection = prompt('Choose Rock, Paper, or Scissors:');
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));
*/

// game function to play multiple rounds of RPS
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock, Paper, or Scissors:');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        alert(result);

        if (result.startsWith('You Win')) {
            playerScore++;
        } else if (result.startsWith('You Lose')) {
            computerScore++;
        }
    }

    // Display the final score and declare a winner
    if (playerScore > computerScore) {
        alert(`You won the game! Score: ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lost the game. Score: ${playerScore} to ${computerScore}`);
    } else {
        alert(`It's a tie! Score: ${playerScore} to ${computerScore}`);
    }
}

game();
