const pasarUsuarioAPremium = require('../ejercicios/19');

test("Debe retornar un arreglo donde todos los usuarios tengan el valor True en su propiedad 'esPremium'", function () {
  const users = [
    { esPremium: false },
    { esPremium: false },
    { esPremium: false },
    { esPremium: false },
    { esPremium: false },
  ];
  const updatedUsers = [
    { esPremium: true },
    { esPremium: true },
    { esPremium: true },
    { esPremium: true },
    { esPremium: true },
  ];
  expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
});

function pasarUsuarioAPremium(users) {
  return users.map(user => {
    user.esPremium = true;
    return user;
  });
}

const users = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
];
console.log(pasarUsuarioAPremium(users)); 
