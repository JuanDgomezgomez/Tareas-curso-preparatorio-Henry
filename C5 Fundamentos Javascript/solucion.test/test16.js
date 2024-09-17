const esImpar = 

test('Debe retornar True si el número es impar', function () {
  expect(esImpar(6)).toBe(false);
  expect(esImpar(7)).toBe(true);
  expect(esImpar(0)).toBe(false);
});

test('Debe retornar False si el número no es impar', function () {
  expect(esImpar(6)).toBe(false);
  expect(esImpar(7)).toBe(true);
  expect(esImpar(0)).toBe(false);
});

function esImpar(numero) {
  if (numero % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log('Prueba 1 (debe ser false):', esImpar(6)); 
console.log('Prueba 2 (debe ser true):', esImpar(7)); 
console.log('Prueba 3 (debe ser false):', esImpar(0)); 
