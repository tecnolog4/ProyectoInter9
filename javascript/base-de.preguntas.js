function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "Según la imagen que se muestra,¿Cuál de las figuras sólidas, se podrian armar con la figura que se encuentra desplegada en la parte superior de las opciones?",
    imagen: "https://i.ibb.co/GvVzc1r/Pregunta1.png",
    respuesta: "D",
    distractores: ["A", "B", "C"],
  },
  {
    pregunta: "¿Qué figura debe reemplazar el incognito que se muestra en la imágen?",
    imagen: "https://i.ibb.co/fnhY83p/Pregunta2.png",
    respuesta: "C",
    distractores: ["A", "B", "D"],
  },
  {
    pregunta: "¿Cuál es la cantidad de cubos que conforman la siguiente figura?",
    imagen: "https://i.ibb.co/0DdCsbd/Pregunta3.png",
    respuesta: "25",
    distractores: ["23", "26","20"],
  },
  {
    pregunta: "¿Cuál es la forma sólida que se obtiene al armar las caras?",
    imagen: "https://i.ibb.co/dbhw79x/Pregunta4.png",
    respuesta: "B",
    distractores: ["A","C","D"],
  },
  {
      pregunta: "Si se divide una carretera en tramos de 2  kilómetros, sobra 1 kilometro, si se divide en tramos  de 3 kilómetros sobran 2 kilómetros, y si se divide en tramos de 4 kilómetros sobran 3 kilómetros. Si se sabe que la longitud total de la carretera es de menos de 22 kilómetros, entonces la longitud total en kilómetros de esta carretera, es:",
      imagen: "https://i.ibb.co/MV9Skch/Pregunta5.webp",
      respuesta: "13",
      distractores: ["16","11","15"],
    },
    {
      pregunta: "¿Cuántos cuadrados existen en el tablero de ajedrez",
      imagen: "https://i.ibb.co/DggKCYM/pregunta6.webp",
      respuesta: "204",
      distractores: ["200","206","32"],
    },
    {
      pregunta: "¿Cuántas fichas de reina se pueden colocar como máximo en el tablero de ajedrez, de forma que el movimiento de la reina no interfiera o se cruce con el movimiento de otra reina en las casillas del tablero?",
      imagen: "https://i.ibb.co/GVR35ZN/Pregunta7.png",
      respuesta: "8",
      distractores: ["9","6","7"],
    },
];
