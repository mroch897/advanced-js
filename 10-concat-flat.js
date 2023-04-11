// Concat fusiona un array con otro:

const animals = ["cat", "dog", "bird"];
const newAnimals = ["pig", "cow", "rabbit"];

// La manera tradicional ser podria hacer usando un forEach
newAnimals.forEach((animal) => {
  animals.push(animal);
});

console.log(animals);

// Ahora vamos a ver la maenra de hacerlo con concat:

const people = ["Juan", "Pedro", "Maria"];
const newPeople = ["Maria", "Carmen", "Pepe"];

const newArrayPeople = people.concat(newPeople);

console.log(newArrayPeople);

// Otro método, nos imaginaos que en lugar de recibir solo un array, recibimos muchos arrays. Esn este caso, usamos flat()



const animals2=['lion', 'tiger', 'elephant'];
const batchOfAnimals = [
  ["cat", "dog", "bird"],
  ["pig", "cow", "rabbit"],
  ["tiger", "beard", "snake"],
];

// La manera tradicional ser podria hacer usando un forEach

/* const fullAnimalList= batchOfAnimals.forEach(batch => {
    animals2.push(batch);
})

console.log(animals2);// Pero esto lo mestra de manera correctta, ya que une arrays no su contenido */

// Entonces usamos un flat()

const fullAnimalList = batchOfAnimals.flat();

console.log(fullAnimalList);// Ahora, nos fijamos que vale todo

// Entonces, si queremos  unir todos los arrays de animals, combinamos .flat() con .concat
const fullAnimalList2 = animals.concat(fullAnimalList.flat());

console.log(fullAnimalList2);