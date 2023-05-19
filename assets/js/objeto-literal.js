const personaje = {
  nombre: "Rockman",
  color: "Blue",
  poder: "Buster",
  armaduras: ["Light armor", "Giga Armor", "Ultimate Armor"],
};

// console.log("Nombre personaje: ", personaje.nombre, personaje.color);
// console.log(
//   "Nombre y color del personaje: ",
//   personaje["nombre"],
//   personaje["color"]
// );
// console.log("Armaduras del personaje: ", personaje["armaduras"]);
// console.log("Numero de armaduras: ", personaje.armaduras.length);
// console.log("Ultila armadura con at(): ", personaje.armaduras.at(-1));
// console.log(
//   "Ultila armadura con length: ",
//   personaje.armaduras[personaje.armaduras.length - 1]
// );

// ! Object.
console.log("Valores:", Object.values(personaje));
console.log("Keys: ", Object.keys(personaje));
console.log("Llave y valor ", Object.entries(personaje));
console.log("Asign ", Object.assign(personaje));
console.log(
  "Muestra propiedades de objeto en forma de arreglo",
  Object.getOwnPropertyNames(personaje)
);

// freeze() congela el objeto, lo vuelve inmutable, nada puede ser agregado ni modificado
// freeze() funciona con las propiedades directas del objeto, no con los objetos dentro del objeto
// Object.freeze(personaje);

// borrar directamente una propiedad
// delete personaje.color;
// console.log(personaje);

// ! Objeto con funciones
let dia = 0;

let diasLetras = {
  0: () => "Domingo",
  1: () => "Lunes",
  2: () => "Martes",
  3: () => "Miercoles",
  4: () => "Jueves",
  5: () => "Viernes",
  6: () => "Sabado",
};

// ejecución del objeto con funciones de propiedad
// el objeto puede recibir entre [variable]
console.log(diasLetras[dia]() || "Día no definido");
