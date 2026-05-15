const CACHE_NAME = 'cuentos-v1';
const ARCHIVOS = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.jpg',

  // Toby y los fantasmas
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/index.html',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/script.js',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/style.css',

  // La casa mágica y el calzón apestoso
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/index.html',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/script.js',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/style.css',

  // La oveja que cruzó el puente
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/index.html',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/script.js',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/style.css',

  // Ño ño ño y todo cambió
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/index.html',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/script.js',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/style.css',
];

// Instalar y guardar en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
  );
});

// Activar y limpiar cachés viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

// Responder desde caché o red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
