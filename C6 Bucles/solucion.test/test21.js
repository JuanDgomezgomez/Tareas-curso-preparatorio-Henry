const esPotenciaDeDos = 

test('2 es potencia de 2', () => {
  expect(esPotenciaDeDos(2)).toBe(true);
});

test('4 es potencia de 2', () => {
  expect(esPotenciaDeDos(4)).toBe(true);
});

test('8 es potencia de 2', () => {
  expect(esPotenciaDeDos(8)).toBe(true);
});

test('16 es potencia de 2', () => {
  expect(esPotenciaDeDos(16)).toBe(true);
});

test('32 es potencia de 2', () => {
  expect(esPotenciaDeDos(32)).toBe(true);
});

test('3 no es potencia de 2', () => {
  expect(esPotenciaDeDos(3)).toBe(false);
});

test('10 no es potencia de 2', () => {
  expect(esPotenciaDeDos(10)).toBe(false);
});

test('15 no es potencia de 2', () => {
  expect(esPotenciaDeDos(15)).toBe(false);
});

test('25 no es potencia de 2', () => {
  expect(esPotenciaDeDos(25)).toBe(false);
});

test('100 no es potencia de 2', () => {
  expect(esPotenciaDeDos(100)).toBe(false);
});

const esPotenciaDeDos = (num) => {
    if (num <= 0) {
      return false;
    }
    while (num % 2 === 0) {
      num = num / 2;
    }
    return num === 1;
  };

  console.log(esPotenciaDeDos(2));
  console.log(esPotenciaDeDos(4));
  console.log(esPotenciaDeDos(8));
  console.log(esPotenciaDeDos(16));
  console.log(esPotenciaDeDos(32));
  console.log(esPotenciaDeDos(3));
  console.log(esPotenciaDeDos(10));
  console.log(esPotenciaDeDos(15));
  console.log(esPotenciaDeDos(25));
  console.log(esPotenciaDeDos(100));
