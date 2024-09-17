const tienenMismaLongitud = 

test('Debe retornar True si los strings tienen la misma longitud', function () {
  expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
});

test('Debe retornar False si los strings tienen diferente longitud', function () {
  expect(tienenMismaLongitud('hi', 'there')).toBe(false);
});

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log('Prueba 1 (debe ser true):', tienenMismaLongitud('javascript', 'bumfuzzled')); 
console.log('Prueba 2 (debe ser false):', tienenMismaLongitud('hi', 'there'));
