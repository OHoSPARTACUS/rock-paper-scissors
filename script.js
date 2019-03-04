let userScore = 0;
let cpuScore = 0;
let round = 1;

function startGame(playerSelection){
    computerSelection = cpuSelection();
    let roundWinner = playRound(playerSelection, computerSelection);
     ++round;
    document.getElementById("round").innerHTML = round;
    document.getElementById("user-result").innerHTML = playerSelection;
    document.getElementById("cpu-result").innerHTML = computerSelection;
    
    setPoints(roundWinner);
    checkEndGame();   
}

//CPU Choice Selection.
function cpuSelection(){
let options = ['rock', 'paper', 'scissors'];
let randOpt = options[Math.floor(Math.random()*options.length)];
return randOpt;
};

//Round of game, compares player choice with CPU choice, returns result.
function playRound(playerSelection, computerSelection) {
    switch(computerSelection){
        case 'rock':
            if(playerSelection == 'paper'){
                result = 'win'; return result;
            }else if(playerSelection == "scissors"){
                result = 'lose'; return result;
            }else{
                result = 'tied'; return result;
            }
            break;
        case 'paper':
            if(playerSelection == 'rock'){
                result = 'lose'; return result;
            }else if(playerSelection == "scissors"){
                result = 'win'; return result;
            }else{
                result = 'tied'; return result;
            }
            break;
        case 'scissors':
            if(playerSelection == 'rock'){
                result = 'lose'; return result;
            }else if(playerSelection == 'paper'){
                result = 'win'; return result;               
            }else{
                result = 'tied'; return result;  
            }
    }
}

function setPoints(roundWinner){   
    if(roundWinner == 'win'){
        userScore++;
        document.getElementById("pScore").innerHTML = userScore;
        document.getElementById("game-msg").innerHTML = "Round Win!"
    }else if(roundWinner == 'lose'){
        cpuScore++;
        document.getElementById("cScore").innerHTML = cpuScore;
        document.getElementById("game-msg").innerHTML = "Round Lose!"
    }else if(roundWinner == 'tied'){
        document.getElementById("game-msg").innerHTML = "Round Tied!"
    }   
}
function checkEndGame(userScore, cpuScore){
   if (round == 5){
       if(userScore > cpuScore){
           document.getElementById("game-result").innerHTML = "Game over! You're a Winner!";
           disableButtons();
       }else if(userScore < cpuScore){
        document.getElementById("game-result").innerHTML = "Game over! You're a Loser!";
        disableButtons();
       }
   }
}

function disableButtons() {
	var elems = document.getElementsByClassName("buttons");
	for(var i = 0; i < elems.length; i++) {
	    elems[i].disabled = true;
	}
}

