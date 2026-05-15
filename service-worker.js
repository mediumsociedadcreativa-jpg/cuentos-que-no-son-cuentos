const CACHE_NAME = 'cuentos-v3';

// Archivos esenciales que se guardan al instalar
const ARCHIVOS_ESENCIALES = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.png',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.png',

  // Audio — Toby y los fantasmas
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-01.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-02.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-03.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-04.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-05.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-06.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-07.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-08.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-09.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-10.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-11.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-12.mp3',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-13.mp3',

  // Audio — La casa mágica y el calzón apestoso
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-01.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-02.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-03.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-04.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-05.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-06.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-07.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-08.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-09.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-10.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-11.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-12.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-13.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-14.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-15.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-16.mp3',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-17.mp3',

  // Audio — La oveja que cruzó el puente
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-01.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-02.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-03.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-04.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-05.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-06.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-07.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-08.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-09.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-10.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-11.mp3',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-12.mp3',

  // Audio — Ño ño ño y todo cambió
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-01.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-02.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-03.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-04.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-05.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-06.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-07.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-08.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-09.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-10.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-11.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-12.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-13.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-14.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-15.mp3',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-16.mp3',
];

// Instalar: guarda archivos esenciales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS_ESENCIALES))

  );
  self.skipWaiting();
});

// Activar: limpia cachés viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: red primero, si falla usa caché
// Todo lo que se visita se guarda automáticamente
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta es válida la guardamos en caché
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Sin internet, usa lo que está en caché
        return caches.match(event.request);
      })
  );
});
