
test('Debe agregar un signo de exclamacion al final del string y retornarlo', function () {
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });

function agregarSimboloExclamacion(texto) {

    if (typeof texto === 'string') {

        return texto + '!';
    } else {

        throw new Error('El argumento debe ser una cadena de texto.');
    }
}

function esAgregacionCorrecta(texto, resultadoEsperado) {
    try {

        const resultado = agregarSimboloExclamacion(texto);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { texto: 'hello world', resultadoEsperado: 'hello world!' }, 
    { texto: 'Soy Henry', resultadoEsperado: 'Soy Henry!' }      
];

pruebas.forEach(prueba => {
    const { texto, resultadoEsperado } = prueba;
    const esCorrecto = esAgregacionCorrecta(texto, resultadoEsperado);
    console.log(`Resultado de agregar un signo de exclamación a "${texto}" (esperado: "${resultadoEsperado}"): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
