const CACHE_NAME = 'cuentos-v3';

// Archivos esenciales que se guardan al instalar
const ARCHIVOS_ESENCIALES = [
  '/cuentos-que-no-son-cuentos/',
  '/cuentos-que-no-son-cuentos/index.html',
  '/cuentos-que-no-son-cuentos/manifest.json',
  '/cuentos-que-no-son-cuentos/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/imagenes/icono-512.jpg',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-casa.png',
  '/cuentos-que-no-son-cuentos/imagenes/icono-la-oveja.png',
  '/cuentos-que-no-son-cuentos/imagenes/icono-no-no-no.png',
  '/cuentos-que-no-son-cuentos/imagenes/icono-toby-fantasmas.png',

  // Archivos — Toby y los fantasmas
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/index.html',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/script.js',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/style.css',

  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-01.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-02.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-03.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-04.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-05.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-06.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-07.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-08.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-09.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-10.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-11.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-12.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/pagina-13.jpg',

  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-avanzar.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-casita.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-comenzar.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-jugar.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/boton-regresar.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/fantasma-01.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/fantasma-02.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/fantasma-03.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/fondo-control.png',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/imagenes/icono-512.jpg',

  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-01.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-02.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-03.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-04.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-05.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-06.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-07.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-08.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-09.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-10.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-11.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-12.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/Toby-y-los-fantasmas/audio/pagina-13.mp3',

  // Archivos — La casa mágica y el calzón apestoso
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/index.html',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/script.js',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/style.css',

  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-01.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-02.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-03.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-04.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-05.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-06.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-07.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-08.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-09.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-10.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-11.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-12.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-13.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-14.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-15.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-16.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/pagina-17.jpg',

  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-avanzar.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-casita.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-comenzar.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-jugar.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/boton-regresar.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/fantasma-01.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/fantasma-02.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/fantasma-03.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/fondo-control.png',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/imagenes/icono-512.jpg',

  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-01.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-02.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-03.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-04.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-05.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-06.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-07.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-08.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-09.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-10.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-11.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-12.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-13.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-14.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-15.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-16.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-casa-magica-y-el-calzon-apestoso/audio/pagina-17.mp3',

  // Archivos — La oveja que cruzó el puente
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/index.html',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/script.js',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/style.css',

  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-01.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-02.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-03.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-04.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-05.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-06.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-07.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-08.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-09.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-10.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-11.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/pagina-12.jpg',

  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-avanzar.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-casita.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-comenzar.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-jugar.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/boton-regresar.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/fantasma-01.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/fantasma-02.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/fantasma-03.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/fondo-control.png',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/imagenes/icono-512.jpg',

  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-01.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-02.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-03.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-04.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-05.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-06.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-07.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-08.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-09.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-10.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-11.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/La-oveja-que-cruzo-el-puente/audio/pagina-12.mp3',

  // Archivos — Ño ño ño y todo cambió
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/index.html',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/script.js',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/style.css',

  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-01.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-02.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-03.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-04.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-05.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-06.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-07.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-08.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-09.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-10.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-11.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-12.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-13.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-14.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-15.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/pagina-16.jpg',

  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-avanzar.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-casita.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-comenzar.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-jugar.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/boton-regresar.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/fantasma-01.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/fantasma-02.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/fantasma-03.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/fondo-control.png',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/icono-192.jpg',
  '/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/imagenes/icono-512.jpg',

  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-01.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-02.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-03.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-04.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-05.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-06.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-07.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-08.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-09.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-10.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-11.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-12.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-13.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-14.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-15.mp3',
  'https://mediumsociedadcreativa-jpg.github.io/cuentos-que-no-son-cuentos/No-no-no-y-todo-cambio/audio/pagina-16.mp3',
];

// Instalar: guarda archivos esenciales

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // Descargar audios forzando descarga completa
      const audioArchivos = ARCHIVOS_ESENCIALES.filter(url => url.endsWith('.mp3'));
      const otrosArchivos = ARCHIVOS_ESENCIALES.filter(url => !url.endsWith('.mp3'));

      // Otros archivos normal
      await Promise.allSettled(
        otrosArchivos.map(url => cache.add(url).catch(e => console.warn('Falló:', url)))
      );

      // Audios con descarga forzada completa
      await Promise.allSettled(
        audioArchivos.map(url =>
          fetch(new Request(url, { headers: { Range: 'bytes=0-' } }))
            .then(response => {
              if (response && (response.status === 200 || response.status === 206)) {
                return cache.put(url, response);
              }
            })
            .catch(e => console.warn('Audio falló:', url))
        )
      );
    })
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
  const url = event.request.url;

  if (url.endsWith('.mp3')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(new Request(url, { headers: { Range: 'bytes=0-' } }))
          .then(response => {
            if (response && (response.status === 200 || response.status === 206)) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            }
            return response;
          });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});