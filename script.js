const rps = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)]
}