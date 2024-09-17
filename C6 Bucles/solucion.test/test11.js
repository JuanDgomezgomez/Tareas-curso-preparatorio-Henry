const estaEnRango = 

test('Debe retornar True si num está en el rango', function () {
  expect(estaEnRango(35.5)).toBe(true);
  expect(estaEnRango(40)).toBe(true);
  expect(estaEnRango(49)).toBe(true);
  expect(estaEnRango(21)).toBe(true);
});

test('Debe retornar False si num está fuera de rango', function () {
  expect(estaEnRango(10)).toBe(false);
  expect(estaEnRango(20)).toBe(false);
  expect(estaEnRango(50)).toBe(false);
  expect(estaEnRango(100)).toBe(false);
});

const estaEnRango = (num) => {
    if (num > 20 && num < 50) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(estaEnRango(35.5));  
  console.log(estaEnRango(40));   
  console.log(estaEnRango(49));  
  console.log(estaEnRango(21));   
  console.log(estaEnRango(10));
  console.log(estaEnRango(20));
  console.log(estaEnRango(50));
  console.log(estaEnRango(100));