// =========================================
//   MI CUENTO — Audio por página
//   Fantasmita decorativo animado
// =========================================

const paginas = [
  { imagen: "imagenes/pagina-01.jpg", audio: "audio/pagina-01.mp3" },
  { imagen: "imagenes/pagina-02.jpg", audio: "audio/pagina-02.mp3" },
  { imagen: "imagenes/pagina-03.jpg", audio: "audio/pagina-03.mp3" },
  { imagen: "imagenes/pagina-04.jpg", audio: "audio/pagina-04.mp3" },
  { imagen: "imagenes/pagina-05.jpg", audio: "audio/pagina-05.mp3" },
  { imagen: "imagenes/pagina-06.jpg", audio: "audio/pagina-06.mp3" },
  { imagen: "imagenes/pagina-07.jpg", audio: "audio/pagina-07.mp3" },
  { imagen: "imagenes/pagina-08.jpg", audio: "audio/pagina-08.mp3" },
  { imagen: "imagenes/pagina-09.jpg", audio: "audio/pagina-09.mp3" },
  { imagen: "imagenes/pagina-10.jpg", audio: "audio/pagina-10.mp3" },
  { imagen: "imagenes/pagina-11.jpg", audio: "audio/pagina-11.mp3" },
  { imagen: "imagenes/pagina-12.jpg", audio: "audio/pagina-12.mp3" },
  { imagen: "imagenes/pagina-13.jpg", audio: "audio/pagina-13.mp3" }
];

// Imágenes del fantasmita
const fantasmas = [
  "imagenes/fantasma-01.png",
  "imagenes/fantasma-02.png",
  "imagenes/fantasma-03.png"
];

// ------------------------------------------
// ESTADO
// ------------------------------------------
let paginaActual    = 0;
const totalPaginas  = paginas.length;
let timerFantasma   = null;

// Referencias HTML
const audio        = document.getElementById("audio-cuento");
const imgPagina    = document.getElementById("imagen-pagina");
const contadorPag  = document.getElementById("contador-pagina");
const progresoFill = document.getElementById("progreso-fill");
const btnRegresar  = document.getElementById("btn-regresar");
const btnAvanzar   = document.getElementById("btn-avanzar");
const imgJugar     = document.getElementById("img-jugar");
const fantasmita   = document.getElementById("fantasmita");

// ------------------------------------------
// INICIO
// ------------------------------------------
function comenzar() {
  document.getElementById("pantalla-inicio").classList.add("oculto");
  document.getElementById("visor").classList.remove("oculto");
  mostrarPagina(0);
  iniciarFantasmita();
}

// ------------------------------------------
// MOSTRAR PÁGINA
// ------------------------------------------
function mostrarPagina(indice) {
  paginaActual = indice;

  // Detener audio anterior
  audio.pause();
  audio.currentTime = 0;
  imgJugar.style.opacity = "1";

  // Cambiar imagen con transición suave
  imgPagina.style.opacity = "0";
  setTimeout(function () {
    imgPagina.src = paginas[indice].imagen;
    imgPagina.style.opacity = "1";
  }, 150);

  // Cargar y reproducir audio de esta página
  audio.src = paginas[indice].audio;
  audio.load();
  audio.play().then(function () {
    imgJugar.style.opacity = "0.75";
  }).catch(function () {
    imgJugar.style.opacity = "1";
  });

  // Progreso
  const pct = ((indice + 1) / totalPaginas) * 100;
  progresoFill.style.width = pct + "%";
  contadorPag.textContent  = (indice + 1) + " / " + totalPaginas;

  // Botones
  btnRegresar.disabled = indice === 0;
  btnAvanzar.disabled  = false;
}

// ------------------------------------------
// NAVEGACIÓN
// ------------------------------------------
function paginaSiguiente() {
  if (paginaActual < totalPaginas - 1) {
    mostrarPagina(paginaActual + 1);
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    mostrarPagina(paginaActual - 1);
  }
}

function reiniciar() {
  audio.pause();
  audio.currentTime = 0;
  imgJugar.style.opacity = "1";
  detenerFantasmita();
  document.getElementById("visor").classList.add("oculto");
  document.getElementById("pantalla-inicio").classList.remove("oculto");
  window.location.href = "../index.html"; 
}

// ------------------------------------------
// BOTÓN PLAY / PAUSA
// ------------------------------------------
function toggleAudio() {
  if (audio.paused) {
    audio.play();
    imgJugar.style.opacity = "0.75";
  } else {
    audio.pause();
    imgJugar.style.opacity = "1";
  }
}

audio.addEventListener("ended", function () {
  imgJugar.style.opacity = "1";
});

// ------------------------------------------
// FANTASMITA
// Aparece en posición aleatoria cada 8-14 seg
// Visible 3 segundos, luego desaparece
// ------------------------------------------
function iniciarFantasmita() {
  programarAparicion();
}

function detenerFantasmita() {
  if (timerFantasma) {
    clearTimeout(timerFantasma);
    timerFantasma = null;
  }
  fantasmita.classList.remove("visible");
  fantasmita.style.opacity = "0";
}

function programarAparicion() {
  // Espera entre 8 y 14 segundos antes de aparecer
  const espera = Math.random() * 6000 + 8000;

  timerFantasma = setTimeout(function () {
    mostrarFantasmita();
  }, espera);
}

function mostrarFantasmita() {
  // Elegir postura aleatoria
  const indiceFantasma = Math.floor(Math.random() * fantasmas.length);
  fantasmita.src = fantasmas[indiceFantasma];

  // Elegir posición aleatoria dentro del área de ilustración
  const contenido = document.getElementById("contenido-pagina");
  const ancho     = contenido.offsetWidth;
  const alto      = contenido.offsetHeight;

  // Margen para que no salga cortado
  const margen = 110;
  const x = Math.random() * (ancho - margen * 2) + margen - 100;
  const y = Math.random() * (alto  - margen * 2) + margen - 100;

  fantasmita.style.left = x + "px";
  fantasmita.style.top  = y + "px";

  // Aparecer
  fantasmita.classList.add("visible");

  // Desaparecer después de 3 segundos
  setTimeout(function () {
    fantasmita.classList.remove("visible");

    // Programar la siguiente aparición
    setTimeout(function () {
      programarAparicion();
    }, 800);

  }, 3000);
}

// ------------------------------------------
// TRANSICIÓN SUAVE
// ------------------------------------------
imgPagina.style.transition = "opacity 0.15s ease";

// ------------------------------------------
// TECLADO (para adultos)
// ------------------------------------------
document.addEventListener("keydown", function (e) {
  if (document.getElementById("visor").classList.contains("oculto")) return;
  if (e.key === "ArrowRight") paginaSiguiente();
  if (e.key === "ArrowLeft")  paginaAnterior();
  if (e.key === " ")          toggleAudio();
});
