// Global Variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
const PLAYER_SELECTIONS = ["ROCK", "PAPER", "SCISSORS"];

// DOM Nodes
const gameInformation = document.querySelector("#game-information");
const gameResult = document.querySelector("#game-result");
const gameEndResult = document.querySelector("#game-end-result");
const buttons = document.querySelectorAll("button");

// Helper Functions
function computerPlay() {
  // Make the computer choose rock, paper, or scissors
  const randomIndex = Math.floor(Math.random() * PLAYER_SELECTIONS.length);

  return PLAYER_SELECTIONS[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Game rules

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

function setPlayRoundResult(
  playRoundResult,
  playerSelection,
  computerSelection
) {
  // Set the result in the ui
  if (playRoundResult === "Computer won") {
    gameInformation.textContent = `Computer win! ${computerSelection} beats ${playerSelection}.`;
  } else if (playRoundResult === "Player won") {
    gameInformation.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    gameInformation.textContent = `Computer chose ${computerSelection} too, it's a draw!`;
  }
}

function game(event) {
  // Main game function, triggered by event listener (button click)
  gameEndResult.textContent = "";
  const rounds = 5;

  const playerSelection = this.id.toUpperCase();
  const computerSelection = computerPlay();
  const playRoundResult = playRound(playerSelection, computerSelection);

  setPlayRoundResult(playRoundResult, playerSelection, computerSelection);

  // Update total scores
  if (playRoundResult === "Computer won") {
    computerScore++;
  } else if (playRoundResult === "Player won") {
    playerScore++;
  } else {
    drawScore++;
  }

  // Display scores
  gameResult.textContent = `Computer: ${computerScore}; Player: ${playerScore}; Draw: ${drawScore}`;

  if (computerScore + playerScore + drawScore === rounds) {
    if (computerScore > playerScore) {
      gameEndResult.textContent = "Computer won most in total!";
    } else if (playerScore > computerScore) {
      gameEndResult.textContent = "Player won most in total!";
    } else {
      gameEndResult.textContent =
        "Player and computer got the same score in total!";
    }
    computerScore = 0;
    playerScore = 0;
    drawScore = 0;
  }
}

// Event Listeners
buttons.forEach((button) => {
  button.addEventListener("click", game);
});

// Display initial scores
gameResult.textContent = `Computer: ${computerScore}; Player: ${playerScore}; Draw: ${drawScore}`;
