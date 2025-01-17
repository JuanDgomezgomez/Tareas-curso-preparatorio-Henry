const obtenerLargoDelArray = require('../ejercicios/03');

test('Debe retornar la longitud del arreglo', function () {
   expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
   expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
   expect(
      obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])
   ).toBe(6);
});

function obtenerLargoDelArray(arr) {
   return arr.length;
 }
 
 console.log(obtenerLargoDelArray([10, 10, 16, 12]));  // 4
 console.log(obtenerLargoDelArray([97, 100, 80, 55, 72, 94]));  // 6
 console.log(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?']));  // 6
 
