import saludar from "./saludador.js";

describe("Saludador", () => {

  it("usa tratamiento si edad > 30", () => {
    expect(saludar("Mauricio", 9, "masculino", 40))
      .toEqual("Buenos días Sr. Mauricio");
  });

  it("no usa tratamiento si edad <= 30", () => {
    expect(saludar("Ana", 15, "femenino", 25))
      .toEqual("Buenas tardes Ana");
  });

});