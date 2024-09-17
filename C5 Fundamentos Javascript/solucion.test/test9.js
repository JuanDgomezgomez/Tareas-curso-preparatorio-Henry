const esNuloOIndefinido = 

test('"null" debe retornar true', () => {
  expect(esNuloOIndefinido(null)).toBe(true);
});

test('"undefined" debe retornar true', () => {
  expect(esNuloOIndefinido(undefined)).toBe(true);
});

test('"0" debe retornar false', () => {
  expect(esNuloOIndefinido(0)).toBe(false);
});

test('"false" debe retornar false', () => {
  expect(esNuloOIndefinido(false)).toBe(false);
});

test('un string vacio debe retornar false', () => {
  expect(esNuloOIndefinido("")).toBe(false);
});

test('un objeto debe retornar false', () => {
  expect(esNuloOIndefinido({})).toBe(false);
});

test('un arreglo debe retornar false', () => {
  expect(esNuloOIndefinido([])).toBe(false);
});

function esNuloOIndefinido(valor) {
    if (valor === null || valor === undefined) {
      return true;
    } else {
      return false;
    }
  }

function esNuloOIndefinido(valor) {
    if (valor === null || valor === undefined) {
      return true;
    } else {
      return false;
    }
  }
  
function correrPruebas() {
    console.log('"null" debe retornar true:', esNuloOIndefinido(null) === true);
    console.log('"undefined" debe retornar true:', esNuloOIndefinido(undefined) === true);
    console.log('"0" debe retornar false:', esNuloOIndefinido(0) === false);
    console.log('"false" debe retornar false:', esNuloOIndefinido(false) === false);
    console.log('un string vacio debe retornar false:', esNuloOIndefinido("") === false);
    console.log('un objeto debe retornar false:', esNuloOIndefinido({}) === false);
    console.log('un arreglo debe retornar false:', esNuloOIndefinido([]) === false);
  }
  
  correrPruebas();
  