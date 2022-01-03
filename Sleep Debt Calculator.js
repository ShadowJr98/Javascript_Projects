//This is going to be the number of hours of sleep.
const getSleepHours = day => {
    day.toLowerCase();
    
        switch(day){
            case 'monday':
                return 8;
            case 'tuesday':
                return 8;
            case 'wednesday':
                return 8;
            case 'thursday':
                return 8;
            case 'friday':
                return 8;
            case 'saturday':
                 return 8;
            case 'sunday':
                return 8;
        }
    };
    console.log(getSleepHours('monday'));
    
    //This function will get the total sleephours you actually slept
    const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') +
    getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +
    getSleepHours('saturday') + getSleepHours('sunday');
    
    const getIdealSleepHours = () =>{
        const idealHours = 8;
        return idealHours * 7;
    };
    
    
    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
    
        if(actualSleepHours === idealSleepHours){
            console.log(`You got perfect amount of ${actualSleepHours} of sleep.`);
        } else if(actualSleepHours > idealSleepHours)
        {
            console.log(`You slept ${actualSleepHours - idealSleepHours} more sleep than needed.`);
        } else{
            console.log(`You slept ${idealSleepHours - actualSleepHours} should get some rest.`);
        }
    };
    
    calculateSleepDebt();
    //console.log(getActualSleepHours());
    //console.log(getIdealSleepHours());