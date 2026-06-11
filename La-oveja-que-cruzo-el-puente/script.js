// CONFIGURACIÓN DE LAS PÁGINAS DEL CUENTO (12 Páginas)
const paginasCuento = [
  {
    imagen: "imagenes/pagina-01.webp",
    audio: "audios/cuento-pag1.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-flotar",
    coordenadas: { top: "25%", left: "25%" }
  },
  {
    imagen: "imagenes/pagina-02.webp",
    audio: "audios/cuento-pag2.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "35%", left: "20%" }
  },
  {
    imagen: "imagenes/pagina-03.webp",
    audio: "audios/cuento-pag3.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-asustado",
    coordenadas: { top: "25%", left: "20%" }
  },
  {
    imagen: "imagenes/pagina-04.webp",
    audio: "audios/cuento-pag4.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "20%", left: "25%" }
  },
  {
    imagen: "imagenes/pagina-05.webp",
    audio: "audios/cuento-pag5.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-flotar",
    coordenadas: { top: "50%", left: "50%" }
  },
  {
    imagen: "imagenes/pagina-06.webp",
    audio: "audios/cuento-pag6.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "50%", left: "35%" }
  },
  {
    imagen: "imagenes/pagina-07.webp",
    audio: "audios/cuento-pag7.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-flotar",
    coordenadas: { top: "20%", left: "15%" }
  },
  {
    imagen: "imagenes/pagina-08.webp",
    audio: "audios/cuento-pag8.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-mareado",
    coordenadas: { top: "30%", left: "45%" }
  },
  {
    imagen: "imagenes/pagina-09.webp",
    audio: "audios/cuento-pag9.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-asustado",
    coordenadas: { top: "40%", left: "15%" }
  },
  {
    imagen: "imagenes/pagina-10.webp",
    audio: "audios/cuento-pag10.mp3",
    calzonSrc: "imagenes/calzon-mareado.webp",
    postura: "postura-mareado",
    coordenadas: { top: "40%", left: "35%" }
  },
  {
    imagen: "imagenes/pagina-11.webp",
    audio: "audios/cuento-pag11.mp3",
    calzonSrc: "imagenes/calzon-normal.webp",
    postura: "postura-flotar",
    coordenadas: { top: "40%", left: "15%" }
  },
  {
    imagen: "imagenes/pagina-12.webp",
    audio: "audios/cuento-pag12.mp3",
    calzonSrc: "imagenes/calzon-flota.webp",
    postura: "postura-mareado",
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

  // Conseguimos el botón de jugar (el de plastilina del centro)
  const btnJugar = document.getElementById('btn-jugar');

  // Limpiamos eventos anteriores para evitar duplicaciones
  audioCuento.onplaying = null;
  audioCuento.onpause = null;
  audioCuento.onended = null;

  // EVENTO 1: Cuando el audio empiece, el botón baila (grande/pequeño)
  audioCuento.onplaying = function() {
    btnJugar.classList.add('play-bailando');
  };

  // EVENTO 2: Si se pausa o termina, el botón se queda quieto
  audioCuento.onpause = function() {
    btnJugar.classList.remove('play-bailando');
  };
  audioCuento.onended = function() {
    btnJugar.classList.remove('play-bailando');
  };

  // Cargar y reproducir audio automáticamente
  audioCuento.src = datos.audio;
  audioCuento.load();
  audioCuento.play()
    .catch(e => {
      btnJugar.classList.remove('play-bailando');
      console.log("Interacción requerida o audio ausente");
    });

  // Habilitamos o deshabilitamos las flechas de navegación de forma segura
  const botonRegresar = document.getElementById('btn-regresar');
  const botonAvanzar = document.getElementById('btn-avanzar');

  botonRegresar.disabled = (paginaActual === 0);
  botonAvanzar.disabled = (paginaActual === paginasCuento.length - 1);
}

// ========================================================
// ¡LAS TRES FUNCIONES RESTAURADAS QUE HACÍAN FALTA!
// ========================================================

function paginaSiguiente() {
  if (paginaActual < paginasCuento.length - 1) {
    if (audioEfecto) audioEfecto.play().catch(e => {}); // Suena el "whoosh"
    paginaActual++;
    cargarPagina();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    if (audioEfecto) audioEfecto.play().catch(e => {}); // Suena el "whoosh"
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
  window.location.href = "../index.html"; // Regresa a la portada de las 4 tarjetas
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