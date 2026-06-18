const CACHE_NAME = 'cuentos-v15'; // Subimos de versión para forzar actualización completa en pruebas

// Guardamos TODO lo vital para que funcione 100% offline (Estructura + Gráficos + Audios de Entrada)
const ARCHIVOS_ESTATICOS = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-casa.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-oveja.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-no-no-no.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-toby-fantasmas.webp',
  '/cuentos-que-no-son-cuentos/imagenes/radio.webp',
  '/cuentos-que-no-son-cuentos/imagenes/globo-plastilina.webp',
  // Es vital cachear los audios de la interfaz principal aquí para asegurar el Modo Avión
  '/cuentos-que-no-son-cuentos/audios/bienvenida.mp3',
  '/cuentos-que-no-son-cuentos/audios/globo-pop.mp3'
];

// Instalación
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARCHIVOS_ESTATICOS);
    })
  );
  self.skipWaiting();
});

// Activación y limpieza absoluta de cachés antiguos
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

  // Tratamiento exclusivo para archivos de Audio (.mp3)
  if (pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cachedResponse = await cache.match(event.request);
        
        if (cachedResponse) {
          // SI ESTÁ EN CACHÉ: Responder con rango si lo pide (iOS / Mobile Chrome)
          if (event.request.headers.has('Range')) {
            return responderRangoOffline(event.request, cachedResponse);
          }
          return cachedResponse;
        }

        // SI NO ESTÁ EN CACHÉ: Descarga limpia completa
        try {
          // Para evitar fallos con peticiones de rango parcial (206) en la descarga inicial, 
          // solicitamos explícitamente el archivo completo omitiendo las cabeceras de rango.
          const limpioRequest = new Request(event.request.url, { method: 'GET' });
          const networkResponse = await fetch(limpioRequest);
          
          if (networkResponse.status === 200) {
            // Guardamos el buffer completo e intacto en caché para el modo avión
            await cache.put(event.request.url, networkResponse.clone());
            return networkResponse;
          }

          return networkResponse;
        } catch (error) {
          // Modo avión extremo: si falla la red y no se pre-guardó en la URL exacta, intentamos fallback genérico
          return cache.match(event.request.url);
        }
      })
    );
    return;
  }

  // Estrategia estándar Cache First para páginas HTML, imágenes y estilos
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
        // 👈 MEJORA: Si falla la navegación porque no hay internet y el cuento no está en caché
        if (event.request.mode === 'navigate') {
          return caches.match('/cuentos-que-no-son-cuentos/offline.html'); // 👈 Muestra el aviso limpio
        }
      });
    })
  );
});

// SIMULADOR DE RANGOS HTTP 206
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