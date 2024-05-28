function inicio() {
  var btnSiguiente = document.getElementById("btnSiguiente");
  var btnHome = document.getElementById("btnHome");

  btnSiguiente.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnHome.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

function menuPrinc() {
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnAtras.addEventListener("click", function () { 
    window.location.href = "index.html";
  });
  btnSiguiente.addEventListener("click", function () {
    window.location.href = "unidad1.html";
  });
  
}

function unidadUno() {
  var btnMenu = document.getElementById("btnMenu");
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnMenu.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnAtras.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnSiguiente.addEventListener("click", function () {
    window.location.href = "unidad1_Actividades.html";
  });
}

function unidadUnoAct() {
  var btnMenu = document.getElementById("btnMenu");
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnMenu.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnAtras.addEventListener("click", function () {
    window.location.href = "unidad1.html";
  });

  btnSiguiente.addEventListener("click", function () {
    window.location.href = "unidad2.html";
  });
}

function unidadDos() {
  var btnMenu = document.getElementById("btnMenu");
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnMenu.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnAtras.addEventListener("click", function () {
    window.location.href = "unidad1_Actividades.html";
  });

  btnSiguiente.addEventListener("click", function () {
    window.location.href = "unidad2_Actividades.html";
  });
}


function unidadDosAct() {
  var btnMenu = document.getElementById("btnMenu");
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnMenu.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnAtras.addEventListener("click", function () {
    window.location.href = "unidad2.html";
  });

  btnSiguiente.addEventListener("click", function () {
    window.location.href = "unidad3.html";
  });
}

function unidadTres() {
  var btnMenu = document.getElementById("btnMenu");
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnMenu.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnAtras.addEventListener("click", function () {
    window.location.href = "unidad2_Actividades.html";
  });

  btnSiguiente.addEventListener("click", function () {
    window.location.href = "unidad3_Actividades.html";
  });
}


function unidadTresAct() {
  var btnMenu = document.getElementById("btnMenu");
  var btnAtras = document.getElementById("btnAtras");
  var btnSiguiente = document.getElementById("btnSiguiente");

  btnMenu.addEventListener("click", function () {
    window.location.href = "menuPrincipal.html";
  });

  btnAtras.addEventListener("click", function () {
    window.location.href = "unidad3.html";
  });

  btnSiguiente.addEventListener("click", function () {
    // window.location.href = "unidad3.html";  Referencias
  });
}