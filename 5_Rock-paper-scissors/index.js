//algorithm
/* 1_Get the user`s choice
2_Get the computer`s choice.
3_Compare the two choices and determine a winner
4_ Start the program and display the results.
 */

function getUserChoice (userInput){ 
  userInput = userInput.toLowerCase();
  let userChoice = '';
  if (userInput === 'rock'){
    userChoice = 'rock';
    console.log(`You chose: ${userChoice}`);
  }else if(userInput === 'paper'){
    userChoice = 'paper';
    console.log(`You chose: ${userChoice}`);
  }else if(userInput === 'scissors'){
    userChoice = 'scissors';
    console.log(`You chose: ${userChoice}`)
  }else if (userInput === 'bomb'){
    userChoice = 'bomb';
    console.log(`You chose: ${userChoice}!`)
  }else{
    console.log('Error, choose rock, paper, scissors or the secret word');
  }
  return userChoice
};


function getComputerChoice (){
  let computerChoice = '';
  let randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0){
    computerChoice = 'rock';
    console.log(`Computer chose: ${computerChoice}`)
  }else if(randomNumber === 1){
    computerChoice = 'paper';
    console.log(`Computer chose: ${computerChoice}`)
  }else if(randomNumber === 2){
    computerChoice = 'scissors';
    console.log(`Computer chose: ${computerChoice}`)
  }
  return computerChoice 
};


function determineWinner (userChoice, computerChoice){
  let result = '';
  if(userChoice === 'rock' && computerChoice === 'rock'|| userChoice === 'paper' && computerChoice === 'paper' || userChoice === 'scissors' && computerChoice === 'scissors'){
    result = '"you are tie"';
  }else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      result = '"Computer won"';
    }else if(computerChoice === 'scissors'){
      result = '"you won"';
    };
  }else if (userChoice === 'paper'){
    if(computerChoice === 'rock'){
      result = '"you won"';
    }else if(computerChoice === 'scissors'){
      result = '"computer won"';
    };
  }else if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      result = '"computer won"';
    }else if(computerChoice === 'paper'){
      result = '"you won"';
    };
  }else if(userChoice === 'bomb'){
    result = 'you won anyways'
  }
    return console.log(result);
};

determineWinner (getUserChoice('bomb'),getComputerChoice());

// Another way to do it
/* function playGame (){ 
  let userChoice = getUserChoice('bomb'); 
  console.log(userChoice);
  let computerChoice = getComputerChoice(); 
  console.log(computerChoice);
  determineWinner(userChoice, computerChoice);
};
playGame(); */