const verificarPassword = require('../ejercicios/16');

test('Debe retornar True si la contraseña es correcta', function () {
  const user = {
    password: 'Me encanta JS!',
  };
  const password = 'Me encanta JS!';
  expect(verificarPassword(user, password)).toBe(true);
});

test('Debe retornar False si la contraseña es incorrecta', function () {
  const user = {
    password: 'Me encanta JS!',
  };
  const password = 'Hacker time!';
  expect(verificarPassword(user, password)).toBe(false);
});

function verificarPassword(user, password) {
  return user.password === password;
}

const user1 = { password: 'Me encanta JS!' };
console.log(verificarPassword(user1, 'Me encanta JS!')); 
console.log(verificarPassword(user1, 'Hacker time!'));   
