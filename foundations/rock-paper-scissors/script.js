function getComputerChoice() {
    let randomNum = Math.random();

    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer Chose: ${computerChoice}`);

        if (humanChoice == computerChoice) {
            console.log("It's a Draw!");
        }
        else if (
            (humanChoice == "rock" && computerChoice == "scissors" ) ||
            (humanChoice == "paper" && computerChoice == "rock" ) ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice} `);
            humanScore++;
        }

        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }

        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore} `);
        console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Final Results");
    if (humanScore > computerScore) {
        console.log(`You win the game! Your Score: ${humanScore} vs Computer Score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Computer Score ${computerScore} Your Score: ${humanScore}`);
    } else {
        console.log(`Its a Draw! Your Score: ${humanScore} vs Computer Score: ${computerScore} `);
    }

}

playGame();