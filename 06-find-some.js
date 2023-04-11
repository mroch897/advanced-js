/* const fridgeFood=['ramen', 'milk', 'bread', 'ramen', 'bread', 'egg']; */

// Ahora lo haremos un poco más complicado:

const fridgeFood2 = [
  { food: "ramen", quantity: 2 },
  { food: "milk", quantity: 1 },
  { food: "bread", quantity: 1 },
  { food: "ramen", quantity: 1 },
];

// Aqui hacemos un bucle que si la comida es milk, la printe
/* for(let i=0;i<fridgeFoof.length;i++){
    if(fridgeFoof[i] === 'milk'){
        console.log(fridgeFoof[i]);
    }
} */

// Ahora lo hacemos con array.find

/* const milk=fridgeFood.find((food)=>{
    return food === 'milk';

}) */

/* console.log(`En mi nevera tengo ${milk}`); */

const ramen = fridgeFood2.find((food) => {
  // Find, no modifica el array. Entonces ahora usaremos some.
  if (food.food === "ramen") {
    return true;
  }
});

console.log(
  `En mi nevera tengo ${ramen.food} en cantidad de ${ramen.quantity}`
); // Si nos fijamos, solo coje el primer ramen

const people = [
  { name: "Juan", age: 25 },
  { name: "Pedro", age: 35 },
  { name: "Juan", age: 25 },
];

//quiero saber si en mi array, hay una persona de más de  30 años.

/* const hasPersonOver30= (peopleArr)=>{
    const personOver30 = peopleArr.find((person) => {
        if (person.age > 30) {
          return true;
        }
      }); 
return !!personOver30;
}



console.log(hasPersonOver30(people)) */


//En lugar de hacer lo de arriba, usamos:

const hasPersonOver30= people.some((person) => person.age > 30);


console.log(hasPersonOver30);

