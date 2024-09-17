const crearGato = require('../ejercicios/08');

test('Debe crear un nuevo objeto con las propiedades "nombre", y "edad"', function () {
  expect(crearGato('Snowball I', 1).nombre).toBe('Snowball');
  expect(crearGato('Snowball I', 1).edad).toBe(1);
  expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
  expect(crearGato('Snowball II', 5).edad).toBe(5);
});

test('Debe crear una propiedad "meow" que retorna el string "Meow!"', function () {
  expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
});

function crearGato(nombre, edad) {
  return {
    nombre,
    edad,
    meow() {
      return 'Meow!';
    }
  };
}

const gato1 = crearGato('Snowball I', 1);
console.log('EJERCICIO 8 (Gato 1):', gato1.nombre, gato1.edad, gato1.meow());

const gato2 = crearGato('Snowball II', 5);
console.log('EJERCICIO 8 (Gato 2):', gato2.nombre, gato2.edad);

