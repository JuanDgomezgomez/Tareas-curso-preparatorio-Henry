const esVerdaderoYFalso = 

test('ambos verdaderos', () => {
  expect(esVerdaderoYFalso(true, true)).toBe(true);
});

test('uno verdadero y otro falso', () => {
  expect(esVerdaderoYFalso(true, false)).toBe(false);
  expect(esVerdaderoYFalso(false, true)).toBe(false);
});

test('ambos falsos', () => {
  expect(esVerdaderoYFalso(false, false)).toBe(false);
});

const esVerdaderoYFalso = (val1, val2) => {
    if (val1 === true && val2 === true) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(esVerdaderoYFalso(true, true));  
  console.log(esVerdaderoYFalso(true, false)); 
  console.log(esVerdaderoYFalso(false, true)); 
  console.log(esVerdaderoYFalso(false, false));
  