const areaDelTriangulo = 

test('Debe retornar el área correcta del triángulo', function () {
  expect(areaDelTriangulo(10, 5)).toBe(25);
  expect(areaDelTriangulo(20, 10)).toBe(100);
  expect(areaDelTriangulo(0, 10)).toBe(0);
});

function areaDelTriangulo(base, altura) {

    if (typeof base === 'number' && typeof altura === 'number') {

        return 0.5 * base * altura;
    } else {

        throw new Error('Ambos argumentos deben ser números.');
    }
}

function esAreaCorrecta(base, altura, resultadoEsperado) {
    try {

        const resultado = areaDelTriangulo(base, altura);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { base: 10, altura: 5, resultadoEsperado: 25 }, 
    { base: 20, altura: 10, resultadoEsperado: 100 }, 
    { base: 0, altura: 10, resultadoEsperado: 0 }
];     

pruebas.forEach(prueba => {
    const { base, altura, resultadoEsperado } = prueba;
    const esCorrecto = esAreaCorrecta(base, altura, resultadoEsperado);
    console.log(`Resultado del cálculo del área del triángulo con base ${base} y altura ${altura} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
