import saludar from "./saludador.js";

describe("Saludador", () => {

  it("saluda en español con tratamiento", () => {
    expect(saludar("Mauricio", 9, "masculino", 40, "es"))
      .toEqual("Buenos días Sr. Mauricio");
  });

  it("saluda en ingles con tratamiento", () => {
    expect(saludar("John", 9, "masculino", 40, "en"))
      .toEqual("Good morning Mr. John");
  });

  it("saluda en ingles sin tratamiento", () => {
    expect(saludar("Ana", 15, "femenino", 20, "en"))
      .toEqual("Good afternoon Ana");
  });

});