function saludar(nombre, hora, genero) {
  let saludo;

  if (hora >= 0 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let tratamiento = "";

  if (genero === "masculino") {
    tratamiento = "Sr.";
  } else if (genero === "femenino") {
    tratamiento = "Sra.";
  }

  return saludo + " " + tratamiento + " " + nombre;
}

export default saludar;