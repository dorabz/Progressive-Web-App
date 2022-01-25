self.addEventListener('install', function (event) {
  console.log('Service worker is installed...');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/js/pwa.js',
          '/src/css/pwa.css',
          '/src/images/snorlax.jpg',
          'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
      })
  );
});   //caching method - precache index page assets

self.addEventListener('activate', function () {
  console.log('Service worker is activated...');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});