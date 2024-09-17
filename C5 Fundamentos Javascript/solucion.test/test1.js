const nuevoString =

test('Debe ser un string', function () {
  expect(typeof nuevoString).toBe('string');
});

let nuevoString = 'Hola, mundo';

function probarTipoString() {
  if (typeof nuevoString === 'string') {
    console.log('La prueba pasó: nuevoString es un string.');
  } else {
    console.log('La prueba falló: nuevoString NO es un string.');
  }
}

probarTipoString();
