const response={
    age:10,
}

const age= response.age|| 100; // si response.age no existe, devuelve 10

console.log(age);

// En el caso de que response.age sea 0, realmente exsiste, pero con el operador or, se piensa que es "undefined" y devuelve 100
const response2={
    age:0,
}

const age2= response2.age ??100;

console.log(age2);

// Por defecto or operator. En el caso de que response.age sea 0, podemos usar el null colescing