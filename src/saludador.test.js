import saludar from "./saludador.js";

describe("Saludador", () => {
  it("saluda con buenos dias en la mañana", () => {
    expect(saludar("Mauricio", 9)).toEqual("Buenos días Mauricio");
  });

  it("saluda con buenas tardes en la tarde", () => {
    expect(saludar("Mauricio", 15)).toEqual("Buenas tardes Mauricio");
  });

  it("saluda con buenas noches en la noche", () => {
    expect(saludar("Mauricio", 22)).toEqual("Buenas noches Mauricio");
  });
});