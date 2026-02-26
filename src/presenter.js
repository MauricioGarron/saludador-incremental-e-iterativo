import sumar from "./sumador";
import saludar from "./saludador";

const button = document.querySelector("#saludar-button");
const input = document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");



const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");


button.addEventListener("click", () => {
  const nombre = input.value;
  div.innerHTML = "<p>" + saludar(nombre) + "<p>";
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
