// Global Variables
const PLAYER_SELECTIONS = ["ROCK", "PAPER", "SCISSORS"];

// Helper functions
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * PLAYER_SELECTIONS.length);

  return PLAYER_SELECTIONS[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionUpperCase = playerSelection.toUpperCase();

  //   Check if computer win
  if (
    (playerSelectionUpperCase === "ROCK" && computerSelection === "PAPER") ||
    (playerSelectionUpperCase === "PAPER" &&
      computerSelection === "SCISSORS") ||
    (playerSelectionUpperCase === "SCISSORS" && computerSelection === "ROCK")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelectionUpperCase}`;
  }

  //   Check if player win
  else if (
    (computerSelection === "ROCK" && playerSelectionUpperCase === "PAPER") ||
    (computerSelection === "PAPER" &&
      playerSelectionUpperCase === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelectionUpperCase === "ROCK")
  ) {
    return `You win! ${playerSelectionUpperCase} beats ${computerSelection}`;
  }

  //   It's  draw
  else {
    return `Computer chose ${computerSelection} too, it's a draw!`;
  }
}

// Test to see if it works
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
