const getUserChoice= userInput  => {
userInput = userInput.toLowerCase();
if (userInput=== 'rock' || userInput===  'paper' || userInput=== 'scissors'|| userInput=== 'bomb'){
return userInput;
}
else{
console.log("Error: Please type rock, paper, or scissors"); 
}
};

const getComputerChoice = () => {
  const randomNumber= Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2: 
    return 'scissors';
    break;
  }
};

const determineWinner = (userChoice,computerChoice ) => {
  if (userChoice === 'bomb'){
    return 'Congratulations, you won';
  }
  if (userChoice === computerChoice){
    return 'The game was a tie';
  }
  if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The Computer won';
    }
    else{
      return 'Congratulations, you won';
    }
  }

  if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'SORRY, the Computer won';
    }
    else{
      return 'Congratulations, you won';
    }
  }

  if(userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return ' SORRY, the Computer won';
    }
    else{
      return 'Congratulations, you won';
    }
  }
};

const playGame= () => {
const userChoice = getUserChoice('bomb');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();