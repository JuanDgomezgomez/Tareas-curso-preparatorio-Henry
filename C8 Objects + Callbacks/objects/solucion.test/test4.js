const verificarPropiedad = require('../ejercicios/04');

test('verificarPropiedad returns true for existing property', () => {
   const obj = { name: 'John', age: 30 };
   expect(verificarPropiedad(obj, 'name')).toBe(true);
});

test('verificarPropiedad returns false for non-existing property', () => {
   const obj = { name: 'John', age: 30 };
   expect(verificarPropiedad(obj, 'address')).toBe(false);
});

function verificarPropiedad(objeto, propiedad) {
   return objeto.hasOwnProperty(propiedad);
 }
 
 const obj4 = { name: 'John', age: 30 };
 console.log(verificarPropiedad(obj4, 'name')); 
 console.log(verificarPropiedad(obj4, 'address')); 
 
