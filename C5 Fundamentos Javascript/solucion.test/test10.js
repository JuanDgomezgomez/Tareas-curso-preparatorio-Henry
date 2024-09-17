const devolverString = 

test('Debe retornar el string provisto "Henry"', function () {
  expect(devolverString('Henry')).toBe('Henry');
});

test('Debe retornar el string provisto "hola mundo"', function () {
  expect(devolverString('hola mundo')).toBe('hola mundo');
});

function devolverString(str) {
    return str;
  }

function devolverString(str) {
    return str;
  }
  
function correrPruebas() {
    console.log('Debe retornar el string provisto "Henry":', devolverString('Henry') === 'Henry');
    console.log('Debe retornar el string provisto "hola mundo":', devolverString('hola mundo') === 'hola mundo');
  }
  

  correrPruebas();
  