# Rock Paper Scissors

A console-based Rock Paper Scissors game written in vanilla JavaScript, built as part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) foundations course.

You play five rounds against the computer. Each round you type your choice into a prompt, and the results are logged to the browser console.

## How to play

1. Open `index.html` in your browser.
2. Open the developer console (`F12`, or `Cmd+Option+J` on Mac / `Ctrl+Shift+J` on Windows and Linux).
3. When the prompt appears, type `Rock`, `Paper` or `Scissors` (case doesn't matter).
4. Repeat for five rounds. The console shows your choice, the computer's choice and the round result.
5. After round five, the final score and a verdict are logged. Refresh the page to play again.

> **Note:** `index.html` loads the script with `type="module"`. Some browsers block module scripts when a page is opened directly from disk (`file://`). If nothing happens, serve the folder locally instead, for example with the VS Code Live Server extension or `python3 -m http.server`, then visit `http://localhost:8000`.

## Example output

```
You: Rock
Computer: Scissors
You win!
```

```
You: 3
Computer: 1
You won this game! You're amazing!
```

## Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- Matching choices show "Try again!" and nobody scores, but the round still counts toward the five

## Project structure

```
.
├── index.html   # Loads script.js
├── script.js    # All game logic
└── README.md
```

## How the code works

| Function | Purpose |
| --- | --- |
| `getComputerChoice()` | Picks a random number from 0 to 2 and maps it to Rock, Paper or Scissors |
| `getHumanChoice()` | Prompts the player and returns what they typed |
| `playGame()` | Holds the scores, plays five rounds, then logs the final score and verdict |
| `playRound(humanChoice, computerChoice)` | Nested inside `playGame`. Compares the two choices, updates the scores and logs the round |

The scores and `playRound` are declared inside `playGame`, so every new game starts at 0 to 0.

## Known limitations

- Input isn't validated, as the project brief assumes valid input. Pressing Cancel, or typing something that isn't Rock, Paper or Scissors, will cause an error or an unfair result.
- The game runs only in the console, with no on-page interface.

## Ideas for next steps

- Re-prompt on invalid input and handle Cancel
- Let ties replay so exactly five decisive rounds are played
- Build a UI with buttons and a live score display (the next stage of the Odin Project)

## Built with

- HTML
- JavaScript (ES6+)
