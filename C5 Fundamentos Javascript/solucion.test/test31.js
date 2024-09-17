const elevarAlCuadrado = 

test('Debe retornar el número elevado al cuadrado', function () {
  expect(elevarAlCuadrado(6)).toBe(36);
  expect(elevarAlCuadrado(7)).toBe(49);
  expect(elevarAlCuadrado(0)).toBe(0);
  expect(elevarAlCuadrado(-5)).toBe(25);
});

function elevarAlCuadrado(numero) {
  
    if (typeof numero === 'number') {
  
        return numero * numero;
    } else {
  
        throw new Error('El argumento debe ser un número.');
    }
}


function esElevacionCorrecta(numero, resultadoEsperado) {
    try {

        const resultado = elevarAlCuadrado(numero);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { numero: 6, resultadoEsperado: 36 }, 
    { numero: 7, resultadoEsperado: 49 }, 
    { numero: 0, resultadoEsperado: 0 },  
    { numero: -5, resultadoEsperado: 25 } 
];

pruebas.forEach(prueba => {
    const { numero, resultadoEsperado } = prueba;
    const esCorrecto = esElevacionCorrecta(numero, resultadoEsperado);
    console.log(`Resultado de elevar ${numero} al cuadrado (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});


