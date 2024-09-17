const esVerdadero = 

test('Debe retornar "Soy verdadero" si valor es True', function () {
  expect(esVerdadero(true)).toBe('Soy verdadero');
});

test('Debe retornar "Soy falso" si valor es False', function () {
  expect(esVerdadero(false)).toBe('Soy falso');
});

const esVerdadero = (valor) => {
    if (valor === true) {
      return 'Soy verdadero';
    } else {
      return 'Soy falso';
    }
  };
  
  console.log(esVerdadero(true));  
  console.log(esVerdadero(false)); 
  