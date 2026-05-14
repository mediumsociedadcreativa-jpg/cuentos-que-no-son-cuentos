// =========================================
//   La oveja que cruzó el puente — Service Worker
//   Permite usar la app sin internet
// =========================================
const CACHE_NOMBRE = "ovi-v1";

const ARCHIVOS = [
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./imagenes/icono-192.jpg",
  "./imagenes/icono-512.jpg",
  "./imagenes/pagina-01.jpg",
  "./imagenes/pagina-02.jpg",
  "./imagenes/pagina-03.jpg",
  "./imagenes/pagina-04.jpg",
  "./imagenes/pagina-05.jpg",
  "./imagenes/pagina-06.jpg",
  "./imagenes/pagina-07.jpg",
  "./imagenes/pagina-08.jpg",
  "./imagenes/pagina-09.jpg",
  "./imagenes/pagina-10.jpg",
  "./imagenes/pagina-11.jpg",
  "./imagenes/pagina-12.jpg",
  "./imagenes/fondo-control.png",
  "./imagenes/boton-regresar.png",
  "./imagenes/boton-jugar.png",
  "./imagenes/boton-avanzar.png",
  "./imagenes/boton-casita.png",
  "./imagenes/boton-comenzar.png",
  "./imagenes/fantasma-01.png",
  "./imagenes/fantasma-02.png",
  "./imagenes/fantasma-03.png",
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
  "./audio/pagina-12.mp3"
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
