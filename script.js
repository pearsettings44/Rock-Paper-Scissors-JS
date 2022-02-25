function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
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

function game() {
  playerScore = 0;
  computerScore = 0;

  for (let round = 0; round < 5; round++) {
    playerSelection = prompt("Your move:");
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("WON")) {
      playerScore++;
    } else if (result.includes("LOST")) {
      computerScore++;
    } else {
      round--;
    }
  }
  let gameWinner = playerScore > computerScore ? "YOU WONNN!" : "YOU LOST :(";
  return gameWinner;
}
