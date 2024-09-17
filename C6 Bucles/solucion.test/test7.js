const esParYDivisiblePorTres = 

describe('esParYDivisiblePorTres', () => {
  test('should return true for 6', () => {
    expect(esParYDivisiblePorTres(6)).toBe(true);
  });

  test('should return false for 7', () => {
    expect(esParYDivisiblePorTres(7)).toBe(false);
  });

  test('should return false for 9', () => {
    expect(esParYDivisiblePorTres(9)).toBe(false);
  });

  test('should return true for 12', () => {
    expect(esParYDivisiblePorTres(12)).toBe(true);
  });

  test('should return false for 13', () => {
    expect(esParYDivisiblePorTres(13)).toBe(false);

    const esParYDivisiblePorTres = (num) => {
        if (num % 2 === 0 && num % 3 === 0) {
          return true;
        } else {
          return false;
        }
      };
      
      console.log(esParYDivisiblePorTres(6));  
      console.log(esParYDivisiblePorTres(7));  
      console.log(esParYDivisiblePorTres(9));  
      console.log(esParYDivisiblePorTres(12)); 
      console.log(esParYDivisiblePorTres(13)); 
      