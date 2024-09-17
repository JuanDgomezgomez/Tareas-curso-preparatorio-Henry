const mayorQueCincuenta = 

test('Debe retornar True si el número es mayor a cincuenta', function () {
  expect(mayorQueCincuenta(15)).toBe(false);
  expect(mayorQueCincuenta(50)).toBe(false);
  expect(mayorQueCincuenta(60)).toBe(true);
});

test('Debe retornar False si el número no es mayor a cincuenta', function () {
  expect(mayorQueCincuenta(15)).toBe(false);
  expect(mayorQueCincuenta(50)).toBe(false);
  expect(mayorQueCincuenta(60)).toBe(true);
});

function mayorQueCincuenta(numero) {
  if (numero > 50) {
    return true;
  } else {
    return false;
  }
}

console.log('Prueba 1 (debe ser false):', mayorQueCincuenta(15));  
console.log('Prueba 2 (debe ser false):', mayorQueCincuenta(50));  
console.log('Prueba 3 (debe ser true):', mayorQueCincuenta(60));   

