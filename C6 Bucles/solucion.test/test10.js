const esDiezOCinco = 

test('Debe retornar True si num es 10 o 5', function () {
  expect(esDiezOCinco(10)).toBe(true);
  expect(esDiezOCinco(5)).toBe(true);
});

test('Debe retornar False si num no es 10 o 5', function () {
  expect(esDiezOCinco(11)).toBe(false);
  expect(esDiezOCinco(6)).toBe(false);
  expect(esDiezOCinco(0)).toBe(false);
  expect(esDiezOCinco(5.01)).toBe(false);
});

const esDiezOCinco = (num) => {
    if (num === 10 || num === 5) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(esDiezOCinco(10));  
  console.log(esDiezOCinco(5));   
  console.log(esDiezOCinco(11));  
  console.log(esDiezOCinco(0));   
  console.log(esDiezOCinco(5.01));
  