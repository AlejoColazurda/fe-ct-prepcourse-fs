function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero < 1) {
    return false
  }
  while (numero > 1){
    if (numero % 2 !== 0){
      return false;
    }
    numero = numero / 2;
  }
  return true;
}

module.exports = esPotenciaDeDos;

// Test cases:

console.log(esPotenciaDeDos(16)); // true
console.log(esPotenciaDeDos(24)); // false
console.log(esPotenciaDeDos(8)); // true
console.log(esPotenciaDeDos(1)); // true
console.log(esPotenciaDeDos(9)); // false
console.log(esPotenciaDeDos(1)); // true