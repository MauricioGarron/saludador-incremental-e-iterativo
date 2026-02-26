import sumar from "./sumador";
import saludar from "./saludador";

const button = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");


button.addEventListener("click", () => {
  div.innerHTML = "<p>" + saludar() + "<p>";
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
