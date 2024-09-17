const sort = require('../ejercicios/07');

describe('sort function tests', () => {
   it('should sort array of objects in descending order by given key', () => {
      const sortBy = 'a';
      const list = [
         { a: 1, b: 3 },
         { a: 3, b: 2 },
         { a: 2, b: 40 },
      ];
      const expectedResult = [
         { a: 3, b: 2 },
         { a: 2, b: 40 },
         { a: 1, b: 3 },
      ];

      const result = sort(sortBy, list);

      expect(result).toEqual(expectedResult);
   });
});

function sort(key, array) {
   return array.sort((a, b) => b[key] - a[key]);
 }
 
 // Prueba en consola
 const sortBy = 'a';
 const list = [
   { a: 1, b: 3 },
   { a: 3, b: 2 },
   { a: 2, b: 40 }
 ];
 
 const sortedList = sort(sortBy, list);
 console.log('EJERCICIO 7:', sortedList);
 