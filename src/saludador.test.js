import saludar from "./saludador.js";

describe("Saludador", () => {
    it("Deberia saludar con hola", () => {
        expect(saludar()).toEqual("hola");
    });
});