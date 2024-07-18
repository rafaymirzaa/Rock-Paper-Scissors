// The getCompChoice function integrates a random function into the code 
function getCompChoice() {                         
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else if (compChoice === 3) {
        return "scissors";
    }
}

// playRound function initially takes players choice and outputs the selected option
function playRound(playerSelection, computerSelection) {
    let playerScore = 0, compScore = 0;
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    // the logic behind selecting a choice and the computer testing it against its own random number given in the getCompchoice function
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "Player wins!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie ";
    } else {
        compScore++;
        return "Computer wins!";
    }
}

// add a function called playGame so that a 5 round game is played, score is kept, and winner is displayed at the end
function playGame() {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection;

        // input validation 
        while (true) {
            playerSelection = prompt("Rock, Paper, or Scissors: SHOOT!").toLowerCase(); // toLowerCase is a property to make the input case insensitive

            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                break; // Exit the loop if input is valid
            } else {
                alert("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
            }
        }

        let computerSelection = getCompChoice();

        alert(playRound(playerSelection, computerSelection));

        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
        } else if (playerSelection !== computerSelection) {
            compScore++;
        }
    }

    alert("Game Over");
    alert("Player's score: " + playerScore);
    alert("Computer's score: " + compScore);
}

playGame(); // Start the game when the page loads

