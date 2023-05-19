// const arregloViejo = new Array(1, 2, 3); ya ni se usa...

const juegos = ["Pizza", 100, ["Megaman", "Zelda", "Starcraft"]];
// acceder a un arreglo dentro de un arreglo
console.log(juegos[1][0]);
// //////////////////////////////////////////////////////////////////////////
const personajes = ["Tails", "Sonic", "Megaman", "Zero", "Kncuckles"];

// posicion computada con arreglo[]
const posicionComputada = personajes[1];
console.log(posicionComputada);

// longitud con lengt
const longitud = personajes.length;
console.log(longitud);

// posicion con la funcion at(posicion)
const posicion = personajes.at(2);
console.log(posicion);
