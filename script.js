// Global Variables
const PLAYER_SELECTIONS = ["ROCK", "PAPER", "SCISSORS"];

// Helper functions
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * PLAYER_SELECTIONS.length);

  return PLAYER_SELECTIONS[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  //   Check if computer win
  if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    return "Computer won";
  }

  //   Check if player win
  else if (
    (computerSelection === "ROCK" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "ROCK")
  ) {
    return "Player won";
  }

  //   It's  draw
  else {
    return "Draw";
  }
}

// Main game function
function game() {
  const playRounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  //   Here's where the fun part begins!
  for (let i = 0; i < playRounds; i++) {
    const playerSelection = prompt(
      "Enter rock, paper, or scissors:"
    ).toUpperCase();
    const computerSelection = computerPlay();
    const playRoundResult = playRound(playerSelection, computerSelection);

    // Check who won the round
    if (playRoundResult === "Computer won") {
      computerScore++;
      console.log(
        `Computer win! ${computerSelection} beats ${playerSelection}.`
      );
    }
    if (playRoundResult === "Player won") {
      playerScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
      console.log(`Computer chose ${computerSelection} too, it's a draw!`);
    }
  }

  //   Play summary
  if (playerScore < computerScore) {
    console.log(
      `Computer got the best score with a score of ${computerScore} out of ${playRounds}.`
    );
  } else if (playerScore > computerScore) {
    console.log(
      `You got the best score with a score of ${playerScore} out of ${playRounds}.`
    );
  } else {
    console.log(
      `You both got a score of ${playerScore} out of ${playRounds}, it's a draw!`
    );
  }
}

// Let there be light!
game();
