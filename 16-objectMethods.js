// Métodos para transformar de un objeto a un array. Lo usaremos mucho durante react


// Queremos crear un array con esto
const hero={
    nombre:"Batman",
    power:20,
    defense:10
};

const heroKeys=Object.keys(hero);
console.log(heroKeys);

// Imagina que queremos calcular el poder total del hereo

let totalPower=0;

heroKeys.forEach(key=>{
    if(key==="power"){
        totalPower+=hero[key];
    }

    if(key==="defense"){
        totalPower+=hero[key]/2;
    }

    
})

console.log(' El poder total de superheroe es: ', totalPower);


// Object values()

console.log(' El poder es: ', Object.values(hero)); // Saca los valores del objeto

// Lo podemos usar por ejemplo si queremos saber las notas de los alumnos:

const scores={
    '12345678':10,
    '98765432':0,
    '123456789':3,
    '1234567890':4,
    '12345678901':7,
    '123456789012':9,
    '1234567890123':10,
    '12345678901234':2,
}

const scoreValues=Object.values(scores);
let total=0;

scoreValues.forEach(value=>{
    total+=value;
})

total=total/scoreValues.length;
console.log("La media de las notas de los alumnos es:", total);


// Hay otro que es muy útil. Object.entries() // Crea dos elementos relacionados entre si, se llaman duplas [['name', 'The Powershooter'], ['power', 20], ['defense', 10]]]

const heroEntries=Object.entries(hero);

heroEntries.forEach(key=>{
    const key = tuple[0];
    const value = tuple[1];
    

})
console.log(heroEntries);

