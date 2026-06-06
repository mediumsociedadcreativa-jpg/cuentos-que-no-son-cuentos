const CACHE_NAME = 'cuentos-v1';

const ARCHIVOS_CACHE = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',

  // Imágenes principales
  '/cuentos-que-no-son-cuentos/imagenes/globo-plastilina.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.png',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.png',

  // Audios del menú principal
  '/cuentos-que-no-son-cuentos/audios/globo-pop.mp3',
  '/cuentos-que-no-son-cuentos/audios/bienvenida.mp3',

  // Cuento 1 - Toby y los fantasmas
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/index.html',

  // Cuento 2 - La casa mágica y el calzón apestoso
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/index.html',

  // Cuento 3 - La oveja que cruzó el puente
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/index.html',

  // Cuento 4 - Ño, ño, ño, y todo cambió
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/index.html'
];

// Instalación: guarda todos los archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cuentos: guardando archivos en caché...');
      return cache.addAll(ARCHIVOS_CACHE);
    })
  );
  self.skipWaiting();
});

// Activación: limpia cachés viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: responde desde caché si está disponible, si no va a la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        // Guarda en caché los nuevos recursos que se vayan cargando
        if (response && response.status === 200) {
          const copia = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
        }
        return response;
      }).catch(() => {
        // Si no hay red ni caché, muestra página de inicio como fallback
        return caches.match('/cuentos-que-no-son-cuentos/index.html');
      });
    })
  );
});
