const people=[
    {name: "A", age: 20},
    {name: "B", age: 12},
    {name: "C", age: 32},
    {name: "D", age: 55},
    {name: "C", age: 32},
    {name: "F", age: 2},
    {name: "C", age: 10},
 ];

 // Hay que tener en cuenta que reverse modifica el array original
 
 

 // Entonces, para prevernir dicha modificación, podemos usar .slice()

 /* const newPeople=people.slice(); // Si slice, recibe un argumento ejemplo: newPeople.slice(1,3) seria de la posición 1 hasta 3
 newPeople.reverse(); */

 // Esto lo podemo simplificar, por ejemplo: 

 const newPeople=people.slice().reverse();
 console.log(' Esto vale people',people);
 console.log('Esto vale new people', newPeople);