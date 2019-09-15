
function init() {
    document.getElementById("handRock").onclick = function () {
        playGame('rock');
    }
    document.getElementById("handPaper").onclick = function () {
        playGame("paper");
    }
    document.getElementById("handScissors").onclick = function () {
        playGame("scissors");
    }

    document.getElementById("restartBtn").onclick = function () {
        playerWin = 0;
        computerWin = 0;
        tie=0;
        updateScore();
    }
}

function getUserChoise(userInput) {
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    else {
        alert("Invalid Choice !!");
    }
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3)

    switch (randomChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    }
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `It's a tie`;
    }
    switch (userChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                return 'Computer wins!';
            }
            else {
                return 'You wins!';
            }
        case 'paper':
            if (computerChoice === 'scissors') {
                return 'Computer wins!';
            }
            else {
                return 'You wins!';
            }
        case 'scissors':
            if (computerChoice === 'rock') {
                return 'Computer wins!';
            }
            else {
                return 'You wins!';
            }
    }
}

function playGame(userInput) {
    const userChoice = getUserChoise(userInput);
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    if (winner === 'You wins!') {
        playerWin++;
    }
    else if (winner === "Computer wins!") {
        computerWin++;
    }
    else {
        tie++;        
    }

    updateScore();
}

function updateScore() {
    document.getElementById('playerScore').innerHTML = playerWin;
    document.getElementById('computerScore').innerHTML = computerWin;
    document.getElementById('tieScore').innerHTML = tie;
}

let playerWin = 0;
let computerWin = 0;
let tie = 0;

init();
