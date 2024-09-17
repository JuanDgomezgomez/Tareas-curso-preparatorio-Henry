const nuevoModulo = 

test('Debe ser el resultado correcto del módulo', function () {
  expect(nuevoModulo).toBe(true);
});

let dividendo = 10;
let divisor = 3;
let resultadoEsperado = 1; 

let nuevoModulo = (dividendo % divisor === resultadoEsperado);

if (nuevoModulo) {
  console.log('La prueba ha pasado: El resultado del módulo es correcto.');
} else {
  console.log('La prueba ha fallado: El resultado del módulo no es correcto.');
}
