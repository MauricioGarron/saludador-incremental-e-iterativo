import saludar from "./saludador.js";

describe("Saludador", () => {
  it("deberia saludar por nombre", () => {
    expect(saludar("Mauricio")).toEqual("hola Mauricio");
  });
});