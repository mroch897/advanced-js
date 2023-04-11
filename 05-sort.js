const numbers = [4, 3, 5, 6];
numbers.sort(); // Si usamos un  número de más de 10  no lo ordenará
console.log(numbers);

// para ordenadar número, debemos de usar la función callback

const numbers2 = [4, 3, 5, 10, 42];


/* numbers2.sort((a, b) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}); */




// Ahora crearemos dos funciones para ordenar un array

/* Funciones SORT para números */
const orderNumberAscending=(a,b)=>a-b;
const orderNumberDescending=(a,b)=>b-a;
numbers2.sort(orderNumberAscending);
numbers2.sort(orderNumberDescending);
console.log(numbers2);


// Ahora ordcenamos strings

const names=['Juan','Pedro','Maria'];

names.sort(); // Al ser String, si queremos ordenaar de forma ascendente podemos usar sort a secas
console.log(names);

// para ordenar de forma descendente, usamos localeCompare

const names2=['Alberto','Berta','Carlos'];

/* Funciones SORT para Strings */

const compareStringsAscending=(a,b)=>a.localeCompare(b);
const compareStringsDescending=(a,b)=>b.localeCompare(a);

names2.sort(compareStringsAscending);
names2.sort(compareStringsDescending);


console.log(names2);


// Imagina que ahora tenermos un array con objetos

const people = [
  { name: 'Juan', age: 10 },
  { name: 'Pedro', age: 20 },
  { name: 'Maria', age: 35 },
  { name: 'Alberto', age: 30 },
  { name: 'Berta', age: 20 },
  { name: 'Carlos', age: 25 },
];

people.sort((a, b) => {
    return compareStringsAscending(a.name,b.name);
})

people.sort((a, b) => {
    return orderNumberAscending(a.age,b.age);
})


console.log(people);