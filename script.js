let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let Computerchoice = (num === 0) ? "Rock" : (num === 1) ? "Paper" : "Scissors";
    return Computerchoice
}


function getHumanChoice() {
    let Humanchoice = prompt("Rock! Paper! Scissors!");
    return Humanchoice
} 

function playRound(humanChoice, computerChoice) {
    let humanScore;
    let computerScore;
    let message;

    switch (computerChoice.toLowerCase()) {
        case "rock":
            message = (humanChoice.toLowerCase() === "rock") ? "Try again!" : (humanChoice.toLowerCase() === "paper") ? (humanScore += 1, "You win!") : (computerScore += 1, "You lose!");
            console.log(message);
            break;
        case "paper":
            message = (humanChoice.toLowerCase() === "rock") ? (computerScore += 1, "You lose!") : (humanChoice.toLowerCase() === "paper") ? "Try again!" : (humanScore += 1, "You win!");
            console.log(message);
            break;
        case "scissors":
            message = (humanChoice.toLowerCase() === "rock") ? (humanScore += 1, "You win!") : (humanChoice.toLowerCase() === "paper") ? (computerScore += 1, "You lose!") : "Try again!";
            console.log(message);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You: " + humanSelection);
console.log("Computer: " + computerSelection);
playRound(humanSelection, computerSelection);