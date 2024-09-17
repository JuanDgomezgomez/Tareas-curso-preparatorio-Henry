const actualizarValorPropiedad = require('../ejercicios/02');

describe('actualizarValorPropiedad', () => {
   test('should update the value of an existing property', () => {
      const obj = { foo: 'bar' };
      const result = actualizarValorPropiedad(obj, 'foo', 'baz');
      expect(result).toEqual({ foo: 'baz' });
   });

   test('should add a new property if it does not exist', () => {
      const obj = { foo: 'bar' };
      const result = actualizarValorPropiedad(obj, 'baz', 42);
      expect(result).toEqual({ foo: 'bar', baz: 42 });
   });
});

function actualizarValorPropiedad(objeto, propiedad, valor) {
   objeto[propiedad] = valor;
   return objeto;
 }
 
 const obj1 = { foo: 'bar' };
 console.log(actualizarValorPropiedad(obj1, 'foo', 'baz')); 
 
 const obj2 = { foo: 'bar' };
 console.log(actualizarValorPropiedad(obj2, 'baz', 42)); 
 