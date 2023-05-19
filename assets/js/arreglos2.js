let juegos = ["Megaman", "Starcraft", "Zelda", "Sonic"];

console.log("juegos: ", juegos.length);

// forEach((elemento, indice, arreglo) => {})
const barrido = juegos.forEach((elemento, indice, arreglo) =>
  console.log(elemento, indice, arreglo)
);

// ! agregar y borrar en la lista
// añadir al principio
let añadirPrincipio = juegos.unshift("Zelda");
console.log(añadirPrincipio);
console.log("Agregar al principio: ", juegos);

// añadir al final
let agregarFinal = juegos.push("Mario");
console.log(agregarFinal);
console.log("Agregar al final", juegos);

// borrar al principio
let borrarPrincipio = juegos.shift();
console.log(borrarPrincipio);
console.log("Borrar al principio: ", juegos);

// borrar al final
let borrarFinal = juegos.pop();
console.log(borrarFinal);
console.log("Borrar al final", juegos);

// borra desde hasta splice(desde, hasta)
let desdeHasta = juegos.splice(1, 3);
console.log("splice: ", desdeHasta, "Lista original", juegos);

// posicion de un elemento de la lista
let index = juegos.indexOf("Megaman");
console.log("Indice: ", index);
