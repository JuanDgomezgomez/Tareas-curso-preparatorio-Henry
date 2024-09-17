const tienePropiedad = require('../ejercicios/15');

test('Debe retornar True si el objeto posee una propiedad con el nombre del parámetro', function () {
  const obj = {
    x: true,
  };
  expect(tienePropiedad(obj, 'x')).toEqual(true);
});

test('Debe retornar False si el objeto NO posee una propiedad con el nombre del parámetro', function () {
  const obj = {
    x: true,
  };
  expect(tienePropiedad(obj, 'y')).toEqual(false);
});

function tienePropiedad(obj, prop) {
  return obj.hasOwnProperty(prop);
}

const testObj15 = { x: true };
console.log('EJERCICIO 15 (Primero):', tienePropiedad(testObj15, 'x'));
console.log('EJERCICIO 15 (Segundo):', tienePropiedad(testObj15, 'y'));
