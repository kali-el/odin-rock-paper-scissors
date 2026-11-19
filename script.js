const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let computerchoice = num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
  return computerchoice;
}

function playRound(humanChoice, computerChoice) {
  let message;

  switch (computerChoice) {
    case "rock":
      message =
        humanChoice === "scissors"
          ? ((computerScore += 1), "You lose!")
          : humanChoice === "paper"
            ? ((humanScore += 1), "You win!")
            : "Try again!";
      break;
    case "paper":
      message =
        humanChoice === "rock"
          ? ((computerScore += 1), "You lose!")
          : humanChoice === "scissors"
            ? ((humanScore += 1), "You win!")
            : "Try again!";
      break;
    case "scissors":
      message =
        humanChoice === "rock"
          ? ((humanScore += 1), "You win!")
          : humanChoice === "paper"
            ? ((computerScore += 1), "You lose!")
            : "Try again!";
  }

  console.log("You: " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
  console.log("Computer: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
  console.log(message);
}

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice()),
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice()),
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice()),
);
























// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i <= 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }

//   let verdict =
//     computerScore > humanScore
//       ? "You lost this game. Refresh to try again."
//       : computerScore < humanScore
//         ? "You won this game! You're amazing!"
//         : "It's a tie!";
//   console.log("You: " + humanScore);
//   console.log("Computer: " + computerScore);
//   console.log(verdict);
// }

// playGame();
