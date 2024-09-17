const esArrayNoVacio = require('../ejercicios/28');

describe('esArrayNoVacio', () => {
  it('should return true for a non-empty array', () => {
    expect(esArrayNoVacio([1, 2, 3])).toBe(true);
  });

  it('should return false for an empty array', () => {
    expect(esArrayNoVacio([])).toBe(false);
  });

  it('should return false for a non-array value', () => {
    expect(esArrayNoVacio('not an array')).toBe(false);
  });
});

const esArrayNoVacio = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};

console.log(esArrayNoVacio([1, 2, 3])); 
console.log(esArrayNoVacio([])); 
console.log(esArrayNoVacio('not an array')); 