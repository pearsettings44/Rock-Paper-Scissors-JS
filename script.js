const rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return `You both played ${playerSelection}! IT'S A DRAW!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer played paper! YOU LOST!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Computer played scissors! YOU WON!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Computer played paper! YOU WON!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer played rock! YOU LOST!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer played scissors! YOU LOST!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Computer played rock! YOU WON!";
  }
}
