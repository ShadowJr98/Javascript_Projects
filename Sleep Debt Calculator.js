//This is going to be the number of hours of sleep.
const getSleepHours = day => {
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
const getActualSleepHours = () => {

};