const age = 30;

let isAllowed;

// Esto seria la manera tradicional
if (age > 30) {
  isAllowed = true;
} else {
  isAllowed = false;
}

// Ahora lo haremos con el operador ternario

// Usamos el ? para comprobar si un valor es verdadero o falso y usamos el : para sino hacemos lo otros

age > 30 ? (isAllowed = true) : (isAllowed = false); // aqui hacemos el ternario de manera larga

isAllowed = age > 30 ? true : false; // aqui lo simplificamos

// Otra manera de usar ternario. En este caso, queremos saber si a es multiplo de b

const numberA = 2;
const numberB = 4;

let operation = "multiply";

// primero lo hacemos con un if else

let result;

if (operation === "multiply") {
  result = numberA * numberB;
} else {
  result = numberA / numberB;
}

// ahora lo hacemos con el operador ternario

const resultTernario =
  operation === "multiply" ? numberA * numberB : numberA / numberB;

// También lo podemos usar en una función

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const resultfuntion =
  operation === "multiply"
    ? multiply(numberA, numberB)
    : divide(numberA, numberB);
