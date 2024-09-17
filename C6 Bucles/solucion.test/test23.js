const esNumeroPrimo = 

test("2 es un número primo", () => {
  expect(esNumeroPrimo(2)).toBe(true);
});

test("3 es un número primo", () => {
  expect(esNumeroPrimo(3)).toBe(true);
});

test("4 no es un número primo", () => {
  expect(esNumeroPrimo(4)).toBe(false);
});

test("5 es un número primo", () => {
  expect(esNumeroPrimo(5)).toBe(true);
});

test("6 no es un número primo", () => {
  expect(esNumeroPrimo(6)).toBe(false);
});

test("7 es un número primo", () => {
  expect(esNumeroPrimo(7)).toBe(true);
});

test("8 no es un número primo", () => {
  expect(esNumeroPrimo(8)).toBe(false);
});

test("9 no es un número primo", () => {
  expect(esNumeroPrimo(9)).toBe(false);
});

test("10 no es un número primo", () => {
  expect(esNumeroPrimo(10)).toBe(false);
});

test("11 es un número primo", () => {
  expect(esNumeroPrimo(11)).toBe(true);
});

const esNumeroPrimo = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  console.log(esNumeroPrimo(2));
  console.log(esNumeroPrimo(3));
  console.log(esNumeroPrimo(4));
  console.log(esNumeroPrimo(5));
  console.log(esNumeroPrimo(6));
  console.log(esNumeroPrimo(7));
  console.log(esNumeroPrimo(8));
  console.log(esNumeroPrimo(9));
  console.log(esNumeroPrimo(10));
  console.log(esNumeroPrimo(11));