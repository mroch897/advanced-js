const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

let count = 0;

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>3){
//         count++;
//     }
// }

// Ahora usaremos forEACH()

numbers.forEach((number) => {
  if (number > 3) {
    count++;
  }
});

console.log(`La cuenta vale ${count}`);

//----------------------------------------------------------------//
//let evenNumber=[];

// Primero lo hacemos con for
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumber.push(numbers[i]);
//   }
// }
// console.log(evenNumber);

//----------------------------------------------------------------//
// AHora lo hacemos con forEach

// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         evenNumber.push(number);
//     }

// })



//----------------------------------------------------------------//
// ahora lo hacemos combinando con un ternario

// también, podemos hacer una función fuera y pasar el foreach

let evenNumber=[];
let oddNumber=[];
const setNumberOddorEven = (number) => {
    number%2===0? evenNumber.push(number) : oddNumber.push(number);
}

numbers.forEach(setNumberOddorEven)

//También como no hay ningún return, lo podemos poner así:
//numbers.forEach((number) =>  number%2===0? evenNumber.push(number) : oddNumber.push(number))//


console.log(`Even: ${evenNumber}`);
console.log(`Odd: ${oddNumber}`);