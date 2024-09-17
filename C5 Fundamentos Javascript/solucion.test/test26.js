const obtenerSaludo = 

test("Debe retornar el string 'Hola {name}!'", function () {
  expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
  expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
});

function obtenerSaludo(nombre) {

    if (typeof nombre === 'string') {

        return `Hola ${nombre}!`;
    } else {

        throw new Error('El argumento debe ser una cadena de texto.');
    }
}

function esSaludoCorrecto(nombre, resultadoEsperado) {
    try {

        const resultado = obtenerSaludo(nombre);

        return resultado === resultadoEsperado;
    } catch (error) {
        console.error('Error:', error.message); 
        return false;
    }
}

const pruebas = [
    { nombre: 'Martin', resultadoEsperado: 'Hola Martin!' }, 
    { nombre: 'Antonio', resultadoEsperado: 'Hola Antonio!' } 
];


pruebas.forEach(prueba => {
    const { nombre, resultadoEsperado } = prueba;
    const esCorrecto = esSaludoCorrecto(nombre, resultadoEsperado);
    console.log(`Resultado de obtener saludo para "${nombre}" (esperado: "${resultadoEsperado}"): ${esCorrecto ? 'Correcto' : 'Incorrecto'}`);
});
