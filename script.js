let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let Computerchoice = (num === 0) ? "Rock" : (num === 1) ? "Paper" : "Scissors";
    return "Computer: " + Computerchoice
}



console.log(getComputerChoice());