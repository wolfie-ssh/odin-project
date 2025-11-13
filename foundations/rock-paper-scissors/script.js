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

function getHumanChoice() {
    let HumanChoice = prompt("Enter Your Choice: ");
    return HumanChoice;
    console.log(HumanChoice);
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

/*

Pseudo Code for getComputerChoice

1. Define a function named getComputerChoice.
2. Generate a random number between 0 and 1 using Math.random().
3. Use conditional statements to decide the return value:
   - If the number is less than 1/3, return "rock".
   - Else if the number is less than 2/3, return "paper".
   - Else, return "scissors".
4. Test the function by calling it and printing the result to the console. 

Pseudo Code for getHumanChoice

1. Define a function named getHumanChoice.
2. Ask the user for input using prompt (e.g., "Enter rock, paper, or scissors").
3. Store the user input in a variable (e.g., choice).
4. Return the user input from the function.
5. Test the function by calling it and printing the result to the console.

*/
