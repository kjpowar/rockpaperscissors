// Computer will randomly choose rock, paper or scissors.
function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3 + 1);
   
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    //console.log(`Computer chose ${computerChoice}`);
   return computerChoice;
}


// Human will select rock paper or scissors
function getHumanChoice() {
    humanChoice = prompt("Choose you weapon!, rock, paper or scissors!");
    
    if (humanChoice === null) {
        console.log("You didnt enter anything!");
    } else {
    humanChoice = humanChoice.toLowerCase();
    }
    //console.log(`You chose ${humanChoice}`);
    return humanChoice;
}


let computerScore = 0;
let humanScore = 0;


// Now the game process function, compare the both inputs and give result.
function playRound(computerChoice,  humanChoice){
   
   
        if (computerChoice === humanChoice){
            console.log("This is a draw!");
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log(`Computer Won! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Score Y:${humanScore} C:${computerScore}`)
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            console.log(`Score Y:${humanScore} C:${computerScore}`)
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            console.log(`Score Y:${humanScore} C:${computerScore}`)
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log(`Computer Won! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Score Y:${humanScore} C:${computerScore}`)
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log(`Computer Won! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Score Y:${humanScore} C:${computerScore}`)
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            console.log(`Score Y:${humanScore} C:${computerScore}`)
        }
        
    
}


// Actually Play the game

// Score will be added to the score board
function playGame(){

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();   
    

    playRound(computerSelection, humanSelection);

    //console.log(`Computer selected ${computerSelection}`);
    //console.log(`You selected ${humanSelection}`)
    //console.log(`Computer Score ${computerScore}`);
    //console.log(`Your Score ${humanScore}`)

    
 
}

    
while (humanScore < 5 && computerScore < 5){
    playGame();

    if (humanScore === 5) {
        console.log("YOU WIN!!!");
        break;
    } else if (computerScore === 5) {
        console.log("YOU LOOSE")
        break;
    }
}

// It will go for 5 rounds then declare a winner
