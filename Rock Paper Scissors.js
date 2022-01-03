// For the game we need to geet the userinput first
const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput ==='bomb'){
      return userInput;
      }
      else{
        console.log('You have entered an invalid choice... Please try again.');
      }
    };
    
    // This Function is going to make the computer choose
    const getComputerChoice = () => {
      const getRandomNumber = Math.floor(Math.random()*3);
    
    //switch case method to determine the computer's choice
    switch(getRandomNumber){
      case 0:
      return 'rock';
      case 1 :
      return 'paper';
      case 2:
      return 'scissors';
      }
    };
    
    // This function will determine the winner
    function determineWinner(userChoice, computerChoice){
      if(userChoice === 'bomb'){
      return 'You won!';
      }
    if(userChoice === computerChoice){
      return 'Its a tie...';
      }
    if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'AI won!';
          }
          else{
            return 'You won!';
          }
        }
    if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'AI won!';
          }
          else{
            return 'You won!';
          }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          return 'AI won!';
          }
          else{
            return 'You won!';
          }
    }
    };
    
    /* This is a test to make sure everything is working so far
    console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
    console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
    console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!' */
    
    //this function is how we are going to play the game
    const playGame = () => {
      const userChoice = getUserChoice('bomb');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('The computer threw: ' + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    };
    
    // this will start the game
    playGame();
    