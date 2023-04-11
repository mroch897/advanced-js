// Object delete

// Imaginamos que queremos eliminar la clave adress
const student={
    name:'John',
    age:20,
    address:'Bangalore'

}

// La primera seria:

student.address=null;
console.log({
    keys:Object.keys(student),
    values:Object.values(student),
    
}); // el problema, es que la clave adress sigue exsistiendo.

// Para eso usamos 
delete student.address;
console.log({
    keys:Object.keys(student),
    values:Object.values(student),
    
});


// Object.freeze // Bloquea los atributos de un objeto

const freezeStudents=Object.freeze(student);
console.log('Freeze students', freezeStudents);

// Ahora imagina que queremos modificar la clave name

student.name='Marc';
console.log('Freeze students after add', freezeStudents); //Tampoco podemos añadir, eliminar modificar la clave
