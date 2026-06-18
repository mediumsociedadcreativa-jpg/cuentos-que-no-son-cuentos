const CACHE_NAME = 'cuentos-v11'; // 👈 Incrementamos a v9 para forzar la limpieza completa

// Guardamos al inicio solo lo esencial y ligero para asegurar que la app se instale con éxito
const ARCHIVOS_ESTATICOS = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-casa.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-oveja.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-no-no-no.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-toby-fantasmas.webp'
];

// Instalación limpia de la estructura base de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARCHIVOS_ESTATICOS);
    })
  );
  self.skipWaiting();
});

// Activación y limpieza absoluta de basura previa
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// INTERCEPTOR INTELIGENTE: Guarda los audios automáticamente conforme se escuchan
self.addEventListener('fetch', event => {
  const urlObj = new URL(event.request.url);
  const pathname = urlObj.pathname;

  // Estrategia especial para archivos de Audio (.mp3)
  if (pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        // Buscamos si ya existe en la memoria local
        const cachedResponse = await cache.match(event.request);
        
        if (cachedResponse) {
          // Si estamos offline y el reproductor pide un pedazo (Range), lo procesamos
          if (event.request.headers.has('Range')) {
            return responderRangoOffline(event.request, cachedResponse);
          }
          return cachedResponse;
        }

        // Si no está en caché, lo descargamos de internet de forma segura
        try {
          // Para archivos multimedia, hacemos un fetch limpio sin credenciales cruzadas si es necesario
          const networkResponse = await fetch(event.request);
          
          // Clonamos y guardamos en caché únicamente si la descarga fue exitosa (200 o 206 parcial)
          if (networkResponse.status === 200 || networkResponse.status === 206) {
            await cache.put(event.request, networkResponse.clone());
          }
          
          return networkResponse;
        } catch (error) {
          console.error('Error de red al intentar descargar audio:', error);
          // Si falla la red y no hay caché, el navegador manejará el error
        }
      })
    );
    return;
  }

  // Estrategia Cache First con caída a red para páginas HTML e imágenes comunes
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          // Guardamos dinámicamente cualquier página interna o imagen que falte
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      }).catch(() => {
        // Fallback en caso de desconexión absoluta para archivos no cacheados
        if (event.request.mode === 'navigate') {
          return caches.match('/cuentos-que-no-son-cuentos/index.html');
        }
      });
    })
  );
});

// FUNCIÓN MATRIZ: Simulador artificial de contenidos parciales para reproductores de celular
async function responderRangoOffline(request, cachedResponse) {
  const arrayBuffer = await cachedResponse.arrayBuffer();
  const rangeHeader = request.headers.get('Range');
  
  const match = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
  if (!match) return cachedResponse;

  const start = parseInt(match[1], 10);
  const end = match[2] ? parseInt(match[2], 10) : arrayBuffer.byteLength - 1;

  const slicedBuffer = arrayBuffer.slice(start, end + 1);

  return new Response(slicedBuffer, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/mp3',
      'Content-Range': `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
      'Content-Length': slicedBuffer.byteLength,
      'Accept-Ranges': 'bytes'
    }
  });
}