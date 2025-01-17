const filter = require('../ejercicios/07');

test('Debe retornar un arreglo con todos los elementos que comiencen con la letra "a"', function () {
  var array = [
    'abajo',
    'pera',
    'escalera',
    'alerta',
    'indice',
    'azteca',
    'arbol',
    'buzo',
  ];
  expect(filter(array)).toEqual(['abajo', 'alerta', 'azteca', 'arbol']);
});

function filter(arr) {
  return arr.filter((word) => word.startsWith('a'));
}

const array = [
  'abajo',
  'pera',
  'escalera',
  'alerta',
  'indice',
  'azteca',
  'arbol',
  'buzo',
];

console.log(filter(array));
