const esVocal = 

test('Debe retornar el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function () {
  expect(esVocal('la')).toBe('Dato incorrecto');
  expect(esVocal('pero')).toBe('Dato incorrecto');
});

test('Debe retornar el string "Dato incorrecto", si el valor ingresado no es vocal', function () {
  expect(esVocal('l')).toBe('Dato incorrecto');
  expect(esVocal('p')).toBe('Dato incorrecto');
});

test('Debe retornar el string "Es vocal", si el valor ingresado lo es', function () {
  expect(esVocal('a')).toBe('Es vocal');
  expect(esVocal('e')).toBe('Es vocal');
  expect(esVocal('i')).toBe('Es vocal');
  expect(esVocal('o')).toBe('Es vocal');
  expect(esVocal('u')).toBe('Es vocal');
});

function esVocal(valor) {

  if (valor.length !== 1) {
    return 'Dato incorrecto';
  }

  const vocales = 'aeiou';
  if (vocales.includes(valor)) {
    return 'Es vocal';
  } else {
    return 'Dato incorrecto';
  }
}

console.log('Prueba 1 (debe ser "Dato incorrecto"):', esVocal('la')); 
console.log('Prueba 2 (debe ser "Dato incorrecto"):', esVocal('pero')); 
console.log('Prueba 3 (debe ser "Dato incorrecto"):', esVocal('l')); 
console.log('Prueba 4 (debe ser "Dato incorrecto"):', esVocal('p')); 
console.log('Prueba 5 (debe ser "Es vocal"):', esVocal('a')); 
console.log('Prueba 6 (debe ser "Es vocal"):', esVocal('e')); 
console.log('Prueba 7 (debe ser "Es vocal"):', esVocal('i')); 
console.log('Prueba 8 (debe ser "Es vocal"):', esVocal('o')); 
console.log('Prueba 9 (debe ser "Es vocal"):', esVocal('u')); 
