const CACHE_NAME = 'cuentos-v7'; // 👈 Al poner v7 obligamos al celular a descargar todo de nuevo

// Rutas relativas unificadas
const ARCHIVOS_ESENCIALES = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-casa.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-oveja.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-no-no-no.webp',
  '/cuentos-que-no-son-cuentos/imagenes/icono-toby-fantasmas.webp',

  // Audios del Menú Principal
  '/cuentos-que-no-son-cuentos/audios/globo-pop.mp3',
  '/cuentos-que-no-son-cuentos/audios/bienvenida.mp3',

  // Audios de los Cuentos y Radios
  '/cuentos-que-no-son-cuentos/audios/toby.mp3',
  '/cuentos-que-no-son-cuentos/audios/cancion-toby.mp3',
  '/cuentos-que-no-son-cuentos/audios/calzon.mp3',
  '/cuentos-que-no-son-cuentos/audios/cancion-calzon.mp3',
  '/cuentos-que-no-son-cuentos/audios/oveja.mp3',
  '/cuentos-que-no-son-cuentos/audios/cancion-oveja.mp3',
  '/cuentos-que-no-son-cuentos/audios/no.mp3',
  '/cuentos-que-no-son-cuentos/audios/cancion-no.mp3',

  // Archivos — Toby y los fantasmas
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/index.html',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/script.js',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/style.css',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-01.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-02.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-03.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-04.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-05.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-06.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-07.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-08.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-09.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-10.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-11.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-12.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-13.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-avanzar.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-casita.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-comenzar.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-jugar.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-regresar.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/calzon-flota.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/calzon-mareado.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/calzon-normal.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/fondo-control.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/icono-512.webp',
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

  // Archivos — La casa mágica y el calzón apestoso
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/index.html',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/script.js',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/style.css',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-01.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-02.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-03.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-04.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-05.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-06.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-07.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-08.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-09.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-10.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-11.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-12.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-13.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-14.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-15.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-16.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-17.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-avanzar.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-casita.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-comenzar.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-jugar.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-regresar.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/calzon-normal.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/calzon-mareado.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/calzon-flota.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/fondo-control.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/icono-512.webp',
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

  // Archivos — La oveja que cruzó el puente
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/index.html',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/script.js',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/style.css',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-01.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-02.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-03.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-04.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-05.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-06.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-07.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-08.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-09.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-10.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-11.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-12.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-avanzar.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-casita.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-comenzar.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-jugar.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-regresar.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/calzon-flota.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/calzon-mareado.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/calzon-normal.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/fondo-control.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/icono-512.webp',
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

  // Archivos — Ño ño ño y todo cambió
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/index.html',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/script.js',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/style.css',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-01.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-02.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-03.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-04.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-05.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-06.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-07.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-08.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-09.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-10.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-11.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-12.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-13.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-14.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-15.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-16.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-avanzar.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-casita.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-comenzar.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-jugar.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-regresar.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/calzon-normal.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/calzon-mareado.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/calzon-flota.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/fondo-control.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/icono-192.webp',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/icono-512.webp',
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
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-16.mp3'
];

// Instalar de forma secuencial y limpia
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of ARCHIVOS_ESENCIALES) {
        try {
          await cache.add(url);
        } catch (e) {
          console.warn('Fallo descarga al instalar:', url);
        }
      }
    })
  );
  self.skipWaiting();
});

// Activar y borrar cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ESCUCHADOR FETCH CONTROLADO CON CAPACIDAD DE RANGOS AUDIO MULTIMEDIA
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Manejo especial solo para audios (.mp3)
  if (url.endsWith('.mp3')) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (!cachedResponse) {
          // Si no está en caché, va a la red normal
          return fetch(event.request);
        }

        // Si el navegador pide un "Range" (un trozo del audio) estando offline
        if (event.request.headers.has('Range')) {
          return responderRangoOffline(event.request, cachedResponse);
        }

        // Si no pide rango, entregamos el archivo de audio completo
        return cachedResponse;
      })
    );
    return;
  }

  // Estrategia estándar para imágenes y páginas
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// FUNCIÓN MATRIZ: El simulador de rangos HTTP 206 para que los reproductores móviles funcionen offline
async function responderRangoOffline(request, cachedResponse) {
  const arrayBuffer = await cachedResponse.arrayBuffer();
  const rangeHeader = request.headers.get('Range');
  
  // Analizar qué bytes exactos quiere el reproductor del celular (Ej: bytes=0-1000)
  const match = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
  if (!match) return cachedResponse;

  const start = parseInt(match[1], 10);
  const end = match[2] ? parseInt(match[2], 10) : arrayBuffer.byteLength - 1;

  // Cortar el pedazo exacto de memoria del archivo binario
  const slicedBuffer = arrayBuffer.slice(start, end + 1);

  // Crear la respuesta HTTP 206 "Partial Content" simulada artificialmente
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