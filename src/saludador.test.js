import saludar from "./saludador.js";

describe("Saludador", () => {
  it("saluda masculino en la mañana", () => {
    expect(saludar("Mauricio", 9, "masculino"))
      .toEqual("Buenos días Sr. Mauricio");
  });

  it("saluda femenino en la tarde", () => {
    expect(saludar("Ana", 15, "femenino"))
      .toEqual("Buenas tardes Sra. Ana");
  });
});