const moves = ["rock", "paper" ,"scissors"];
let computerMove = "";

function getComputerChoice (computerMove) {
    const randomMove = Math.floor(Math.random() * moves.length);
    return moves[randomMove];
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let outcome = "";

function oneRoundGame (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        outcome = "You Lose, Paper beats Rock";
        console.log("You Lose, Paper beats Rock");
        console.log(`Computer has ${computerScore} points`);
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        outcome = "You Win, Rock Beats Paper";
        console.log("You Win, Rock Beats Paper");
        console.log(`You have ${playerScore} points`);
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        outcome = ("Tie, no points awarded");
        console.log("Tie, no points awarded");
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        outcome = ("Tie, no points awarded");
        console.log("Tie, no points awarded");
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore; 
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        outcome = ("You Win, Paper beats Rock");
        console.log("You Win, Paper beats Rock");
        console.log(`You have ${playerScore} points`);
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        outcome = ("You Lose, Scissors beats Paper");
        console.log("You Lose, Scissors beats Paper");
        console.log(`Computer has ${computerScore} points`);
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        outcome = ("You Win, Scissors beats Paper");
        console.log("You Win, Scissors beats Paper");
        console.log(`You have ${playerScore} points`);
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        outcome = ("Tie, no points awarded");
        console.log("Tie, no points awarded");
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        outcome = ("You Lose, Rock Beats Scissors");
        console.log("You Lose, Rock Beats Scissors");
        console.log(`Computer has ${computerScore} points`);
        document.getElementById('outcome').innerHTML = outcome;
        document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
        document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;
    }
    else {
        console.log("Incorrect Entry");
    }
}

const div = document.createElement('div');
div.id = 'container';
document.body.appendChild(div);
div.style.backgroundColor = 'lightblue';
div.style.border = 'solid';
document.getElementById("container").setAttribute("align", "center");

const h1 = document.createElement('h1');
h1.id = 'title';
h1.textContent='Rock Paper Scissors';
div.appendChild(h1);

const moveh2 = document.createElement('h2');
moveh2.id = 'title';
moveh2.textContent='Pick Your Move';
div.appendChild(moveh2);

const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
rockButton.id = 'rockButton';
rockButton.onclick = function () {
    oneRoundGame('rock', getComputerChoice());
    if (playerScore >= 5) {
        window.alert("You Beat the Computer");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if (computerScore >= 5){
        window.alert("You Lost to the Computer");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if ("Incorrect Entry" || "Tie, no points awarded") {
        return;
    }
    else {
        console.log("Error");
    }

}
div.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
paperButton.id ='paperButton';
paperButton.onclick = function () {
    oneRoundGame('paper', getComputerChoice());
    if (playerScore >= 5) {
        window.alert("You Beat the Computer");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if (computerScore >= 5){
        window.alert("You Lost to the Computer");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if ("Incorrect Entry" || "Tie, no points awarded") {
        return;
    }
    else {
        console.log("Error");
    }
}
div.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
scissorsButton.id = 'scissorsButton';
scissorsButton.onclick = function () {
    oneRoundGame('scissors', getComputerChoice());
    if (playerScore >= 5) {
        window.alert("You Beat the Computer");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if (computerScore >= 5){
        window.alert("You Lost to the Computer");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    else if ("Incorrect Entry" || "Tie, no points awarded") {
        return;
    }
    else {
        console.log("Error");
    }
}
div.appendChild(scissorsButton);

const h2 = document.createElement('h2');
h2.id = 'title';
h2.textContent='Scoreboard';
div.appendChild(h2);

const paragraph = document.createElement('p');
paragraph.id = 'playerScore';
paragraph.textContent=`Your score: ${playerScore}`;
div.appendChild(paragraph);
document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;


const paragraph1 = document.createElement('p');
paragraph1.id = 'computerScore';
paragraph1.textContent=`Computers score: ${computerScore}`;
div.appendChild(paragraph1);
document.getElementById('computerScore').innerHTML = "Computers score: " + computerScore;

const outcomeh2 = document.createElement('h2');
outcomeh2.id = 'title';
outcomeh2.textContent='Outcome';
div.appendChild(outcomeh2);

const outcomeline = document.createElement('p');
outcomeline.id = "outcome";
outcomeline.textContent = outcome;
div.appendChild(outcomeline);
document.getElementById('outcome').innerHTML = outcome;

const refreshButton = document.createElement('button');
refreshButton.textContent = "Play Again";
refreshButton.id = 'refreshButton';
refreshButton.onclick = function () {
    location.reload();
    return false;
}
div.appendChild(refreshButton);

/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("What is your move").toLowerCase();
        const computerSelection = getComputerChoice();
        oneRoundGame(playerSelection, computerSelection);

        if (playerScore == 3) {
            window.alert("You Beat the Computer");
            return;
        }
        else if (computerScore == 3){
            window.alert("You Lost to the Computer");
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
*/
//console.log(game());