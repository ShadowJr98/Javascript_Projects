let userName = 'Sarah';

//ternary expression for the username
userName ? console.log(`Hello, ${userName}`)
: console.log('Hello!');

const userQuestion = 'Will I get a raise in the next year?';

userName ? console.log(`${userName} asked: ${userQuestion}`)
: console.log(`The user asked: ${userQuestion}`);

// this next line of code is to generate a random number
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
}

// the output for the magic ball
console.log(`The eight ball answered: ${eightBall}`);
