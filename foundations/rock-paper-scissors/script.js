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
    console.log(randomChoice);
}

getComputerChoice();

