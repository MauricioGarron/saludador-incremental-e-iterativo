function saludar(nombre, hora, genero, edad, idioma) {

  let saludo;
  let tratamiento = "";

  if (idioma === "es") {

    if (hora < 12) {
      saludo = "Buenos días";
    } else if (hora < 19) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }

    if (edad > 30) {
      if (genero === "masculino") tratamiento = "Sr.";
      if (genero === "femenino") tratamiento = "Sra.";
    }

  } else if (idioma === "en") {

    if (hora < 12) {
      saludo = "Good morning";
    } else if (hora < 19) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }

    if (edad > 30) {
      if (genero === "masculino") tratamiento = "Mr.";
      if (genero === "femenino") tratamiento = "Mrs.";
    }
  }

  return tratamiento
    ? `${saludo} ${tratamiento} ${nombre}`
    : `${saludo} ${nombre}`;
}

export default saludar;