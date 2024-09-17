// const saludo = 

test("Debe retornar 'Guten Tag!' por 'aleman'", function () {
  expect(saludo('aleman')).toBe('Guten Tag!');
});

test("Debe retornar 'Hello!' por 'ingles'", function () {
  expect(saludo('ingles')).toBe('Hello!');
});

test("Debe retornar 'Ni Hao!' por 'mandarin'", function () {
  expect(saludo('mandarin')).toBe('Ni Hao!');
});

test("Debe retornar 'Hola!' si el argumento no se especificó", function () {
  expect(saludo('frances')).toBe('Hola!');
  expect(saludo()).toBe('Hola!');
});

const saludo = (idioma) => {
    if (idioma === 'aleman') {
      return 'Guten Tag!';
    } else if (idioma === 'ingles') {
      return 'Hello!';
    } else if (idioma === 'mandarin') {
      return 'Ni Hao!';
    } else {
      return 'Hola!';
    }
  };

  console.log(saludo("aleman"));
  console.log(saludo("ingles"));
  console.log(saludo("mandarin"));
  console.log(saludo("frances"));

