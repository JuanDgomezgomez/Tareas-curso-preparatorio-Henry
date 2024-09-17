const encontrarElementoRepetido = require('../ejercicios/30');

test('encuentra el primer elemento repetido en un array', () => {
  expect(encontrarElementoRepetido([1, 2, 3, 3, 4, 5])).toBe(3);
  expect(encontrarElementoRepetido([1, 2, 3, 4, 5, 5])).toBe(5);
  expect(encontrarElementoRepetido([1, 2, 3, 4, 5, 1])).toBe(1);
  expect(encontrarElementoRepetido([1, 2, 3, 4, 5, 6])).toBeUndefined();
});

const encontrarElementoRepetido = (arr) => {
  const encontrados = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (encontrados.has(arr[i])) {
      return arr[i];
    }
    encontrados.add(arr[i]);
  }
  return undefined;
};

console.log(encontrarElementoRepetido([1, 2, 3, 3, 4, 5])); 
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 5])); 
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 1])); 
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5, 6])); 
