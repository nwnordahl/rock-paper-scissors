function computerPlay() {
  const playChoices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * playChoices.length);

  return playChoices[randomIndex];
}

console.log(computerPlay());
