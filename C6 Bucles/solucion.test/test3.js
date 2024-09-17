const obtenerMayor = 

test('Debe retornar X si es mayor que Y', function () {
  expect(obtenerMayor(10, 5)).toBe(10);
});

test('Debe retornar Y si es mayor que X', function () {
  expect(obtenerMayor(50, 100)).toBe(100);
});

test('Si son iguales debe retornar cualquiera', function () {
  expect(obtenerMayor(1000, 1000)).toBe(1000);
});

const obtenerMayorNuevo = (x, y) => {
    if (x > y) {
      return x;
    } else if (y > x) {
      return y;
    } else {
      return x;
    }
  };
  
  console.log(obtenerMayorNuevo(10, 5));    // Devuelve 10
  console.log(obtenerMayorNuevo(50, 100));  // Devuelve 100
  console.log(obtenerMayorNuevo(1000, 1000));  // Devuelve 1000
  