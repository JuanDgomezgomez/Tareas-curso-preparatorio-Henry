const operacionMatematica = require('../ejercicios/03');

test('Debe retornar el resultado del callback habiéndole pasado como arguemnto los números recibidos.', function () {
  const cb = jest.fn();
  operacionMatematica(100, 20, cb);
  expect(cb).toHaveBeenCalled();
});

function operacionMatematica(num1, num2, cb) {
  cb(num1, num2);
}

const cb = (a, b) => console.log(`Resultado de la operación: ${a + b}`);
operacionMatematica(100, 20, cb); 
