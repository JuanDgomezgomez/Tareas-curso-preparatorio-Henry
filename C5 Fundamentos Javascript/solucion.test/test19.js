const suma = 

test('Debe retornar la suma de los dos argumentos', function () {
  expect(suma(5, 5)).toBe(10);
  expect(suma(-1, 5)).toBe(4);
}); 

function suma(a, b) {
  
  if (typeof a === 'number' && typeof b === 'number') {
  
    return a + b;
  } else {
  
    return 'Error: Ambos argumentos deben ser números';
  }
}

console.log(suma(5, 5));  
console.log(suma(-1, 5)); 
console.log(suma(0, 0));  
console.log(suma(3, 'a')); 