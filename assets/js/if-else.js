// let a = 12;

// if (a >= 10) {
//   console.log(`A: ${a} / es mayor o igual que 10`);
// } else {
//   console.log(`A: ${a} / es menor que 10`);
// }

// let hoy = new Date();
// let dia = hoy.getDay();

// if (dia === 2) {
//   console.log("Hoy es domingo");
// } else if (dia === 1) {
//   console.log("Hoy es Lunes");
// } else if (dia === 2) {
//   console.log("Hoy es martes");
// } else if (dia === 3) {
//   console.log("Hoy es miercoles");
// } else if (dia === 4) {
//   console.log("Hoy es jueves");
// } else if (dia === 5) {
//   console.log("Hoy es viernes");
// } else if (dia === 6) {
//   console.log("Hoy es sabado");
// }

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
console.log("Objeto:", diasLetras[dia]() || "Día no definido");

let diasLetras2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
console.log("Arreglo:", diasLetras2[dia] || "Día no definido");
