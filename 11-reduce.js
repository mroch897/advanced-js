// Convierte un array en otra cosa cualquiera

const numbers = [1, 2, 3, 4, 5]


// Manera con forEach.
/* 
let sum=0;
numbers.forEach((number)=>{
sum+=number;
}) */

const sum=numbers.reduce((acc,next)=>{// acc = es el acomulador, y luego next es el siguiente elemento que se va a sumar, en este cas.
console.log(acc,next)// El problema, es que el acomulado, recoge el primer número, y como no devuelve nada, el acomulador es undifined, por lo tanto, debemos hacer un return
return acc+next;
}); 

console.log(sum);



// Por ejemplo, aqui usamos el mismo ejemplo que join, y vemos que podemos hacer lo mismo con reduce.


const words = ['hola', 'que', 'tal', '?'] 

const neword=words.reduce((acc,next)=>{
    return  `${acc} ${next}`
})
console.log(neword);


// Ahora vamos hacer lo mismo con el ejemplo que hicimos en filter.

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

  const herbAnimals= animals2.reduce((acc,next)=>{
    if(next.herb){
        acc.push(next) // al acumular, agregamos el elemento a la lista.
    }

    return acc;

  },[]) // si usamos objetos, es importante usar el acomulado de ayuda

  console.log(herbAnimals);