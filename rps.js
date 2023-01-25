
const weapons = ['Rock', 'Paper', 'Scissors'];
const randomWeapons = Math.floor((Math.random()* weapons.length))


// Get Choices
function getComputerChoice(){
    let computerChoice = randomWeapons;
    return computerChoice
   
}

function getPlayerChoice(){
    let playerChoice = prompt('Rock, paper, or scissors?')
    (playerChoice == 'Rock')? 0: (playerChoice == 'Paper')? 1: (playerChoice == 'scissors')? 2: undefined;
    return playerChoice
}





// Game Function
function playGame(roundCountPref){
    for (let i = 0; i <= (roundCountPref); i++){
        getComputerChoice();
        getPlayerChoice();
        if (playerChoice == undefined){
            console.log('Please type rock, paper, or scissors')
        }
    }
}



