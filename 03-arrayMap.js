const animals = ["cat🐱", "dog🐶", "bird🐦‍⬛"]; // array of animals

//const food = [];

// for(let i=0;i<animals.length;i++){
//     const animal = animals[i]

//     let animalFood;

//     if(animal === 'cat🐱'){
//         animalFood = '🍎';
//     }else if(animal === 'dog🐶'){
//         animalFood = '🫑';
//     }else if(animal === 'bird🐦‍⬛'){
//         animalFood = '🥑';

//     }

//     food.push(animalFood);
// }


//----------------------------------------------------------------//
// AHORA LO HACEMOS CON UN FOREACH

const getAnimalFood = (animal) => {
  let food;

  if (animal === "cat🐱") {
    food = "🍎";
  } else if (animal === "dog🐶") {
    food = "🫑";
  } else if (animal === "bird🐦‍⬛") {
    food = "🥑";
  }

  return food;
};

// animals.forEach(getAnimalFood);

//----------------------------------------------------------------//

//Ahora lo hacemos con arrayMap()

const animalFood = animals.map((animal) => {
  const food = getAnimalFood(animal)
  return food;
});
 console.log(`Para los aniamles ${JSON.stringify(animals)} su comida favortia es ${animalFood}`);
