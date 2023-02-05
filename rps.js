const weapons = ['Rock', 'Paper', 'Scissors'];



function getComputerChoice(){
  return weapons[Math.floor(Math.random()* weapons.length)];
}

let computerWs = 0;
let userWs = 0;
// DOM
const body = document.body;
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const div = document.getElementById("results");
const scoreboard = document.createElement("h3");
scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
div.appendChild(scoreboard);
const result = document.createElement("p");
result.textContent = "";
div.appendChild(result);


function adjustGame(choice){
  if (computerWs == 5){
    result.textContent = `The computer won with ${choice}`;
    userWs = 0;
    computerWs = 0;
  } else if (userWs == 5){
    result.textContent = `You won won with ${choice}`;
    userWs = 0;
    computerWs = 0;
  }
};






rockButton.addEventListener("click", function(){
  let computerChoice = getComputerChoice();
  let userChoice = 'Rock';
  if (computerChoice =='Scissors'){
    userWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Rock beats Scissors!";
    adjustGame(userChoice);
  } else if (computerChoice == 'Rock'){
    computerChoice=getComputerChoice();
    result.textContent = 'Both played Rock.'
  } else {
    computerWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Paper beats Rock!";
    adjustGame(computerChoice);
  }
});

paperButton.addEventListener("click", function(){
  let computerChoice = getComputerChoice();
  let userChoice = 'Paper';
  if (computerChoice =='Rock'){
    userWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Paper beats Rock!";
    adjustGame(userChoice);
  } else if (computerChoice == 'Paper'){
    computerChoice=getComputerChoice();
    result.textContent = 'Both played Paper.'
    adjustGame();
  } else {
    computerWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Scissors beats Paper!";
    adjustGame(computerChoice);
  }
});

scissorsButton.addEventListener("click", function(){
  let computerChoice = getComputerChoice();
  let userChoice = 'Scissors';
  if (computerChoice =='Paper'){
    userWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Scissors beats Paper!";
    adjustGame(userChoice);
  } else if (computerChoice == 'Scissors'){
    computerChoice=getComputerChoice();
    result.textContent = 'Both played Scissors.';
  } else {
    computerWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Rock beats scissors!";
    adjustGame(computerChoice);
  }
});
