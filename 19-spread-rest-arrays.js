// También podemos utilizar el spread, destructing y rest con arrays
const students = ['Pepe', 'Juan', 'Maria', 'Ana', 'Luis', 'Pedro'];
/* Manera clásica:
const firstStudents=students[0];
const secondStudents=students[1];
const thirdStudents=students[2]; */

/* DESTRUCTURING */

const [firstStudents, secondStudents, thirdStudents] = students;

console.log( "Los primeros tres estudiantes son: ",{
    firstStudents,
    secondStudents,
    thirdStudents
})


// Imaginate que solo queremos sacar el 4 estudiante

const[,,, fourthStudents] = students;

console.log( "El 4 estudiante es ",{
    fourthStudents
})

// REST OPERATOR

const[,,, ...restStudents ]=students;

console.log( "Los estudiantes a partir del cuarto puesto son: ",{
    restStudents
})


//SPREAD OPERATOR;

const newStudents = ['bosco','ignacio'];

const allStudents=[...students,...newStudents];
console.log('Los estudiantes son=',allStudents);

const numbers=[1,2,3,4];
const max=Math.max(...numbers); // poniendo el spread operator, se puede usar la función Math.max()
const min=Math.min(...numbers);

console.log("",max,min);