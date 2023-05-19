const frutas = ["Manzana", "Banana", "Pera", "Piña"];

// gracias a ...rest se crea un nuevo array sin afectar el valor del original
console.time("spread");
const nuevasFrutas2 = [...frutas, "Mango"];
console.timeEnd("spread");

// da el mismo resultado que ...rest
console.time("slice");
const nuevasFrutas = frutas.slice();
console.timeEnd("slice");

nuevasFrutas.push("Mango");

console.table({ frutas, nuevasFrutas });
