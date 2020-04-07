let playerScore = 0;
let computerScore = 0;
let round = 0;
const playerScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerChoiceDisplay = document.querySelector("#user-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const result = document.querySelector(".result")
const buttons = document.querySelectorAll(".btn");
const userPrompt = document.querySelector(".user-prompt")

let computerPlay = () => {
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * Math.floor(3))];
}

let playerLosesRound = () => {
    console.log("You lose this round!");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    result.textContent = "You lose this round!";
}

let playerWinsRound = () => {
    console.log("You win this round!");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    result.textContent = "You win this round!"
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
    if(playerScore === 3) {
        result.textContent = "You win the game!";
        gameEnd();
    } else if (computerScore === 3) {
        result.textContent = "You lose the game!";
        gameEnd();
    }
}

function gameEnd() {
    buttons.forEach(button => button.setAttribute("disabled", ""));
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.setAttribute("class", "btn");
    userPrompt.textContent = "";
    userPrompt.appendChild(newGameBtn);
    newGameBtn.addEventListener("click", newGame);
}

function newGame() {
    buttons.forEach(button => button.removeAttribute("disabled"));
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    userPrompt.textContent = "Make your move!";
    result.textContent = "";
}

buttons.forEach(button => {
    button.addEventListener("click", playRound);
    button.addEventListener("click", game);
});
