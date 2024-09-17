const nuevoNumero = 

test('Debe ser un número', function () {
  expect(typeof nuevoNumero).toBe('number');
});

let nuevoNumero = 42;

function probarTipoNumero() {
  if (typeof nuevoNumero === 'number') {
    console.log('La prueba pasó: nuevoNumero es un número.');
  } else {
    console.log('La prueba falló: nuevoNumero NO es un número.');
  }
}

probarTipoNumero();
