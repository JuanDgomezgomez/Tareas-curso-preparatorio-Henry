// const conection = 

test('Debe retornar "Online" si el status es 1', function () {
  expect(conection(1)).toBe('Online');
});

test('Debe retornar "Away" si el status es 2', function () {
  expect(conection(2)).toBe('Away');
});

test('Debe retornar "Offline" si el status es cualquier otro valor', function () {
  expect(conection(3)).toBe('Offline');
});

const conection = (status) => {
  if (status === 1) {
    return 'Online';
  } else if (status === 2) {
    return 'Away';
  } else {
    return 'Offline';
  }
};

console.log(conection(1)); 
console.log(conection(2)); 
console.log(conection(3)); 
