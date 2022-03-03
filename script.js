let playerScore = 0;
let computerScore = 0;
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const scoreboard = document.querySelector(".scoreboard");
const result = document.querySelector(".result p");
const charmander = document.querySelector("#charmander");
const squirtle = document.querySelector("#squirtle");
const bulbasaur = document.querySelector("#bulbasaur");

function computerPlay() {
  // computerPlay(): gets the computer play move (charmander/squirtle/bulbasaur).
  const rps = ["charmander", "squirtle", "bulbasaur"];
  return rps[Math.floor(Math.random() * rps.length)];
}

function win(playerchoice, computerchoice) {
  playerScore++;
  playerScoreElement.textContent = playerScore;
  result.textContent = `${playerchoice} beats ${computerchoice}. You win!`;
  glow = document.getElementById(playerchoice)
  glow.classList.add("winGlow");
  setTimeout(() => glow.classList.remove("winGlow"), 300);
}

function lose(playerchoice, computerchoice) {
  computerScore++;
  computerScoreElement.textContent = computerScore;
  result.textContent = `${computerchoice} beats ${playerchoice}. You lose!`;
  glow = document.getElementById(playerchoice)
  glow.classList.add("loseGlow");
  setTimeout(() => glow.classList.remove("loseGlow"), 300);
}

function draw(playerchoice) {
  result.textContent = `You both played ${playerchoice}. It's a draw!`;
  glow = document.getElementById(playerchoice)
  glow.classList.add("drawGlow");
  setTimeout(() => glow.classList.remove("drawGlow"), 300);
}

function playRound(playerSelection, computerSelection) {
  // playRound(playerSelection, computerSelection): gets the winner of the round.
  // using .toLowerCase() to accept any form of input from user (i.e: charmander/charmander/charmander)
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    draw(playerSelection);
  } else if (
    playerSelection === "charmander" &&
    computerSelection === "squirtle"
  ) {
    lose(playerSelection, computerSelection);
  } else if (
    playerSelection === "charmander" &&
    computerSelection === "bulbasaur"
  ) {
    win(playerSelection, computerSelection);
  } else if (
    playerSelection === "bulbasaur" &&
    computerSelection === "squirtle"
  ) {
    win(playerSelection, computerSelection);
  } else if (
    playerSelection === "bulbasaur" &&
    computerSelection === "charmander"
  ) {
    lose(playerSelection, computerSelection);
  } else if (
    playerSelection === "squirtle" &&
    computerSelection === "bulbasaur"
  ) {
    lose(playerSelection, computerSelection);
  } else if (
    playerSelection === "squirtle" &&
    computerSelection === "charmander"
  ) {
    win(playerSelection, computerSelection);
  }
}

function main() {
  charmander.addEventListener("click", function () {
    playRound("charmander", computerPlay());
  });

  squirtle.addEventListener("click", function () {
    playRound("squirtle", computerPlay());
  });

  bulbasaur.addEventListener("click", function () {
    playRound("bulbasaur", computerPlay());
  });
}

main();

function game() {
  // game(): plays 5 win or lose rounds.
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
      // in case of a draw, decrement the round variable to "rematch" that round.
      round--;
    }
  }
  let gameWinner = playerScore > computerScore ? "YOU WONNN!" : "YOU LOST :(";
  return gameWinner;
}
