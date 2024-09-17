const obtenerAreaRectangulo = 

test('Debe retornar el área correcta del rectángulo', function () {
  expect(obtenerAreaRectangulo(2, 2)).toBe(4);
  expect(obtenerAreaRectangulo(3, 6)).toBe(18);
  expect(obtenerAreaRectangulo(0, 2)).toBe(0);
});

function obtenerAreaRectangulo(ancho, alto) {

    if (typeof ancho === 'number' && typeof alto === 'number') {

        return ancho * alto;
    } else {

        throw new Error('Ambos argumentos deben ser números.');
    }
}

function esAreaRectanguloCorrecta(ancho, alto, resultadoEsperado) {
    try {

        const resultado = obtenerAreaRectangulo(ancho, alto);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { ancho: 2, alto: 2, resultadoEsperado: 4 },  
    { ancho: 3, alto: 6, resultadoEsperado: 18 }, 
    { ancho: 0, alto: 2, resultadoEsperado: 0 }   
];

pruebas.forEach(prueba => {
    const { ancho, alto, resultadoEsperado } = prueba;
    const esCorrecto = esAreaRectanguloCorrecta(ancho, alto, resultadoEsperado);
    console.log(`Resultado de obtener área del rectángulo con ancho ${ancho} y alto ${alto} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
