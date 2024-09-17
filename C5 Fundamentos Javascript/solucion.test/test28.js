const retornarPerimetro = 

test('Debe retornar el perímetro correcto del cuadrado', function () {
   expect(retornarPerimetro(2)).toBe(8);
   expect(retornarPerimetro(8)).toBe(32);
   expect(retornarPerimetro(0)).toBe(0);
});

function retornarPerimetro(lado) {

    if (typeof lado === 'number') {

        return 4 * lado;
    } else {

        throw new Error('El argumento debe ser un número.');
    }
}

function esPerimetroCorrecto(lado, resultadoEsperado) {
    try {

        const resultado = retornarPerimetro(lado);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { lado: 2, resultadoEsperado: 8 }, 
    { lado: 8, resultadoEsperado: 32 }, 
    { lado: 0, resultadoEsperado: 0 }   
];

pruebas.forEach(prueba => {
    const { lado, resultadoEsperado } = prueba;
    const esCorrecto = esPerimetroCorrecto(lado, resultadoEsperado);
    console.log(`Resultado de calcular el perímetro del cuadrado con lado ${lado} (esperado: ${resultadoEsperado}): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
