const deEuroAdolar = 

test('Debe retornar el valor correcto de euro a dolar', function () {
  expect(deEuroAdolar(100)).toBe(120);
  expect(deEuroAdolar(200)).toBe(240);
  expect(deEuroAdolar(50)).toBe(60);
})

function deEuroAdolar(euros) {

    const tipoDeCambio = 1.2;

    if (typeof euros === 'number') {

        return euros * tipoDeCambio;
    } else {

        throw new Error('El argumento debe ser un número.');
    }
}

function esConversionCorrecta(euros, resultadoEsperado) {
    try {

        const resultado = deEuroAdolar(euros);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { euros: 100, resultadoEsperado: 120 }, 
    { euros: 200, resultadoEsperado: 240 }, 
    { euros: 50, resultadoEsperado: 60 }    
];

pruebas.forEach(prueba => {
    const { euros, resultadoEsperado } = prueba;
    const esCorrecto = esConversionCorrecta(euros, resultadoEsperado);
    console.log(`Resultado de la conversión de ${euros} euros (esperado: ${resultadoEsperado} dólares): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
