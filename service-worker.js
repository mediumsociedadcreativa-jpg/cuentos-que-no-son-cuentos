const CACHE_NAME = 'cuentos-v12'; // 👈 Forzamos la limpieza completa

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

// INTERCEPTOR SEGURO DE AUDIOS Y MULTIMEDIA
self.addEventListener('fetch', event => {
  const urlObj = new URL(event.request.url);
  const pathname = urlObj.pathname;

  // 1. Tratamiento exclusivo para archivos de Audio (.mp3)
  if (pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        // Buscamos si ya lo tenemos guardado en el almacenamiento local
        const cachedResponse = await cache.match(event.request);
        
        if (cachedResponse) {
          // SI ESTÁ EN CACHÉ: Si el dispositivo pide un rango (pedazo), lo simulamos offline
          if (event.request.headers.has('Range')) {
            return responderRangoOffline(event.request, cachedResponse);
          }
          return cachedResponse;
        }

        // SI NO ESTÁ EN CACHÉ: Lo descargamos completo de internet de forma nativa
        try {
          const networkResponse = await fetch(event.request);
          
          // Si la respuesta es exitosa (200), la guardamos directo
          if (networkResponse.status === 200) {
            await cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }
          
          // Si el navegador exigió un rango inmediatamente (206) desde internet,
          // hacemos una descarga limpia en segundo plano del archivo completo para la próxima vez
          if (networkResponse.status === 206) {
            fetch(event.request.url)
              .then(res => {
                // 👈 CORRECCIÓN: Guardamos usando la URL en texto para asegurar la compatibilidad
                if (res.status === 200) cache.put(event.request.url, res);
              })
              .catch(() => {});
            return networkResponse; // Devolvemos la petición original para que suene de inmediato en línea
          }

          return networkResponse;
        } catch (error) {
          // Si no hay internet y falló todo, intentamos lanzar la petición normal por si acaso
          return fetch(event.request);
        }
      })
    );
    return;
  }

  // 2. Estrategia estándar Cache First para páginas HTML, imágenes y estilos
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/cuentos-que-no-son-cuentos/index.html');
        }
      });
    })
  );
});

// FUNCIÓN MATRIZ: El simulador de rangos HTTP 206 para que los reproductores móviles funcionen offline
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