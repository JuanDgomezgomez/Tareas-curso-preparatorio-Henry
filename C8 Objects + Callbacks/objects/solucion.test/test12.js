const multiplicarNumeroDesconocidoPorCinco = require('../ejercicios/12');

test('Debe retornar el numeroMisterioso multiplicado por 5', function () {
  const mysteryBox = {
    numeroMisterioso: 999,
  };
  expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
  mysteryBox.numeroMisterioso = -5;
  expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
});

function multiplicarNumeroDesconocidoPorCinco(obj) {
  return obj.numeroMisterioso * 5;
}

const mysteryBox12 = { numeroMisterioso: 999 };
console.log('EJERCICIO 12 (Primero):', multiplicarNumeroDesconocidoPorCinco(mysteryBox12));

mysteryBox12.numeroMisterioso = -5;
console.log('EJERCICIO 12 (Segundo):', multiplicarNumeroDesconocidoPorCinco(mysteryBox12));
