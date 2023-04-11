const animals = ["🐶", "🐱", "🐮", "🐗","🐮" ];

// Si queremos encontrar la posición de un elemento en un array, podemos usar el método indexOf()
// para encontrar la última usamos lastIndexOf()


const indexOfAnimal = animals.indexOf("🐮");
const lastIndexOfAnimal = animals.lastIndexOf("🐮");
console.log(`La vaca está en el índice: ${indexOfAnimal}`);
console.log(`La vaca está en el último índice: ${lastIndexOfAnimal}`);



// Ahora imaginamos que queremos sacar el indice de la persona que se llame "C" pero que la edad este entrwe 20 y40 años
const people=[
   {name: "A", age: 20},
   {name: "B", age: 12},
   {name: "C", age: 32},
   {name: "D", age: 55},
   {name: "C", age: 32},
   {name: "F", age: 2},
   {name: "C", age: 10},
]

const index= people.findIndex((person)=>{
if(person.name === "J" && person.age>= 20 && person.age<=40){ 
    return true;
}

})

; // EL problema es que solo encuentra la primera que encuentra.



// El problema, está en que si no hay persona, saldria -1. Podriammos resolverlo asi

if(index === -1){
    console.log("No hay persona");

}else{
    console.log('La persona que se llame "C" es:', people[index])
}