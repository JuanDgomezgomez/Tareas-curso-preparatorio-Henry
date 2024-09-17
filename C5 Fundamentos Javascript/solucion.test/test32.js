const elevarAlCubo = 

test('Debe retornar el número elevado al cubo', function () {
  expect(elevarAlCubo(3)).toBe(27);
  expect(elevarAlCubo(0)).toBe(0);
  expect(elevarAlCubo(-5)).toBe(-125);
});

function elevarAlCubo(numero) {

    if (typeof numero === 'number') {

        return numero * numero * numero;
    } else {

        throw new Error('El argumento debe ser un número.');
    }
}

function esElevacionAlCuboCorrecta(numero, resultadoEsperado) {
    try {

        const resultado = elevarAlCubo(numero);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { numero: 3, resultadoEsperado: 27 }, 
    { numero: 0, resultadoEsperado: 0 },  
    { numero: -5, resultadoEsperado: -125 } 
];

pruebas.forEach(prueba => {
    const { numero, resultadoEsperado } = prueba;
    const esCorrecto = esElevacionAlCuboCorrecta(numero, resultadoEsperado);
    console.log(`Resultado de elevar ${numero} al cubo (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
