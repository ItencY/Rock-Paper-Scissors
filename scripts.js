const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  let computerChoice = choices[randomChoice];
  return computerChoice;
}

function getHumanChoice() {
  let promptCon = true;
  let humanChoice;
  while (promptCon) {
    humanChoice = prompt("ROCK, PAPER, SCISSORS").toLowerCase();
    if (choices.includes(humanChoice)) {
      promptCon = false;
    }
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  switch ((humanChoice, computerChoice)) {
    case humanChoice == computerChoice:
      console.log("Same choice. Zero score");
      break;
    case ("rock", "paper"):
    case ("paper", "scissors"):
    case ("scissors", "rock"):
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      break;
    default:
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  }
  console.log(`human: ${humanScore}, computer: ${computerScore}`);
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore >= computerScore) {
    console.log("You won the whole game");
  } else {
    console.log("You lost to the computer");
  }
}

playGame(5);
