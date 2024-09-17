const agregarAmigo = require('../ejercicios/18');

test('Debe agregar el nuevo amigo al final del arreglo de una propiedad', function () {
  const user = {
    amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
  };
  const newFriend = 'Shay';
  expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
});

function agregarAmigo(user, newFriend) {
  user.amigos.push(newFriend);
  return user;
}

const user3 = { amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'] };
agregarAmigo(user3, 'Shay');
console.log(user3.amigos);

 
