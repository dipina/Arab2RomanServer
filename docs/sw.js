var cacheName = 'Arab2RomanConverter-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/my.css',
  '/css/jquery.mobile-1.1.1.min.css',
  '/js/jquery.min.js',
  '/js/jquery.mobile-1.1.1.min.js',
  '/js/my.js',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
