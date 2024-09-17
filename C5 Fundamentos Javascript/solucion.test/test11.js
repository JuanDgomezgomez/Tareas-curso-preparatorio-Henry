const sonIguales = 

test('Debe retornar True si los argumentos son iguales', function () {
  expect(sonIguales(15, 15)).toBe(true);
  expect(sonIguales('test', 'test')).toBe(true);
});

test('Debe retornar False si los argumentos no son iguales', function () {
  expect(sonIguales(90, 50)).toBe(false);
});

function sonIguales(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(sonIguales(15, 15)); // Debe retornar true
  console.log(sonIguales('test', 'test')); // Debe retornar true
  console.log(sonIguales(90, 50)); // Debe retornar false
  
  
  

