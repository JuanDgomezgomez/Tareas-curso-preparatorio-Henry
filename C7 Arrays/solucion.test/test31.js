const invertirTexto = require('../ejercicios/31');

test('Invertir texto con una palabra', () => {
  expect(invertirTexto('hola')).toBe('aloh');
});

test('Invertir texto con varias palabras', () => {
  expect(invertirTexto('hola mundo')).toBe('odnum aloh');
});

test('Invertir texto con caracteres especiales', () => {
  expect(invertirTexto('¡Hola, mundo!')).toBe('!odnum ,aloH¡');
});

test('Invertir texto vacío', () => {
  expect(invertirTexto('')).toBe('');
});

const invertirTexto = (texto) => {
  return texto.split('').reverse().join('');
};

console.log(invertirTexto('hola')); 
console.log(invertirTexto('hola mundo')); 
console.log(invertirTexto('¡Hola, mundo!')); 
console.log(invertirTexto(''));
