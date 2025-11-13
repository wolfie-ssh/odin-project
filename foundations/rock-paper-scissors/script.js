function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    let randomChoice = " ";
    if (randomNum > 0 && randomNum <= 33) {
        randomChoice = "rock";
    }
    else if (randomNum >= 34 && randomNum <=66 ) {
        randomChoice = "paper";
    }
    else {
        randomChoice = "scissors";
    }
    return randomChoice;
}

function getHumanChoice() {
    let inputText = prompt("Enter Your Choice: ");
    let HumanChoice = inputText.toLowerCase();
    return HumanChoice;
}

function playRound(computerChoice, humanChoice) 
{
    function humanWin() {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    function humanLose() {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }


if(computerChoice == "rock" && humanChoice == "paper") {
    humanWin();
    humanScore++;
}

else if(computerChoice == "paper" && humanChoice == "scissors" ) {
    humanWin();
    humanScore++;
}

else if(computerChoice == "scissors" && humanChoice == "rock") {
    humanWin();
    humanScore++;
}

else if(computerChoice == "rock" && humanChoice == "scissors") {
    humanLose();
    computerScore++;
}

else if(computerChoice == "paper" && humanChoice == "rock") {
    humanLose();
    computerScore++;
}

else if(computerChoice == "scissors" && humanChoice == "paper") {
    humanLose();
    computerScore++;
}
else {
    console.log("Draw");
}
console.log(`Your Score is ${humanScore} vs ComputerScore ${computerScore}`);
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(computerChoice, humanChoice);
let humanScore = 0;
let computerScore = 0;
