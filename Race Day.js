// This line assigns the race numbers randomly
let raceNumber = Math.floor(Math.random() * 1000);

// variable for if the runner is early or not
let registerEarly = false;

// variable for the runners age
let runnerAge = 18;

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
else if(runnerAge > 18 && !registerEarly){
  console.log(`${raceNumber} will race at 11:00am`);
}
else if(runnerAge === 18){
  console.log('Runner should see the registration desk.')
}