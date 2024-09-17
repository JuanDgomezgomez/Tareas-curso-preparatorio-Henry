const sumarHastaNConBreak = 

test('sumarHastaNConBreak of 5 should return 15', () => {
   expect(sumarHastaNConBreak(5)).toBe(15);
});

test('sumarHastaNConBreak of 7 should return 28', () => {
   expect(sumarHastaNConBreak(7)).toBe(28);
});

test('sumarHastaNConBreak of 10 should return 55', () => {
   expect(sumarHastaNConBreak(10)).toBe(55);
});

test('sumarHastaNConBreak of 15 should return 105', () => {
   expect(sumarHastaNConBreak(15)).toBe(105);
});

test('sumarHastaNConBreak of 20 should return 105', () => {
   expect(sumarHastaNConBreak(20)).toBe(105);
});

test('sumarHastaNConBreak of 50 should return 105', () => {
   expect(sumarHastaNConBreak(50)).toBe(105);
});

const sumarHastaNConBreak = (n) => {
    let suma = 0;
    let contador = 0;
    while (contador <= n) {
      suma += contador;
      contador++;
      if (suma >= 105) {
        break;
      }
    }
    return suma;
  };
  
  console.log(sumarHastaNConBreak(5));   
  console.log(sumarHastaNConBreak(7));  
  console.log(sumarHastaNConBreak(10));   
  console.log(sumarHastaNConBreak(15));   
  console.log(sumarHastaNConBreak(20)); 
  console.log(sumarHastaNConBreak(50)); 
  