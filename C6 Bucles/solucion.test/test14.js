// const operadoresLogicos = 

test("Debe retornar 'Numero 1 es mayor y positivo' si num1 es positivo y mayor que num2 y num3", function () {
  expect(operadoresLogicos(50, 2, 15)).toBe('Numero 1 es mayor y positivo');
});

test("Debe retornar 'Hay negativos' si alguno de los argumentos es negativo", function () {
  expect(operadoresLogicos(-1, 50, 2)).toBe('Hay negativos');
});

test('Debe retornar (num3 + 1) si num3 es mayor que num1 y num2', function () {
  expect(operadoresLogicos(1, 3, 10)).toBe(11);
});

test("Debe retornar 'Error' si todos los argumentos son igual a cero", function () {
  expect(operadoresLogicos(0, 0, 0)).toBe('Error');
});

test('Debe retornar false si no se coincide con alguna de las opciones mencionadas', function () {
  expect(operadoresLogicos(10, 30, 6)).toBe(false);
});

const operadoresLogicos = (num1, num2, num3) => {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
      return 'Hay negativos';
    } else if (num1 > num2 && num1 > num3 && num1 > 0) {
      return 'Numero 1 es mayor y positivo';
    } else if (num3 > num1 && num3 > num2) {
      return num3 + 1;
    } else if (num1 === 0 && num2 === 0 && num3 === 0) {
      return 'Error';
    } else {
      return false;
    }
  };

  console.log(operadoresLogicos(50, 2, 15));
  console.log(operadoresLogicos(-1, 50, 2));
  console.log(operadoresLogicos(1, 3, 10));
  console.log(operadoresLogicos(0, 0, 0));
  console.log(operadoresLogicos(10, 30, 6));
