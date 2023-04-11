// DESTRUCTURING

const animal = {
  name: "alpaca",
  legs: 4,
  food: {
    breakfast: "grass",
  },
};

const livingSpace = {
  place: "field",
  lifeSpan: 20,
};

// Si queremos tener las patas que tiene la alpaca en una constante para trabajar en un futuro haríamos

const animalLegs = animal.legs;
// con destructuring podemos acceder a la constante
const { legs, food } = animal;
// Ahora queremos saber que come usando destructuring

const { breakfast } = food;
console.log(breakfast);

// SPREAD OPERATOR
const compleAnimal = {
  ...animal,
  ...livingSpace,
};
const addProperty = (object, key, value) => {
  /* 
Maneera tradicional:
object[key] = value;
  return object; */

  // Aplicamos spread operator: Con esto podemos hacer una copia de la constante animal, sin modificar la constante livingSpace
  const newObject = {
    ...object,
    [key]: value,
  };

  return newObject;
};

const animalWithSound = addProperty(compleAnimal, "sound", "bee");
console.log(" Animals with Sound:", {
  compleAnimal,
  animalWithSound,
});

// REST OPERATOR

// Quiero crear un objeto nuevo con tres propiedades
// la manera normal:
/* const simpleAnimal = {
    name:animalWithSound.name,
    place:animalWithSound.place,
    lifeSpan:animalWithSound.lifeSpan,
} */

// Ahora lo hacemos con rest.

// Primero sacamos las variables que no queremos utilizar.

const { // Con esto sacamos las variable que no queremos utilizar, y lo ponemos en la variable simpleAnimal
  legs: animaLegs,
  food: animalFood,
  sound,
  ...simpleAnimal
} = animalWithSound;

console.log("Simple Aniaml with rest", simpleAnimal);