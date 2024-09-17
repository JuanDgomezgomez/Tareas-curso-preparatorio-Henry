const esPar = 

test('Debe retornar True si el número es par', function () {
  expect(esPar(6)).toBe(true);
  expect(esPar(0)).toBe(true);
});

test('Debe retornar False si el número no es par', function () {
  expect(esPar(7)).toBe(false);
});

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('Prueba 1 (debe ser true):', esPar(6)); 
console.log('Prueba 2 (debe ser true):', esPar(0)); 
console.log('Prueba 3 (debe ser false):', esPar(7)); 
