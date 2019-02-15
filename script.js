function computerPlay(){
let options = ['rock', 'paper', 'scissors'];
let randOpt = options[Math.floor(Math.random()*options.length)];
return options[randOpt];
}