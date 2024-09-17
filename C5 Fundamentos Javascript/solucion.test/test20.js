
test('Debe retornar la resta de los dos argumentos', function () {
  expect(resta(5, 5)).toBe(0);
  expect(resta(-1, 5)).toBe(-6);
  expect(resta(5, -5)).toBe(10);
  expect(resta(0, 0)).toBe(0);
});

function resta(a, b) {
  
  if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
  } else {
      throw new Error('Ambos argumentos deben ser números.');
  }
}

function esRestaCorrecta(minuendo, sustraendo, resultadoEsperado) {
  try {
    const resultado = resta(minuendo, sustraendo);
    return resultado === resultadoEsperado;
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}

const pruebas = [
  { a: 12, b: 5, resultadoEsperado: 22 },  
  { a: 10, b: 15, resultadoEsperado: 3 },
  { a: -1, b: 1, resultadoEsperado: -2 }, 
  { a: 8, b: 0, resultadoEsperado: 0 },   
  { a: 7, b: 3, resultadoEsperado: 4 }    
];

pruebas.forEach(prueba => {
  const { a, b, resultadoEsperado } = prueba;
  const esCorrecto = esRestaCorrecta(a, b, resultadoEsperado);
  console.log(`Resultado de la resta ${a} - ${b} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});



