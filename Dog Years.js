/* We are going to convert my age into dog years. We are using const so that my age will not change.*/
const myAge = 23;

/* the early years of a dog's life equates to 10.5 years each, so we are going to keep this part seperate from the later years*/
let earlyYears = 2;
earlyYears *= 10.5;

/* The early years of a dog is 2 human years. So we are going to subtract two years from my age to continue the equation*/
let laterYears = myAge - 2;

/*we are goin to multply lateryears by 4 to culculate my years to the dog years*/
laterYears *= 4;

//console.log(earlyYears);
//console.log(laterYears);

/* the next line of code is going to show my age in dog years*/
let myAgeInDogYears = earlyYears + laterYears;

/* this line is my name and it will return it in all lowercase.*/
let myName = 'Elijah Chatmon'.toLowerCase();

/* this is the last line of code where I am going to make the final output in the console.log*/
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`)
