const obtenerDiaSemana = 

describe('obtenerDiaSemana', () => {
  test("should return 'Lunes' when passed 1", () => {
    expect(obtenerDiaSemana(1)).toBe('Lunes');
  });

  test("should return 'Martes' when passed 2", () => {
    expect(obtenerDiaSemana(2)).toBe('Martes');
  });

  test("should return 'Miercoles' when passed 3", () => {
    expect(obtenerDiaSemana(3)).toBe('Miercoles');
  });

  test("should return 'Jueves' when passed 4", () => {
    expect(obtenerDiaSemana(4)).toBe('Jueves');
  });

  test("should return 'Viernes' when passed 5", () => {
    expect(obtenerDiaSemana(5)).toBe('Viernes');
});

test("should return 'Sabado' when passed 6", () => {
  expect(obtenerDiaSemana(6)).toBe('Sabado');
});

test("should return 'Domingo' when passed 7", () => {
  expect(obtenerDiaSemana(7)).toBe('Domingo');
});

test("should return 'No es un dia de la semana' when passed 0", () => {
  expect(obtenerDiaSemana(0)).toBe('No es un dia de la semana');
});

test("should return 'No es un dia de la semana' when passed 8", () => {
  expect(obtenerDiaSemana(8)).toBe('No es un dia de la semana');
});

test("should return 'No es un dia de la semana' when passed a string", () => {
  expect(obtenerDiaSemana('hola')).toBe('No es un dia de la semana');
});
}

    const obtenerDiaSemana = (dia) => {
        if (dia === 1) {
          return 'Lunes';
        } else if (dia === 2) {
          return 'Martes';
        } else if (dia === 3) {
          return 'Miércoles';
        } else if (dia === 4) {
          return 'Jueves';
        } else if (dia === 5) {
          return 'Viernes';
        } else if (dia === 6) {
          return 'Sábado';
        } else if (dia === 7) {
          return 'Domingo';
        } else {
          return 'No es un día de la semana';
        }
      };

      console.log(obtenerDiaSemana(1));
      console.log(obtenerDiaSemana(2));
      console.log(obtenerDiaSemana(3));
      console.log(obtenerDiaSemana(4));
      console.log(obtenerDiaSemana(5));
      console.log(obtenerDiaSemana(6));
      console.log(obtenerDiaSemana(7));
      console.log(obtenerDiaSemana(0));
      console.log(obtenerDiaSemana(8));
      console.log(obtenerDiaSemana("hola"));
      