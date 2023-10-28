let options = ["rock", "paper", "scissor"];

function getComputerChoice1(options){
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
let getComputerChoice = getComputerChoice1(options);
let playerChoice =prompt('')

// let playerChoice ='scissor';
playerChoice = playerChoice.toLowerCase();
console.log(getComputerChoice);
console.log(playerChoice);
// code is working



  function game (getComputerChoice ,playerChoice){
if (playerChoice === "scissor" && getComputerChoice === "rock"){
    console.log("You lost!,Rock Cruhes Scissor");
}
else if (playerChoice === "scissor" && getComputerChoice === "paper"){
console.log("You win!, Scissor Cut Paper");
}
else if (playerChoice === "rock" && getComputerChoice === "scissor"){
console.log("You win!,Rock Crushes Scissor");
}
else if (playerChoice === "rock" && getComputerChoice === "paper"){
console.log("You win!, Paper Cover rock");
}
else if (playerChoice === "paper" && getComputerChoice === "scissor"){
console.log("You lost!, Scissor Cut Paper");
}
else if (playerChoice === "paper" && getComputerChoice === "rock"){
console.log("You win!, Paper Cover rock");
}
else {
   console.log("Draw!, Both Players Choose The Same Thing");
}
}
console.log(game())