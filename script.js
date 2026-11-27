const container = document.querySelector("div");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


// const humanScoreElem = document.createElement("div");
// humanScoreElem.classList.add("humanScoreElem");
// const computerScoreElem = document.createElement("div");
// computerScoreElem.classList.add("computerScoreElem");

scoreDiv.append(humanScoreElem, computerScoreElem);
container.append(messageElem, scoreDiv);

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
          ? ((computerScore += 1), "You lose! Rock beats scissors!")
          : humanChoice === "paper"
            ? ((humanScore += 1), "You win! Paper beats rock!")
            : "It's a tie. Try again!";
      break;
    case "paper":
      message =
        humanChoice === "rock"
          ? ((computerScore += 1), "You lose! Paper beats rock!")
          : humanChoice === "scissors"
            ? ((humanScore += 1), "You win! Scissors beats paper!")
            : "It's a tie. Try again!";
      break;
    case "scissors":
      message =
        humanChoice === "rock"
          ? ((humanScore += 1), "You win! Rock beats scissors!")
          : humanChoice === "paper"
            ? ((computerScore += 1), "You lose! Scissors beats paper!")
            : "It's a tie. Try again!";
  }

  messageElem.textContent = message;
  humanScoreElem.textContent = `You: ${humanScore}`;
  computerScoreElem.textContent = `Computer: ${computerScore}`;
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

rockButton.d























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
