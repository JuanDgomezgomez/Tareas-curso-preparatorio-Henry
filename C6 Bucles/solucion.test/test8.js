const esPositivoOInferiorA10 = 

test('returns true for numbers less than 10 and positive', () => {
   expect(esPositivoOInferiorA10(5)).toBe(true);
   expect(esPositivoOInferiorA10(9)).toBe(true);
   expect(esPositivoOInferiorA10(0)).toBe(true);
   expect(esPositivoOInferiorA10(11)).toBe(false);
   expect(esPositivoOInferiorA10(-5)).toBe(false);
   expect(esPositivoOInferiorA10(100)).toBe(false);
});

const esPositivoOInferiorA10 = (num) => {
    if (num >= 0 && num < 10) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(esPositivoOInferiorA10(5));   
  console.log(esPositivoOInferiorA10(9));   
  console.log(esPositivoOInferiorA10(0));   
  console.log(esPositivoOInferiorA10(11));  
  console.log(esPositivoOInferiorA10(-5));  
  console.log(esPositivoOInferiorA10(100)); 
  
  
  