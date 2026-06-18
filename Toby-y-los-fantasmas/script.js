// CONFIGURACIÓN DE LAS PÁGINAS DEL CUENTO (13 Páginas)
const paginasCuento = [
  {
    imagen: "imagenes/pagina-01.webp",
    audio: "audios/toby-pag1.mp3",
  },
  {
    imagen: "imagenes/pagina-02.webp",
    audio: "audios/toby-pag2.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "35%", left: "20%" }
  },
  {
    imagen: "imagenes/pagina-03.webp",
    audio: "audios/toby-pag3.mp3",
    calzonSrc: "imagenes/calzon-flota.webp",
    postura: "postura-mareado",
    coordenadas: { top: "55%", left: "60%" }
  },
  {
    imagen: "imagenes/pagina-04.webp",
    audio: "audios/toby-pag4.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "60%", left: "25%" }
  },
  {
    imagen: "imagenes/pagina-05.webp",
    audio: "audios/toby-pag5.mp3",
    calzonSrc: "imagenes/calzon-flota.webp",
    postura: "postura-flotar",
    coordenadas: { top: "60%", left: "40%" }
  },
  {
    imagen: "imagenes/pagina-06.webp",
    audio: "audios/toby-pag6.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "40%", left: "15%" }
  },
  {
    imagen: "imagenes/pagina-07.webp",
    audio: "audios/toby-pag7.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "40%", left: "55%" }
  },
  {
    imagen: "imagenes/pagina-08.webp",
    audio: "audios/toby-pag8.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-mareado",
    coordenadas: { top: "35%", left: "55%" }
  },
  {
    imagen: "imagenes/pagina-09.webp",
    audio: "audios/toby-pag9.mp3",
    calzonSrc: "imagenes/calzon-flota.webp",
    postura: "postura-asustado",
    coordenadas: { top: "40%", left: "55%" }
  },
  {
    imagen: "imagenes/pagina-10.webp",
    audio: "audios/toby-pag10.mp3",

  },
  {
    imagen: "imagenes/pagina-11.webp",
    audio: "audios/toby-pag11.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-flotar",
    coordenadas: { top: "40%", left: "15%" }
  },
  {
    imagen: "imagenes/pagina-12.webp",
    audio: "audios/toby-pag12.mp3",
  },
  {
    imagen: "imagenes/pagina-13.webp",
    audio: "audios/toby-pag13.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-flotar",
    coordenadas: { top: "20%", left: "65%" }
  }
];

let paginaActual = 0;
const audioCuento = document.getElementById('audio-cuento');
const audioEfecto = document.getElementById('audio-efecto');
const imgPagina = document.getElementById('imagen-pagina');
const calzon = document.getElementById('calzon-personaje');
const progresoFill = document.getElementById('progreso-fill');
const contador = document.getElementById('contador-pagina');

function comenzar() {
  document.getElementById('pantalla-inicio').classList.add('oculto');
  document.getElementById('visor').classList.remove('oculto');
  cargarPagina();
}

function cargarPagina() {
  const datos = paginasCuento[paginaActual];
  
  imgPagina.src = datos.imagen;
  contador.textContent = `${paginaActual + 1} / ${paginasCuento.length}`;
  
  const porcentaje = ((paginaActual + 1) / paginasCuento.length) * 100;
  progresoFill.style.width = `${porcentaje}%`;

  if (datos.calzonSrc) {
    calzon.src = datos.calzonSrc;
    calzon.className = datos.postura; 
    calzon.style.top = datos.coordenadas.top;
    calzon.style.left = datos.coordenadas.left;
    calzon.classList.remove('oculto');
  } else {
    calzon.classList.add('oculto');
  }

  const btnJugar = document.getElementById('btn-jugar');

  audioCuento.onplaying = null;
  audioCuento.onpause = null;
  audioCuento.onended = null;

  audioCuento.onplaying = function() {
    btnJugar.classList.add('play-bailando');
  };

  audioCuento.onpause = function() {
    btnJugar.classList.remove('play-bailando');
  };
  audioCuento.onended = function() {
    btnJugar.classList.remove('play-bailando');
  };

  audioCuento.src = datos.audio;
  audioCuento.load();
  audioCuento.play()
    .catch(e => {
      btnJugar.classList.remove('play-bailando');
      console.log("Interacción requerida o audio ausente");
    });

  const botonRegresar = document.getElementById('btn-regresar');
  const botonAvanzar = document.getElementById('btn-avanzar');

  // CORRECCIÓN CLAVE: Ahora evalúa correctamente si se puede regresar o no
  botonRegresar.disabled = (paginaActual === 0);
  botonAvanzar.disabled = (paginaActual === paginasCuento.length - 1);
}

function paginaSiguiente() {
  if (paginaActual < paginasCuento.length - 1) {
    if (audioEfecto) audioEfecto.play().catch(e => {});
    paginaActual++;
    cargarPagina();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    if (audioEfecto) audioEfecto.play().catch(e => {});
    paginaActual--;
    cargarPagina();
  }
}

function toggleAudio() {
  if (audioCuento.paused) {
    audioCuento.play();
  } else {
    audioCuento.pause();
  }
}

function regresarAlMenu() {
  audioCuento.pause();
  window.location.href = "../index.html";
}

// ========================================================
// CONTROL DE ARRANCADO (ENCADENADOR VS INDEPENDIENTE)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  
  if (parametros.get('saltarPortada') === 'true') {
    // Caso A: Viene del menú principal -> Salto directo a la página 2
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('visor').classList.remove('oculto');
    paginaActual = 1; 
    cargarPagina();
  } else {
    // Caso B: Entrada independiente -> Muestra portada normal con botón comenzar desactivado inicialmente de reproducción
    // No llamamos a cargarPagina() aquí para evitar que el audio de la portada suene solo sin interactuar
  }
});
