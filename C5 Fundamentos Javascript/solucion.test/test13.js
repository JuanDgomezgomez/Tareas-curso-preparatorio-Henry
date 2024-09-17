const menosQueNoventa = 

test('Debe retornar True si el número es menor a noventa', function () {
  expect(menosQueNoventa(15)).toBe(true);
});

test('Debe retornar False si el número no es menor a noventa', function () {
  expect(menosQueNoventa(90)).toBe(false);
  expect(menosQueNoventa(100)).toBe(false);
});

function menosQueNoventa(numero) {
  if (numero < 90) {
    return true;
  } else {
    return false;
  }
}

console.log('Prueba 1 (debe ser true):', menosQueNoventa(15)); 
console.log('Prueba 2 (debe ser false):', menosQueNoventa(90)); 
console.log('Prueba 3 (debe ser false):', menosQueNoventa(100)); 
