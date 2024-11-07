// List of possible choices
const choices = ['🪨', '📄', '✂️'];

// Score variables
let playerScore = 0;
let computerScore = 0;

// Function to start the game
function startGame() {
  console.clear();
  console.log("Welcome to Rock, Paper, Scissors - Emoji Edition!");
  console.log("Choose your move: 🪨 Rock, 📄 Paper, ✂️ Scissors");
  console.log("Type 'rock()', 'paper()', or 'scissors()' to make your choice.");
  console.log(`Current score - Player: ${playerScore}, Computer: ${computerScore}`);
}

// Function for player's move
function playerMove(choice) {
  if (!choices.includes(choice)) {
    console.log("Invalid choice! Please choose 🪨, 📄, or ✂️");
    return;
  }
  const computerChoice = computerMove(); // Get the computer's move
  const result = determineWinner(choice, computerChoice); // Determine the winner
  updateScore(result);
  displayResult(result, choice, computerChoice);
}

// Function to randomly choose the computer's move
function computerMove() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  }
  if (
    (playerChoice === '🪨' && computerChoice === '✂️') ||
    (playerChoice === '📄' && computerChoice === '🪨') ||
    (playerChoice === '✂️' && computerChoice === '📄')
  ) {
    return "player";
  } else {
    return "computer";
  }
}

// Function to update the score
function updateScore(result) {
  if (result === "player") {
    playerScore++;
  } else if (result === "computer") {
    computerScore++;
  }
}

// Function to display the result of the round
function displayResult(result, playerChoice, computerChoice) {
  if (result === "tie") {
    console.log(`It's a tie! You both chose ${playerChoice}`);
  } else if (result === "player") {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  }
  console.log(`Score: Player - ${playerScore}, Computer - ${computerScore}`);
  console.log("Make your next move!");
}

// Initial game start
startGame();

// Example usage: Call these functions from the console to play
// playerMove('🪨'); // Player chooses Rock
// playerMove('📄'); // Player chooses Paper
// playerMove('✂️'); // Player chooses Scissors
