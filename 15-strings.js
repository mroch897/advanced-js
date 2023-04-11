// En este caso, queremos separar por la coma

const sentence= 'Hola, soy un mundo';

const splitSentence = sentence.split(',');

// Ahora para unirlo

const joinSentence = splitSentence.join("");
console.log({splitSentence, joinSentence});

// Ahora, si queremos partir la frase por espacios seria:

const splitSentence2 = joinSentence.split(' ');
console.log({splitSentence2});

// Lo bueno de separar por espacios, esque luego lo podemos unir como queramos.
const joinSentence2 = splitSentence2.join("_");
console.log({splitSentence2, joinSentence2});




// Método .replace()

const sentenceWithoutCommas = sentence.replace(',', '');
console.log({sentenceWithoutCommas});

// Ahora queremos substituir todas las o por a

const subtituteAxO=sentence.replace("o", "a");
console.log({subtituteAxO}) // aqui el problema, seria que solo substituye la primera

// En el caso que queramos quermos substituir todas, debemos hacer replaceAll()

const substituteALL=sentence.replaceAll("o", "a");
console.log({substituteALL});

// Ahora queremos quitar todas las , las interrogaciones y los guiones bajos

const commaSentence= 'Hola, que, pasa???? y que_tal_estas????'

const replaceALLshit= commaSentence.replaceAll(',', '').replaceAll('?', '').replaceAll('_', ' ');;

console.log({replaceALLshit});
