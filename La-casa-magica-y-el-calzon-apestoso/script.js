// CONFIGURACIÓN DE LAS PÁGINAS DEL CUENTO (17 Páginas)
const paginasCuento = [
  { imagen: "imagenes/pagina-01.webp", audio: "audios/casa-pag1.mp3" },
  { imagen: "imagenes/pagina-02.webp", audio: "audios/casa-pag2.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "15%", left: "55%" } },
  { imagen: "imagenes/pagina-03.webp", audio: "audios/casa-pag3.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-asustado", coordenadas: { top: "25%", left: "65%" } },
  { imagen: "imagenes/pagina-04.webp", audio: "audios/casa-pag4.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "30%", left: "15%" } },
  { imagen: "imagenes/pagina-05.webp", audio: "audios/casa-pag5.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-flotar", coordenadas: { top: "70%", left: "50%" } },
  { imagen: "imagenes/pagina-06.webp", audio: "audios/casa-pag6.mp3", calzonSrc: "imagenes/calzon-flota.webp", postura: "postura-mareado", coordenadas: { top: "40%", left: "15%" } },
  { imagen: "imagenes/pagina-07.webp", audio: "audios/casa-pag7.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-flotar", coordenadas: { top: "17%", left: "45%" } },
  { imagen: "imagenes/pagina-08.webp", audio: "audios/casa-pag8.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "40%", left: "15%" } },
  { imagen: "imagenes/pagina-09.webp", audio: "audios/casa-pag9.mp3", calzonSrc: "imagenes/calzon-flota.webp", postura: "postura-asustado", coordenadas: { top: "38%", left: "50%" } },
  { imagen: "imagenes/pagina-10.webp", audio: "audios/casa-pag10.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "40%", left: "15%" } },
  { imagen: "imagenes/pagina-11.webp", audio: "audios/casa-pag11.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-flotar", coordenadas: { top: "55%", left: "25%" } },
  { imagen: "imagenes/pagina-12.webp", audio: "audios/casa-pag12.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "30%", left: "75%" } },
  { imagen: "imagenes/pagina-13.webp", audio: "audios/casa-pag13.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-flotar", coordenadas: { top: "60%", left: "45%" } },
  { imagen: "imagenes/pagina-14.webp", audio: "audios/casa-pag14.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "55%", left: "65%" } },
  { imagen: "imagenes/pagina-15.webp", audio: "audios/casa-pag15.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-flotar", coordenadas: { top: "35%", left: "45%" } },
  { imagen: "imagenes/pagina-16.webp", audio: "audios/casa-pag16.mp3", calzonSrc: "imagenes/calzon-mareado.webp", postura: "postura-mareado", coordenadas: { top: "30%", left: "35%" } },
  { imagen: "imagenes/pagina-17.webp", audio: "audios/casa-pag17.mp3", calzonSrc: "imagenes/calzon-normal.webp", postura: "postura-asustado", coordenadas: { top: "20%", left: "65%" } }
];

let paginaActual = 0;
const audioCuento = document.getElementById('audio-cuento');
const audioEfecto = document.getElementById('audio-efecto');
const imgPagina = document.getElementById('imagen-pagina');
const calzon = document.getElementById('calzon-personaje');
const progresoFill = document.getElementById('progreso-fill');
const contador = document.getElementById('contador-pagina');
const btnJugar = document.getElementById('btn-jugar');

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

  // Eventos de audio limpios
  audioCuento.onplaying = () => { btnJugar.classList.add('play-bailando'); };
  audioCuento.onpause = () => { btnJugar.classList.remove('play-bailando'); };
  audioCuento.onended = () => { btnJugar.classList.remove('play-bailando'); };

  // Forzar la recarga limpia del archivo de audio para que el Service Worker lo intercepte correctamente
  audioCuento.src = datos.audio;
  audioCuento.load();
  audioCuento.play().catch(e => {
    btnJugar.classList.remove('play-bailando');
    console.log("Interrupción de audio controlada offline.");
  });

  // Estado de los botones de navegación
  document.getElementById('btn-regresar').disabled = (paginaActual === 0);
  document.getElementById('btn-avanzar').disabled = (paginaActual === paginasCuento.length - 1);
}

function paginaSiguiente() {
  if (paginaActual < paginasCuento.length - 1) {
    if (audioEfecto) audioEfecto.play().catch(() => {});
    paginaActual++;
    cargarPagina();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    if (audioEfecto) audioEfecto.play().catch(() => {});
    paginaActual--;
    cargarPagina();
  }
}

function toggleAudio() {
  if (audioCuento.paused) {
    audioCuento.play().catch(() => {});
  } else {
    audioCuento.pause();
  }
}

function regresarAlMenu() {
  audioCuento.pause();
  window.location.href = "../index.html";
}

// Inicialización unificada del cuento
document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  
  // Si viene del index principal con saltarPortada, va directo a la pág 2 (índice 1)
  if (parametros.get('saltarPortada') === 'true' || sessionStorage.getItem('sesionIniciada') === 'true') {
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('visor').classList.remove('oculto');
    paginaActual = 1; 
    cargarPagina();
  }
});