const esPositivo = 

test('Debe retornar el string "Es positivo" si el número es mayor a cero', function () {
  expect(esPositivo(23)).toBe('Es positivo');
});

test('Debe retornar el string "Es negativo" si el número es menor a cero', function () {
  expect(esPositivo(-2)).toBe('Es negativo');
});

test('Debe retornar False si el número es cero', function () {
  expect(esPositivo(0)).toBe(false);
});

function esPositivo(numero) {
  if (numero > 0) {
    return 'Es positivo';
  } else if (numero < 0) {
    return 'Es negativo';
  } else {
    return false;
  }
}

console.log('Prueba 1 (debe ser "Es positivo"):', esPositivo(23)); 
console.log('Prueba 2 (debe ser "Es negativo"):', esPositivo(-2)); 
console.log('Prueba 3 (debe ser false):', esPositivo(0)); 

