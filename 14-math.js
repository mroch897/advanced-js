

// Math.random() returns a random number between 0 and 1
console.log(Math.random());


// Math.ceil() Los acerca al entero por arriba
console.log(Math.ceil(1.4));

// Math.floor Los acerca al entero por abajo
console.log(Math.floor(1.4));

// Math.round() Los acerca al entero más cercando al número
console.log(Math.round(1.4));
console.log(Math.round(1.5));

//Decimales fijados para un número

const randomNumber=Math.random();
console.log(' Random number: ', randomNumber);
// para decir cuantos decimales fijamos usamos toFixed()
console.log(' Random number Truncated: ', randomNumber.toFixed(2));