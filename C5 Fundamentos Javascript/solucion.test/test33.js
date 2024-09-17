const elevar = 

test('Debe retornar el número elevado al exponente indicado', function () {
  expect(elevar(2, 2)).toBe(4);
  expect(elevar(2, 3)).toBe(8);
  expect(elevar(0, 5)).toBe(0);
  expect(elevar(10, 1)).toBe(10);
}); 

function elevar(base, exponente) {

    if (typeof base === 'number' && typeof exponente === 'number') {

        return Math.pow(base, exponente);
    } else {

        throw new Error('Ambos argumentos deben ser números.');
    }
}

function esElevacionCorrecta(base, exponente, resultadoEsperado) {
    try {

        const resultado = elevar(base, exponente);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { base: 2, exponente: 2, resultadoEsperado: 4 }, 
    { base: 2, exponente: 3, resultadoEsperado: 8 }, 
    { base: 0, exponente: 5, resultadoEsperado: 0 }, 
    { base: 10, exponente: 1, resultadoEsperado: 10 } 
];

pruebas.forEach(prueba => {
    const { base, exponente, resultadoEsperado } = prueba;
    const esCorrecto = esElevacionCorrecta(base, exponente, resultadoEsperado);
    console.log(`Resultado de elevar ${base} a la potencia ${exponente} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});

