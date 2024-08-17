function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i = 0;

  do{
    num += 5;
    i++;
  }while (i < 8);

  return num;

}

// Test cases

console.log(doWhile(10)); // Output: 25
console.log(doWhile(5)); // Output: 10
console.log(doWhile(0)); // Output: 0
console.log(doWhile(-5)); // Output: -5
console.log(doWhile(-10)); // Output: -10
module.exports = doWhile;