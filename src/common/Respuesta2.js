/*

Ejercicio 2: Nomenclatura
Te presentamos el siguiente fragmento de código:
function f(x, y, z) {
let a = x + y;
let b = a * z;
let c = Math.sin(b);
return c;
}
Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función.

*/

export function sineFunction(x, y, z) {
  let sum = x + y;
  let multi = sum * z;
  let sin = Math.sin(multi);
  return sin;
  }

