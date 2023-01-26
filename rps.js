
const weapons = ['Rock', 'Paper', 'Scissors'];



function getComputerChoice(){
  const randomWeapon = Math.floor(Math.random()* weapons.length);
  return weapons[randomWeapon];
}

let computerWs = 0;
let userWs = 0;
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


function adjGame(){
  if (userWs==5){
    result.textContent = "You win!";
    userWs = 0;
    computerWs = 0;
  } else if (computerWs==5){
    result.textContent = "The computer won";
    userWs=0;
    computerWs=0;
  }
}





rockButton.addEventListener("click", () => {
  const userChoice = 'Rock';
  let computerChoice = getComputerChoice();
  if (computerChoice=='Scissors'){
    userWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Rock beats Scissors!";
    adjGame();
    
  } else if (computerChoice=='Rock'){
    computerChoice=getComputerChoice();
  } else {
    computerWs += 1;
    scoreboard.textContent = `User ${userWs} - ${computerWs} Computer`;
    result.textContent = "Paper beats Rock!";
    adjGame();
    
  }
});



