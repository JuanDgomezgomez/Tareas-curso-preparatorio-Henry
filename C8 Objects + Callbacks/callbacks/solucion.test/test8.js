const buscarElemento = require('../ejercicios/08');

describe('buscarElemento function tests', () => {
  test('should find an element in the array', () => {
    const array1 = [1, 2, 3, 4, 5];
    const callback1 = element => element === 3;
    expect(buscarElemento(array1, callback1)).toBe(3);
  });

  test('should return "No se encontró el elemento" if the element is not found', () => {
    const array2 = [1, 2, 3, 4, 5];
    const callback2 = element => element === 6;
    expect(buscarElemento(array2, callback2)).toBe('No se encontró el elemento');
  });

  test('should return "No se encontró el elemento" for an empty array', () => {
    const array3 = [];
    const callback3 = element => element === 1;
    expect(buscarElemento(array3, callback3)).toBe('No se encontró el elemento');
  });

  test('should work with an array of objects', () => {
    const array4 = [
      {name: 'John', age: 25},
      {name: 'Jane', age: 30},
      {name: 'Bob', age: 40},
    ];
    const callback4 = element => element.age === 30;
    expect(buscarElemento(array4, callback4)).toEqual({name: 'Jane', age: 30});
  });
});

function buscarElemento(arr, cb) {
  const found = arr.find(cb);
  return found ? found : "No se encontró el elemento";
}

const array1 = [1, 2, 3, 4, 5];
const callback1 = (element) => element === 3;
console.log(buscarElemento(array1, callback1));

const array2 = [1, 2, 3, 4, 5];
const callback2 = (element) => element === 6;
console.log(buscarElemento(array2, callback2)); 

const array3 = [];
const callback3 = (element) => element === 1;
console.log(buscarElemento(array3, callback3));

const array4 = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 40 },
];
const callback4 = (element) => element.age === 30;
console.log(buscarElemento(array4, callback4));

