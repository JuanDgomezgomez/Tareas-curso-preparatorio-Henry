
test('Debe retornar el producto de los dos argumentos', function () {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });

function multiplica(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
             return a * b;
    } 
    else {
      throw new Error('Ambos argumentos deben ser números.');
    }
}

function esMultiplicacionCorrecta(a, b, resultadoEsperado) {
    try {
        const resultado = multiplica(a, b);
        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { a: 5, b: 5, resultadoEsperado: 25 },    
    { a: 10, b: -5, resultadoEsperado: -50 }, 
    { a: 11, b: 0, resultadoEsperado: 0 },    
    { a: -4, b: -6, resultadoEsperado: 24 }, 
    { a: 7, b: 3, resultadoEsperado: 21 }    
];

pruebas.forEach(prueba => {
    const { a, b, resultadoEsperado } = prueba;
    const esCorrecto = esMultiplicacionCorrecta(a, b, resultadoEsperado);
    console.log(`Resultado de la multiplicación ${a} * ${b} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
