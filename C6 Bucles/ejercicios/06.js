function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  const absNums = Math.abs(num);
  if (absNums >= 100 && absNums <= 999){
    return true;
  } else{
    return false;
  }
}

module.exports = tieneTresDigitos;
