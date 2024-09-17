const devolverPrimerElemento = require('../ejercicios/01');

test('Debe retornar el primer elemento del arreglo', function () {
   expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
   expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
});

function devolverPrimerElemento(arr) {
   return arr[0];
 }
 
 console.log(devolverPrimerElemento([10, 10, 16, 12]));  
 console.log(devolverPrimerElemento([97, 100, 80, 55, 72, 94]));  
 