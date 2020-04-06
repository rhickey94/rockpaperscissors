let playerScore = 0;
let computerScore = 0;
let round = 0;
const playerScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const result = document.querySelector(".result")

let computerPlay = () => {
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * Math.floor(3))];
}

let playerLosesRound = () => {
    console.log("You lose this round!");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    result.textContent = "You lose!";
}

let playerWinsRound = () => {
    console.log("You win this round!");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    result.textContent = "You win!"
}

let roundDraw = () => {
    console.log("Draw!");
    result.textContent = "Draw!"
}

function playRound(event) {
    const computerSelection = computerPlay();
    const playerSelection = event.target.value.toLowerCase();

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
    playerChoiceDisplay.textContent = `You chose ${playerSelection}.`
    computerChoiceDisplay.textContent = `CPU chose ${computerSelection}.`
}


function game() {
    // while (round < 5) {
    //     playerChoice = prompt("Choose rock, paper, or scissors!");
    //     playRound(playerChoice, computerPlay())
    //     round++;
    // }

    // if (playerScore > computerScore) {
    //     console.log("You win the game!")
    // } else {
    //     console.log("You lose!")
    // }
}

game()

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", playRound)
});
console.log(buttons);