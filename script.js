let playerScore = 0;
let computerScore = 0;
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const scoreboard = document.querySelector(".scoreboard");
const result = document.querySelector(".result p");
const charmander = document.querySelector("#charmander");
const squirtle = document.querySelector("#squirtle");
const bulbasaur = document.querySelector("#bulbasaur");
const playerBadge = document.querySelector("#playerBadge");
const computerBadge = document.querySelector("#computerBadge");

function computerPlay() {
  // computerPlay(): gets the computer play move (charmander/squirtle/bulbasaur).
  const rps = ["charmander", "squirtle", "bulbasaur"];
  return rps[Math.floor(Math.random() * rps.length)];
}

function win(playerchoice, computerchoice) {
  // win(playerchoice, computerchoice): increments playerScore and shows the round result.
  playerScore++;
  playerScoreElement.textContent = playerScore;
  result.textContent = `${playerchoice} beats ${computerchoice}. You win!`;
  glow = document.getElementById(playerchoice);
  glow.classList.add("winGlow");
  setTimeout(() => glow.classList.remove("winGlow"), 300);
  playerBadge.classList.add("winBadge");
  setTimeout(() => playerBadge.classList.remove("winBadge"), 300);
}

function lose(playerchoice, computerchoice) {
  // lose(playerchoice, computerchoice): increments computerScore and shows the round result.
  computerScore++;
  computerScoreElement.textContent = computerScore;
  result.textContent = `${computerchoice} beats ${playerchoice}. You lose!`;
  glow = document.getElementById(playerchoice);
  glow.classList.add("loseGlow");
  setTimeout(() => glow.classList.remove("loseGlow"), 300);
  computerBadge.classList.add("winBadge");
  setTimeout(() => computerBadge.classList.remove("winBadge"), 300);
}

function draw(playerchoice) {
  // draw(playerchoice): Shows the round result(draw).
  result.textContent = `You both played ${playerchoice}. It's a draw!`;
  glow = document.getElementById(playerchoice);
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
  // Gets the player choice on click.
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
