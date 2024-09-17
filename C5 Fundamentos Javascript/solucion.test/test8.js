describe("esNumeroEntero", () => {
    it("Debe retornar true para numeros enteros", () => {
      expect(esNumeroEntero(0)).toBe(true);
      expect(esNumeroEntero(1)).toBe(true);
      expect(esNumeroEntero(-1)).toBe(true);
      expect(esNumeroEntero(42)).toBe(true);
      expect(esNumeroEntero(1000000)).toBe(true);
    });
  
    it("Debe retornar false para numeros que no sean enteros", () => {
      expect(esNumeroEntero(0.5)).toBe(false);
      expect(esNumeroEntero(1.2)).toBe(false);
      expect(esNumeroEntero(-3.14)).toBe(false);
      expect(esNumeroEntero(42.0001)).toBe(false);
      expect(esNumeroEntero(1000000.01)).toBe(false);
    });
  
    it("Debe retornar false para valores que no sean numeros", () => {
      expect(esNumeroEntero("42")).toBe(false);
      expect(esNumeroEntero(NaN)).toBe(false);
      expect(esNumeroEntero(undefined)).toBe(false);
      expect(esNumeroEntero(null)).toBe(false);
      expect(esNumeroEntero({})).toBe(false);
      expect(esNumeroEntero([])).toBe(false);
      expect(esNumeroEntero(() => {})).toBe(false);
    });
  });

  function esNumeroEntero(valor) {
    return Number.isInteger(valor);
  }
  
    function probarEsNumeroEntero() {
  
    console.log("Debe retornar true para números enteros:");
    let casosVerdaderos = [0, 1, -1, 42, 1000000];
    casosVerdaderos.forEach(caso => {
      if (esNumeroEntero(caso)) {
        console.log(`El valor ${caso} es un número entero: PASADO`);
      } else {
        console.log(`El valor ${caso} NO es un número entero: FALLADO`);
      }
    });
  
      console.log("Debe retornar false para números que no sean enteros:");
    let casosFalsos = [0.5, 1.2, -3.14, 42.0001, 1000000.01];
    casosFalsos.forEach(caso => {
      if (!esNumeroEntero(caso)) {
        console.log(`El valor ${caso} NO es un número entero: PASADO`);
      } else {
        console.log(`El valor ${caso} es un número entero: FALLADO`);
      }
    });
  
      console.log("Debe retornar false para valores que no sean números:");
    let valoresNoNumeros = ["42", NaN, undefined, null, {}, [], () => {}];
    valoresNoNumeros.forEach(valor => {
      if (!esNumeroEntero(valor)) {
        console.log(`El valor ${valor} NO es un número entero: PASADO`);
      } else {
        console.log(`El valor ${valor} es un número entero: FALLADO`);
      }
    });
  }
  
    probarEsNumeroEntero();
  