// El array. filter() es un método que permite filtrar un array que devuelva un nuevo array con los elementos que cumplan con la condición especificada.

const animals = ["panda", "chicken", "cow", "tiger"];

/*const herbAnimals=[];

 // primero lo hacemos con for
for (let i = 0; i < animals.length; i++) {
    const animal=animals[i];
    if (animal=== 'panda' || animal=== 'cow') {
        herbAnimals.push(animal);
    }
}

console.log(`Los animales hervíberos son: ${herbAnimals}`);  */

// Ahora lo hacemos con filer

const herbAnimals = animals.filter((animal) => {
  return animal === "panda" || animal === "cow";
});

console.log(`Los animales hervíberos son: ${herbAnimals}`);

// ahora lo hacemos con un array de objetos

const animals2 = [
  {
    name: "panda",
    herb: true,
  },
  {
    name: "chicken",
    herb: false,
  },
  {
    name: "cow",
    herb: true,
  },
  {
    name: "tiger",
    herb: false,
  },
];

const herbAniamls2 = animals2.filter((animal) => {
  return animal.herb;
});

const herbAnimalsName = herbAniamls2.map((animal) => {
  return animal.name;
});

// Este código de arriba lo podemos incluso simplificar más:

const herbAnimalsName2 = animals2
  .filter((animal) => {
    return animal.herb;
  })
  .map((animal) => {
    return animal.name;
  });

console.log(`Los animales hervíberos son: ${herbAnimalsName}`);



/* Ejercicios para practicar */

// Filtrar números pares:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);


// Filtrar nombres que empiezan con una letra específica:

const names = ['Marcel','Pepe','Marc','Daniel'];

const namesStartsWith=names.filter((name) => {
    return name.startsWith("M");
})

console.log(namesStartsWith);


