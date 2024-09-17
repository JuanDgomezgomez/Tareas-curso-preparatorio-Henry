const agregarPropiedad = require('../ejercicios/10');

test('Debe agregar la propiedad al objeto con valor null', function () {
  const object = {
    x: 1,
    y: 2,
  };
  const updatedObject = {
    x: 1,
    y: 2,
    z: null,
  };
  expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
});

function agregarPropiedad(obj, prop) {
  obj[prop] = null;
  return obj;
}

const obj10 = { x: 1, y: 2 };
const updatedObj10 = agregarPropiedad(obj10, 'z');
console.log('EJERCICIO 10:', updatedObj10);
