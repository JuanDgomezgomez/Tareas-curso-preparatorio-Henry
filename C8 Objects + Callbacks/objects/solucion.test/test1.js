const obtenerValorPropiedad = require('../ejercicios/01.js');

describe('obtenerValorPropiedad', () => {
   const objeto = {
      nombre: 'Juan',
      edad: 30,
      direccion: {
         calle: 'Calle Falsa',
         numero: 123,
         ciudad: 'Springfield',
      },
   };

   it('devuelve el valor de una propiedad utilizando bracket notation', () => {
      expect(obtenerValorPropiedad(objeto, 'nombre')).toBe('Juan');
      expect(obtenerValorPropiedad(objeto, 'edad')).toBe(30);
   });

   it('devuelve undefined si la propiedad no existe', () => {
      expect(obtenerValorPropiedad(objeto, 'apellido')).toBeUndefined();
      expect(
         obtenerValorPropiedad(objeto, 'direccion.codigoPostal')
      ).toBeUndefined();
   });
});

function obtenerValorPropiedad(objeto, propiedad) {
   return objeto[propiedad];
 }
 
 const objeto = {
   nombre: 'Juan',
   edad: 30,
   direccion: {
     calle: 'Calle Falsa',
     numero: 123,
     ciudad: 'Springfield',
   },
 };
 
 console.log(obtenerValorPropiedad(objeto, 'nombre')); 
 console.log(obtenerValorPropiedad(objeto, 'edad')); 
 console.log(obtenerValorPropiedad(objeto, 'apellido')); 
 console.log(obtenerValorPropiedad(objeto, 'direccion.codigoPostal')); 
 