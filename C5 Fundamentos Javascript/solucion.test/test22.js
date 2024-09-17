
test('Debe retornar la division de los dos argumentos', function () {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
    

function divide(a, b) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        if (b === 0) {
            throw new Error('La división por cero no está permitida.');
        }
        
        return a / b;
    } else {
        
        throw new Error('Ambos argumentos deben ser números.');
    }
}


function esDivisionCorrecta(a, b, resultadoEsperado) {
    try {
        
        const resultado = divide(a, b);
        
        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { a: 5, b: 5, resultadoEsperado: 1 },    // 5 / 5 = 1
    { a: 10, b: 5, resultadoEsperado: 2 },   // 10 / 5 = 2
    { a: 11, b: 2, resultadoEsperado: 5.5 }, // 11 / 2 = 5.5
    { a: 0, b: 1, resultadoEsperado: 0 },    // 0 / 1 = 0
    { a: -10, b: -2, resultadoEsperado: 5 }  // -10 / -2 = 5
];

pruebas.forEach(prueba => {
    const { a, b, resultadoEsperado } = prueba;
    const esCorrecto = esDivisionCorrecta(a, b, resultadoEsperado);
    console.log(`Resultado de la división ${a} / ${b} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
