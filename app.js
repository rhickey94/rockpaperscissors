let playerScore = 0;
let computerScore = 0;
let round = 0;

let computerPlay = () => {
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * Math.floor(3))];
}

let playerLosesRound = () => {
    console.log("You lose this round!");
    computerScore++;
}

let playerWinsRound = () => {
    console.log("You win this round!");
    playerScore++;
}

let roundDraw = () => {
    console.log("Draw!");
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWinsRound();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWinsRound();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWinsRound();
    } else if (playerSelection === computerSelection) {
        roundDraw();
    } else {
        playerLosesRound();
    }
}

function game() {
    while (round < 5) {
        playerChoice = prompt("Choose rock, paper, or scissors!");
        playRound(playerChoice, computerPlay())
        round++;
    }

    if (playerScore > computerScore) {
        console.log("You win the game!")
    } else {
        console.log("You lose!")
    }
}

game()