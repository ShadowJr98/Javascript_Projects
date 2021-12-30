/*This is today' forcast and because it is not going to change we are keeping it
 constant while we convert it into celsius and fahrenheit.*/
const kelvin = 293;

// Celsius is constantly always 273 less than kelvin.
const celsius = kelvin - 273;

/* This next line of code is th formula to convert celsius into fahrenheit. 
We are choosing the let variable so that we can change the decimal value into a whole number.*/
let fahrenheit = celsius *(9/5) + 32;

/* Since more times then not you will get a decimal converting
 celsius to fahrenheit we need to use '.floor()' to round it down.*/
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Farenheit.`);

// Extra practice for converting tempatures. This time in Newtons
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newtons.`);