//Se usa mucha para renderizar la página
const words = ["hola", "que", "tal", "?"]; // join convierte array a string

// la manera clásica seria:

let sentence = "";

for (let i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}

console.log(sentence);

// ahora usaremos lo mismo con join.

const word2 = ["hola", "que", "tal", "?"];

const sentence2 = word2.join(" ");

console.log(sentence2);
