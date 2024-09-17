const esTipoDato = 

test('El tipo de dato ( typeof ) de "1" debe retornar "number"', () => {
  expect(esTipoDato(1)).toBe('number');
});

test('El tipo de dato ( typeof ) de "hello" debe retornar "string"', () => {
  expect(esTipoDato('hello')).toBe('string');
});

test('El tipo de dato ( typeof ) de "true" debe retornar "boolean"', () => {
  expect(esTipoDato(true)).toBe('boolean');
});

test('El tipo de dato ( typeof ) de "{}" debe retornar "object"', () => {
  expect(esTipoDato({})).toBe('object');
});

test('El tipo de dato ( typeof ) de "[]" debe retornar "object"', () => {
  expect(esTipoDato([])).toBe('object');
});

function esTipoDato(valor) {
    return typeof valor;
  }
  
  let valor1 = 1;
  let resultadoEsperado1 = 'number';
  if (esTipoDato(valor1) === resultadoEsperado1) {
    console.log('Test 1: El tipo de dato de "1" es correcto.');
  } else {
    console.log('Test 1: El tipo de dato de "1" es incorrecto.');
  }
  
  let valor2 = 'hello';
  let resultadoEsperado2 = 'string';
  if (esTipoDato(valor2) === resultadoEsperado2) {
    console.log('Test 2: El tipo de dato de "hello" es correcto.');
  } else {
    console.log('Test 2: El tipo de dato de "hello" es incorrecto.');
  }
  
  let valor3 = true;
  let resultadoEsperado3 = 'boolean';
  if (esTipoDato(valor3) === resultadoEsperado3) {
    console.log('Test 3: El tipo de dato de "true" es correcto.');
  } else {
    console.log('Test 3: El tipo de dato de "true" es incorrecto.');
  }
  
  let valor4 = {};
  let resultadoEsperado4 = 'object';
  if (esTipoDato(valor4) === resultadoEsperado4) {
    console.log('Test 4: El tipo de dato de "{}" es correcto.');
  } else {
    console.log('Test 4: El tipo de dato de "{}" es incorrecto.');
  }
  
  let valor5 = [];
  let resultadoEsperado5 = 'object';
  if (esTipoDato(valor5) === resultadoEsperado5) {
    console.log('Test 5: El tipo de dato de "[]" es correcto.');
  } else {
    console.log('Test 5: El tipo de dato de "[]" es incorrecto.');
  }
  