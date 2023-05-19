function saludar() {
  console.log(arguments);
  console.log("Hola Edgardo!");
}
saludar();

// guardada en variable
const suma = function sumar(a, b) {
  const suma = a + b;
  console.log(suma);
};
suma(5, 7);

const nombre = (nombre) => {
  console.log(nombre);
};

nombre("Edgardo Molina");

// function getAleatoreo() {
//   console.log(Math.random());
// }

const getAleatoreo = () => console.log(Math.random());

getAleatoreo();
