/*

Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].

*/

export function numerosImparesN(numero) {
  const impares = [];
  for (let i = 1; i <= numero; i += 2) {
      impares.push(i);
  }
  return impares;
}