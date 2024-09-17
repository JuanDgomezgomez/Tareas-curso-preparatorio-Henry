const tieneTresDigitos = 

test('Debe retornar True si num tiene tres dígitos', function () {
  expect(tieneTresDigitos(100)).toBe(true);
  expect(tieneTresDigitos(820)).toBe(true);
  expect(tieneTresDigitos(900)).toBe(true);
});

test('Debe retornar False si num no tiene tres dígitos', function () {
  expect(tieneTresDigitos(10)).toBe(false);
  expect(tieneTresDigitos(20000)).toBe(false);
})

const tieneTresDigitos = (num) => {
    if (num >= 100 && num < 1000) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(tieneTresDigitos(100));   
  console.log(tieneTresDigitos(820));   
  console.log(tieneTresDigitos(10));    
  console.log(tieneTresDigitos(20000)); 
  