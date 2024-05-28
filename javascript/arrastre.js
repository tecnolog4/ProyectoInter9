function dragStart(event) {
  event.dataTransfer.setData("imagenArrastrable", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();

  document.getElementById("demo").innerHTML =
    "La imagen está sobre el objetivo de colocación";
}

function drop(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");

  event.target.appendChild(document.getElementById(data));

  if (data == "imagenRoja" && cuadroSoltar == "soltarRojo") {
    document.getElementById("demo").innerHTML = "Correcto, es una naranja";
  } else if (data == "imagenAmarilla" && cuadroSoltar == "soltarAmarillo") {
    document.getElementById("demo").innerHTML = "Correcto, es una manzana";
  } else {
    document.getElementById("demo").innerHTML = "Incorrecto";
  }
  // ocultarTexto();
}

function recargarPagina() {
  location.reload();
}
// Codigo cuadrado magico

function soltarNumCuadrado1(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");

  if (event.target.children.length > 0) {
    // Si el cuadro de destino ya contiene una imagen, no hacer nada

    return;
  }

  event.target.appendChild(document.getElementById(data));

  if (data == "numUno" && cuadroSoltar == "uno") {
    document.getElementById("informacion").innerHTML = "Correcto, es uno";
  } else if (data == "numDos" && cuadroSoltar == "dos") {
    document.getElementById("informacion").innerHTML = "Correcto, es dos";
  } else if (data == "numTres" && cuadroSoltar == "tres") {
    document.getElementById("informacion").innerHTML = "Correcto, es tres";
  } else if (data == "numCinco" && cuadroSoltar == "cinco") {
    document.getElementById("informacion").innerHTML = "Correcto, es cinco";
  } else if (data == "numSeis" && cuadroSoltar == "seis") {
    document.getElementById("informacion").innerHTML = "Correcto, es seis";
  } else if (data == "numOcho" && cuadroSoltar == "ocho") {
    document.getElementById("informacion").innerHTML = "Correcto, es ocho";
  } else if (data == "numNueve" && cuadroSoltar == "nueve") {
    document.getElementById("informacion").innerHTML = "Correcto, es nueve";
  } else {
    document.getElementById("informacion").innerHTML = "No es correcto";
  }

}

function soltarNumCuadrado2(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");

  if (event.target.children.length > 0) {
    return;
  }

  event.target.appendChild(document.getElementById(data));

  if (data == "numCuatro" && cuadroSoltar == "cuatro") {
    document.getElementById("informacion2").innerHTML = "Correcto, es Cuatro";
  } else if (data == "numNueve" && cuadroSoltar == "nueve") {
    document.getElementById("informacion2").innerHTML = "Correcto, es Nueve";
  } else if (data == "numSeis" && cuadroSoltar == "seis") {
    document.getElementById("informacion2").innerHTML = "Correcto, es Seis";
  } else if (data == "numSiete" && cuadroSoltar == "siete") {
    document.getElementById("informacion2").innerHTML = "Correcto, es Siete";
  } else if (data == "numDoce" && cuadroSoltar == "doce") {
    document.getElementById("informacion2").innerHTML = "Correcto, es Doce";
  } else if (data == "numCinco" && cuadroSoltar == "cinco") {
    document.getElementById("informacion2").innerHTML = "Correcto, es Cinco";
  } else {
    document.getElementById("informacion2").innerHTML = "No es correcto";
  }

}

function soltarNumCuadrado3(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");

  if (event.target.children.length > 0) {
    return;
  }

  event.target.appendChild(document.getElementById(data));

  if (data == "numTres" && cuadroSoltar == "tres") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Tres";
  } else if (data == "numOcho" && cuadroSoltar == "ocho") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Ocho";
  } else if (data == "numSiete" && cuadroSoltar == "siete") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Siete";
  } else if (data == "numSeis" && cuadroSoltar == "seis") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Seis";
  } else if (data == "numDos" && cuadroSoltar == "dos") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Dos";
  } else if (data == "numCinco" && cuadroSoltar == "cinco") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Cinco";
  }else if (data == "numNueve" && cuadroSoltar == "nueve") {
    document.getElementById("informacion3").innerHTML = "Correcto, es Nueve";
  } else {
    document.getElementById("informacion3").innerHTML = "No es correcto";
  }

 
}
function ocultarTexto() {
  // Ocultar el texto
  document.getElementById("textoFondo").style.display = "none";
}


// Series Logicas
function soltarFigura1(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");
  const droppedImage = document.getElementById(data);

  if (event.target.children.length > 0) {
    // Si el cuadro de destino ya contiene una imagen, mostrar mensaje de error
    document.getElementById("mensaje1").innerHTML =
      "No puedes colocar una imagen aquí";
    return;
  }

  event.target.appendChild(document.getElementById(data));

  event.target.appendChild(droppedImage);

  if (droppedImage.alt === "figura4") {
      document.getElementById("mensaje1").innerHTML = "¡Correcto, es la figura!";
  } else {
      document.getElementById("mensaje1").innerHTML = "¡Incorrecto, no es la figura!";
      setTimeout(function () {
          // Regresar la imagen a su posición original después de 2 segundos
          document.getElementById("pag1Actividad0").children[1].appendChild(droppedImage);
      }, 2000);  

//////////////////////////////IMPORTANTE 
      //Redirigir a la primera pagina de actividaes 
  }
}


function soltarFigura2(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");
  const droppedImage = document.getElementById(data);

  if (event.target.children.length > 0) {
    // Si el cuadro de destino ya contiene una imagen, mostrar mensaje de error
    document.getElementById("mensaje2").innerHTML =
      "No puedes colocar una imagen aquí";
    return;
  }

  event.target.appendChild(document.getElementById(data));

  event.target.appendChild(droppedImage);

  if (droppedImage.alt === "figura4") {
      document.getElementById("mensaje2").innerHTML = "¡Correcto, es la figura!";
  } else {
      document.getElementById("mensaje2").innerHTML = "¡Incorrecto, no es la figura!";
      setTimeout(function () {
          // Regresar la imagen a su posición original después de 2 segundos
          document.getElementById("pag1Actividad1").children[1].appendChild(droppedImage);
      }, 2000);
  }
}


function soltarFigura3(event) {
  event.preventDefault();

  const cuadroSoltar = event.target.id;
  const data = event.dataTransfer.getData("imagenArrastrable");
  const droppedImage = document.getElementById(data);

  if (event.target.children.length > 0) {
    // Si el cuadro de destino ya contiene una imagen, mostrar mensaje de error
    document.getElementById("mensaje3").innerHTML =
      "No puedes colocar una imagen aquí";
    return;
  }

  event.target.appendChild(document.getElementById(data));

  event.target.appendChild(droppedImage);

  if (droppedImage.alt === "numCorrecto") {
      document.getElementById("mensaje3").innerHTML = "¡Correcto, es el numero!";
  } else {
      document.getElementById("mensaje3").innerHTML = "¡Incorrecto, no es el numero!";
      setTimeout(function () {
          // Regresar la imagen a su posición original después de 2 segundos
          document.getElementById("pag1Actividad2").children[1].appendChild(droppedImage);
      }, 2000);
  }
}