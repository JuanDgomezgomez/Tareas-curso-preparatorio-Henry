const nuevoUsuario = require('../ejercicios/09');

test('Debe devolver un nuevo objeto con las propiedades "nombre", "email" y "password"', function () {
  const user = {
    nombre: 'Jhon',
    email: 'jhon@email.com',
    password: 'correcthorsebatterystaple',
  };
  expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
  const user2 = {
    nombre: 'Samuel',
    email: 'samuel@email.com',
    password: 'password',
  };
  expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(
    user2
  );
});

function nuevoUsuario(nombre, email, password) {
  return { nombre, email, password };
}

const user1 = nuevoUsuario('Jhon', 'jhon@email.com', 'correcthorsebatterystaple');
console.log('EJERCICIO 9 (Usuario 1):', user1);

const user2 = nuevoUsuario('Samuel', 'samuel@email.com', 'password');
console.log('EJERCICIO 9 (Usuario 2):', user2);
