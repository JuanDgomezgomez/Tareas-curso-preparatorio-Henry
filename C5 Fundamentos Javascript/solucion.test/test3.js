const nuevoBoolean = 

test('Debe ser un booleano', function () {
  expect(typeof nuevoBoolean).toBe('boolean');
});

let nuevoBoolean = true; 

function probarTipoBooleano() {
  if (typeof nuevoBoolean === 'boolean') {
    console.log('La prueba pasó: nuevoBoolean es un booleano.');
  } else {
    console.log('La prueba falló: nuevoBoolean NO es un booleano.');
  }
}

probarTipoBooleano();
