const eliminarPropiedad = require('../ejercicios/13');

test('Debe eliminar la propiedad del objeto', function () {
  const updatedObject = {
    x: 1,
    y: 2,
  };
  const object = {
    x: 1,
    y: 2,
    z: null,
  };
  expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
});

function eliminarPropiedad(obj, prop) {
  delete obj[prop];
  return obj;
}

const objToUpdate13 = { x: 1, y: 2, z: null };
const updatedObj13 = eliminarPropiedad(objToUpdate13, 'z');
console.log('EJERCICIO 13:', updatedObj13);
