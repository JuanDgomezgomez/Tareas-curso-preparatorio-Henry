const nuevaMultiplicacion = 

test('Debe ser la multiplicación correcta', function () {
  expect(nuevaMultiplicacion).toBe(true);
});

let valor1 = 5;
let valor2 = 3;
let resultadoEsperado = 15; 

let nuevaMultiplicacion = (valor1 * valor2 === resultadoEsperado);

if (nuevaMultiplicacion) {
  console.log('La prueba ha pasado: La multiplicación es correcta.');
} else {
  console.log('La prueba ha fallado: La multiplicación no es correcta.');
}


