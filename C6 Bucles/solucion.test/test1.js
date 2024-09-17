const esIgualYNegativo = 

test('ambos números son iguales y negativos', () => {
  expect(esIgualYNegativo(-5, -5)).toBe(true);
});

test('ambos números son iguales pero no negativos', () => {
  expect(esIgualYNegativo(5, 5)).toBe(false);
});

test('ambos números son negativos pero no iguales', () => {
  expect(esIgualYNegativo(-5, -10)).toBe(false);
});

test('ambos números son positivos y distintos', () => {
  expect(esIgualYNegativo(5, 10)).toBe(false);
});

const esIgualYNegativo = (num1, num2) => {
    if (num1 === num2 && num1 < 0 && num2 < 0) {
      return true;
    }
    return false;
  };
  
  console.log('Prueba 1 (ambos números son iguales y negativos):', esIgualYNegativo(-5, -5)); 
  console.log('Prueba 2 (ambos números son iguales pero no negativos):', esIgualYNegativo(5, 5));
  console.log('Prueba 3 (ambos números son negativos pero no iguales):', esIgualYNegativo(-5, -10));
  console.log('Prueba 4 (ambos números son positivos y distintos):', esIgualYNegativo(5, 10)); 
  