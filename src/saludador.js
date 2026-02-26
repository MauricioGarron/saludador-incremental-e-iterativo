function saludar(nombre, hora, genero, edad) {
  let saludo;

  if (hora >= 0 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let tratamiento = "";

  if (edad > 30) {
    if (genero === "masculino") {
      tratamiento = "Sr.";
    } else if (genero === "femenino") {
      tratamiento = "Sra.";
    }
  }

  return tratamiento
    ? `${saludo} ${tratamiento} ${nombre}`
    : `${saludo} ${nombre}`;
}

export default saludar;