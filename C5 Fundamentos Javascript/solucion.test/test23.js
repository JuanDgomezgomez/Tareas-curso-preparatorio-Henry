
test('Debe retornar el resto de dividir x sobre y', function () {
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
  });
  

function obtenerResto(x, y) {

    if (typeof x === 'number' && typeof y === 'number') {

        return x % y;
    } else {

        throw new Error('Ambos argumentos deben ser números.');
    }
}

function esRestoCorrecto(x, y, resultadoEsperado) {
    try {

        const resultado = obtenerResto(x, y);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message);
        return false;
    }
}

const pruebas = [
    { x: 15, y: 5, resultadoEsperado: 0 },  
    { x: 21, y: 5, resultadoEsperado: 1 },  
    { x: 22, y: 5, resultadoEsperado: 2 },  
    { x: 7, y: 3, resultadoEsperado: 1 },   
    { x: 10, y: 4, resultadoEsperado: 2 }   
];

pruebas.forEach(prueba => {
    const { x, y, resultadoEsperado } = prueba;
    const esCorrecto = esRestoCorrecto(x, y, resultadoEsperado);
    console.log(`Resultado de la operación ${x} % ${y} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
