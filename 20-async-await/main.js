// El problmea de este fetch es que va de arriba a abajo y luego vuelve a subir...

/* console.log("Pedimos un pokemnon a la API")



fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((res)=>res.json())
.then((response)=>{
    console.log("Respuesta del servidor: ", response);

}).catch((err)=>{
console.log("", err);
})
console.log("Ya hemos pedido el pokemon a la API")

 */

// ASYNC AWAIT
// COn esto primero sale el console.log, luego la respuesta del servidor, y luego el otro console.log

const main = async () => {
  console.log("Pedimos un pokemnon a la API");
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const response = await res.json();
    console.log("Respuesta del servidor: ", response);
  } catch (error) {
    console.log(error);
  }

  console.log("Ya hemos pedido el pokemon a la API");
};

main().then(() => {
  console.log("El proceso termino");
});
