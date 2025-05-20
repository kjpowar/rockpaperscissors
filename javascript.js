let computerScore = 0;
let humanScore = 0;

const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('#buttons button');
const resetBtn = document.getElementById('reset');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let message = '';

    if (computerChoice === humanChoice) {
        message = `Draw! Both chose ${humanChoice}.`;
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        computerScore++;
        message = `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    } else {
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = message;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? 'You win the game!' : 'Computer wins the game!';
        resultDiv.textContent = `${message} ${winner}`;
        buttons.forEach(btn => btn.disabled = true);
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(btn.dataset.choice);
        }
    });
});

resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = '';
    buttons.forEach(btn => btn.disabled = false);
});
