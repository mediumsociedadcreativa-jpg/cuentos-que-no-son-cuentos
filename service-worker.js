const CACHE_NAME = 'cuentos-v2';

// Archivos esenciales que se guardan al instalar
const ARCHIVOS_ESENCIALES = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.jpg',
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
