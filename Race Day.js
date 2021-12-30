// This line assigns the race numbers randomly
let raceNumber = Math.floor(Math.random() * 1000);

// variable for if the runner is early or not
let registerEarly = true;

// variable for the runners age
let runnerAge = 19;

// control flow to see if the runnnner is an adult or not
if(runnerAge > 18 && registerEarly === true){
raceNumber += 1000;
  console.log(raceNumber);
}
else{
  console.log('The Runner cannot race.');
}

// This control flow will show the registration time
if(runnerAge > 18 && registerEarly){
  console.log(`${raceNumber} will race at 9:30 am.`);
}
else{
  console.log('You will not be racing early.');
}