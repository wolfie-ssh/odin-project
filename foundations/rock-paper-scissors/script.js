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

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let humanScore = 0;
let computerScore = 0;
