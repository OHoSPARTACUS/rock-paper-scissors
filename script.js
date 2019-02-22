let userScore = 0;
let cpuScore = 0;
let roundCount = 0;

//CPU Choice Selection
function computerPlay(){
let options = ['rock', 'paper', 'scissors'];
let randOpt = options[Math.floor(Math.random()*options.length)];
return randOpt;
};

//Round of game, compares player choice with CPU choice
function playRound(playerSelection, computerSelection) {
    switch(computerSelection){
        case 'rock':
            if(playerSelection == 'paper'){
                result = 'win';
                ++userScore;
                ++roundCount;
            }else if(playerSelection == "scissors"){
                result = 'lose';
                ++cpuScore;
                ++roundCount;
            }else{
                result = 'tied';
                ++roundCount;
            }
            break;
        case 'paper':
            if(playerSelection == 'rock'){
                result = 'lose';
                ++cpuScore;
                ++roundCount;
            }else if(playerSelection == "scissors"){
                result = 'win';
                ++userScore;
                ++roundCount;
            }else{
                result = 'tied'
                ++roundCount;
            }
            break;
        case 'scissors':
            if(playerSelection == 'rock'){
                result = 'lose';
                ++cpuScore;
                ++roundCount;
            }else if(playerSelection == 'paper'){
                result = 'win';
                ++userScore;
                ++roundCount;
            }else{
                result = 'tied';
                ++roundCount
            }
    
    }
    if (result == 'win'){
        return 'You win!';
    }else if(result == 'lose'){
        return 'You lose!'
    }else{
        return 'It\'s a tie!';
    }
}
//Game function, returns score, round, and winner of each round. winner declared
function game(){
    let playerSelection = prompt('Please type rock, paper, or scissors');
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log('Player Score:');
    console.log(userScore);
    console.log('CPU Score:');
    console.log(cpuScore)
    console.log('Round:');
    console.log(roundCount);
    console.log('CPU Choice:');
    console.log(computerSelection);
    
    if(roundCount >= 5){
        if(userScore > cpuScore){
            console.log('Game over! You\'re a winner!');
        }else if(userScore < cpuScore){
            console.log('Game over! You\'re a loser!');
        }else{
            console.log('Game over! It\'s a draw!');
        }
        cpuScore = 0;
        userScore = 0;
        roundCount = 0;
    }
}