const invocarMetodo = require('../ejercicios/11');

test('Debe invocar el método del objeto', function () {
  const object = {
    x: 0,
    incrementX: function () {
      this.x++;
    },
  };
  invocarMetodo(object, 'incrementX');
  expect(object.x).toBe(1);
});

function invocarMetodo(obj, metodo) {
  obj[metodo]();
}

const object11 = {
  x: 0,
  incrementX: function () {
    this.x++;
  }
};

invocarMetodo(object11, 'incrementX');
console.log('EJERCICIO 11:', object11.x);
