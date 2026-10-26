function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let computerchoice = num === 0 ? "Rock" : num === 1 ? "Paper" : "Scissors";
  return computerchoice;
}

function getHumanChoice() {
  return prompt("Rock! Paper! Scissors!");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
      let message;
      let normalizedHumanChoice = humanChoice.toLowerCase();

    switch (computerChoice.toLowerCase()) {
      case "rock":
        message =
          normalizedHumanChoice === "scissors"
            ? ((computerScore += 1), "You lose!")
            : normalizedHumanChoice === "paper"
              ? ((humanScore += 1), "You win!")
              : "Try again!";
        break;
      case "paper":
        message =
          normalizedHumanChoice === "rock"
            ? ((computerScore += 1), "You lose!")
            : normalizedHumanChoice === "scissors"
              ? ((humanScore += 1), "You win!")
              : "Try again!";
        break;
      case "scissors":
        message =
          normalizedHumanChoice === "rock"
            ? ((humanScore += 1), "You win!")
            : normalizedHumanChoice === "paper"
              ? ((computerScore += 1), "You lose!")
              : "Try again!";
    }
    console.log(
      "You: " +
        humanChoice.charAt(0).toUpperCase() +
        humanChoice.slice(1).toLowerCase(),
    );
    console.log("Computer: " + computerChoice);
    console.log(message);
  }

  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  let verdict =
    computerScore > humanScore
      ? "You lost this game. Refresh to try again."
      : computerScore < humanScore
        ? "You won this game! You're amazing!"
        : "It's a tie!";
  console.log("You: " + humanScore);
  console.log("Computer: " + computerScore);
  console.log(verdict);
}

playGame();
