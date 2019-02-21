
let userScore = 0;
let cpuScore = 0;
let roundCount = 1;

function computerPlay(){
let options = ['rock', 'paper', 'scissors'];
let randOpt = options[Math.floor(Math.random()*options.length)];
return randOpt;
};

function playRound(playerSelection, computerSelection) {
    const computerSelection = computerPlay();
    const playerSelection = prompt('Please type rock, paper, or scissors');
    let result;
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
                result = 'tied'
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
        return 'You '
    }
    
}

