const power = {
  name: "misterpapa",
  value: 20,
  use: () => {
    console.log("Usamos el poder");
  },
};

const hero = {
  name: "mistermama",
  powers: [power],
  //cities: [{ name: "Mexico" }],
};

// manera clásica

//console.log(hero.powers[0].value); // esto daria undefined porque power[0] es undefined

/* Solución 

const powerOne=hero.powers[0];

let powerOneValue=0;

if(powerOne){
    powerOneValue=powerOne.value;
}

console.log(powerOneValue);
*/

// lo que hemos hecho justo arriba, lo haremos usando el optional chaining

const powerOne = hero.powers[0]?.value || 0;
// si ahora queremos invocar el poder:
hero.powers[0]?.use?.();
console.log(hero.cities?.[0].name); // como exsiste cities, lo devuelve, pero si no existe, petaria.

console.log(powerOne);


