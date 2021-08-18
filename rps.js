
function computerPlay(){
    let randomNumber = getRandomInt(3);
    console.log(randomNumber);
    let rps = ['Rock','Paper','Scissors'];
    return rps[randomNumber];
}

let playerWins = 0;
let computerWins = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

var computerSelection;

function playSeries(rounds){
    playerWins = 0;
    computerWins = 0;

    for (j = 0; j < rounds; j++){
        let result = playRound();
        console.log(result);
    }
    if (playerWins > computerWins){
        return "Congraluations, you win with a total round score of " + playerWins; 
    }
    if (playerWins == computerWins){
        return "You have tied with a total round score of " + playerWins; 
    }
    else{
        return "Oh no, you have lost with a score of" + playerWins + "better luck next time!";
    }
}

function playRound(){
    playerSelection = "blank"
    computerSelection = computerPlay();
    playerSelection = window.prompt("Rock, paper, scissors?", "rock");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock'){

        if (computerSelection == 'Rock'){
            return "It's a Tie!"
        }
        else if (computerSelection == 'Scissors'){
            playerWins++;
            return "You win! Rock beats Scissors."
        
        }
        else {

            computerWins++;
            return "You lost! Paper beats Rock!"
         
        }
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'Scissors'){
            return "It's a Tie!";
        }
        else if (computerSelection == 'Paper'){
            playerWins++;
            return "You win! Scissors beats Paper.";
        
        }
        else {
            computerWins++;
            return "You lost! Rock beats Scissors!";
            
        }
    }
    if (playerSelection == 'paper'){
        if (computerSelection == 'paper'){
            return "It's a Tie!";
        }
        else if (computerSelection == 'Rock'){
            playerWins++;
            return "You win! Paper beats Rock.";
        
        }
        else {
            computerWins++;
            return "You lost! Scissors beats Paper!";
        }
    }
}

console.log(computerSelection);