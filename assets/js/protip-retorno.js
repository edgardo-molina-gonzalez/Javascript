function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}
let personaCreada = crearPersona("Edgardo", "Molina");
console.log(personaCreada);

const crearPersonaje = (nombre, apodo) => ({ nombre, apodo });
let personajeCreado = crearPersonaje("Miles", "Tails");
console.log(personajeCreado);

// funcion clasica: arguments permite pasarle todos los argumentos que se quiera
function variosArgumentos() {
  console.log(arguments);
}
variosArgumentos("Miles", "Tails", "Prower");

// funcion flecha: ...args como parametro permite ingresas argumentos ilimitados
// despues del parametro rest no puede ir otro parametro

const muchosArgumentos = (...args) => {
  console.log(args);
};

muchosArgumentos("Megaman", "Es el mas poderoso");
