const rock = document.getElementById("rock_btn");
const paper = document.getElementById("paper_btn");
const scissors = document.getElementById("scissors_btn");
const gameContent = document.querySelector(".game_content");
const player = document.getElementById("player_score");
const computer = document.getElementById("computer_score");
const rounds = document.querySelector(".rounds h2");
const winner = document.querySelector(".winner h3");
const computerImages = document.querySelector(".computer_img");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", (e) => {
  playRound("rock");
});

paper.addEventListener("click", (e) => {
  playRound("paper");
});

scissors.addEventListener("click", (e) => {
  playRound("scissors");
});

function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  computerImages.src = `./images/${computerSelection}.svg`;
  computerImages.parentNode.style.display = "block";
  console.log(`Computer selected ${computerSelection}`);

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("Draw");
      winner.textContent = "Round Draw";
    } else if (computerSelection === "paper") {
      console.log("Computer won");
      winner.textContent = "Computer won this round. Paper beats rock.";
      computerScore++;
    } else if (computerSelection === "scissors") {
      console.log("Player won");
      winner.textContent = "Player won this round. Rock beats scissors.";
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("Player won");
      winner.textContent = "Player won this round. Paper beats rock.";
      playerScore++;
    } else if (computerSelection === "paper") {
      console.log("Draw");
      winner.textContent = "Round Draw";
    } else if (computerSelection === "scissors") {
      console.log("Computer won");
      winner.textContent = "Computer won this round. Scissors beats paper.";
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer won");
      winner.textContent = "Computer won this round. Rock beats scissors";
      computerScore++;
    } else if (computerSelection === "paper") {
      console.log("player won");
      playerScore++;
      winner.textContent = "Player won this round. Scissors beats paper";
    } else if (computerSelection === "scissors") {
      console.log("Draw");
      winner.textContent = "Round Draw";
    }
  }
  rounds.textContent = `Round ${playerScore + computerScore}`;
  if (playerScore >= 3) {
    rounds.textContent = "Player won!";
    playerScore = 0;
    computerScore = 0;
    computerImages.parentNode.style.display = "none";
  } else if (computerScore >= 3) {
    rounds.textContent = "Computer won!";
    playerScore = 0;
    computerScore = 0;
    computerImages.parentNode.style.display = "none";
  }
  // Update scores
  player.textContent = `${playerScore}`;
  computer.textContent = `${computerScore}`;
}
