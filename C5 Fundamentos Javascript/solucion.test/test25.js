
test('Debe retornar los strings combinados con un espacio en el medio', function () {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });

function combinarNombres(nombre1, nombre2) {

    if (typeof nombre1 === 'string' && typeof nombre2 === 'string') {

        return nombre1 + ' ' + nombre2;
    } else {

        throw new Error('Ambos argumentos deben ser cadenas de texto.');
    }
}

function esCombinacionCorrecta(nombre1, nombre2, resultadoEsperado) {
    try {

        const resultado = combinarNombres(nombre1, nombre2);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { nombre1: 'hello', nombre2: 'world', resultadoEsperado: 'hello world' }, 
    { nombre1: 'Soy', nombre2: 'Henry', resultadoEsperado: 'Soy Henry' }      
];

pruebas.forEach(prueba => {
    const { nombre1, nombre2, resultadoEsperado } = prueba;
    const esCorrecto = esCombinacionCorrecta(nombre1, nombre2, resultadoEsperado);
    console.log(`Resultado de combinar "${nombre1}" y "${nombre2}" (esperado: "${resultadoEsperado}"): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
