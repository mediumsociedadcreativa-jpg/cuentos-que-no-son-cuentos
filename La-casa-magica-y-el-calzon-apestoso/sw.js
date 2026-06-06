// =========================================
//   La casa mágina y el calzón apestoso — Service Worker
//   Permite usar la app sin internet
// =========================================
const CACHE_NOMBRE = "casa-v1";

const ARCHIVOS = [
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./imagenes/icono-192.webp",
  "./imagenes/icono-512.webp",
  "./imagenes/pagina-01.webp",
  "./imagenes/pagina-02.webp",
  "./imagenes/pagina-03.webp",
  "./imagenes/pagina-04.webp",
  "./imagenes/pagina-05.webp",
  "./imagenes/pagina-06.webp",
  "./imagenes/pagina-07.webp",
  "./imagenes/pagina-08.webp",
  "./imagenes/pagina-09.webp",
  "./imagenes/pagina-10.webp",
  "./imagenes/pagina-11.webp",
  "./imagenes/pagina-12.webp",
  "./imagenes/pagina-13.webp",
  "./imagenes/pagina-14.webp",
  "./imagenes/pagina-15.webp",
  "./imagenes/pagina-16.webp",
  "./imagenes/pagina-17.webp",
  "./imagenes/fondo-control.webp",
  "./imagenes/boton-regresar.webp",
  "./imagenes/boton-jugar.webp",
  "./imagenes/boton-avanzar.webp",
  "./imagenes/boton-casita.webp",
  "./imagenes/boton-comenzar.webp",
  "./imagenes/fantasma-01.webp",
  "./imagenes/fantasma-02.webp",
  "./imagenes/fantasma-03.webp",
  "./audio/pagina-01.mp3",
  "./audio/pagina-02.mp3",
  "./audio/pagina-03.mp3",
  "./audio/pagina-04.mp3",
  "./audio/pagina-05.mp3",
  "./audio/pagina-06.mp3",
  "./audio/pagina-07.mp3",
  "./audio/pagina-08.mp3",
  "./audio/pagina-09.mp3",
  "./audio/pagina-10.mp3",
  "./audio/pagina-11.mp3",
  "./audio/pagina-12.mp3",
  "./audio/pagina-13.mp3",
  "./audio/pagina-14.mp3",
  "./audio/pagina-15.mp3",
  "./audio/pagina-16.mp3",
  "./audio/pagina-17.mp3"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NOMBRE).then(function(cache) {
      return cache.addAll(ARCHIVOS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_NOMBRE;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(respuesta) {
      return respuesta || fetch(event.request);
    })
  );
});