const moves = ["rock", "paper" ,"scissors"];
let computerMove = "";

function getComputerChoice (computerMove) {
    const randomMove = Math.floor(Math.random() * moves.length);
    return moves[randomMove];
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

function oneRoundGame (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        console.log("You Lose ,Paper beats Rock");
        console.log(`Computer has ${computerScore} points`);
        
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        console.log("You Win, Rock Beats Paper");
        console.log(`You have ${playerScore} points`);
        
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Tie, no points awarded");
   
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Tie, no points awarded");
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        console.log("You Win, Paper beats Rock");
        console.log(`You have ${playerScore} points`);
        
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        console.log("You Lose, Scissors beats Paper");
        console.log(`Computer has ${computerScore} points`);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        console.log("You Win, Sciccors beats Paper ");
        console.log(`You have ${playerScore} points`);
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Tie, no points awarded");
        
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        console.log("You Lose, Rock Beats Scissors");
        console.log(`Computer has ${computerScore} points`);
    }
    else {
        console.log("Incorrect Entry");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("What is your move").toLowerCase();
        const computerSelection = getComputerChoice();
        oneRoundGame(playerSelection, computerSelection);

        if (playerScore == 3) {
            console.log("You Beat the Computer");
            return;
        }
        else if (computerScore == 3){
            console.log("You Lost to the Computer");
            return;
        }
        else if ("Incorrect Entry" || "Tie, no points awarded") {
            i--;
        }
        else {
            console.log("Error");
        }
    }
}

console.log(game());