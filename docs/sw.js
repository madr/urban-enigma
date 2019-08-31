const created = 'Sat Aug 31 2019 23:14:27 GMT+0200 (Västeuropa, sommartid)';
const caches = ['/assets\\index.html','/assets\\src.6ebfba02.js','/assets\\src.6ebfba02.css','/urban-enigma/index.html'];
const cacheName = 'undefined-85aefe28';
const offlineUrl = '/urban-enigma/index.html';

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(cacheName).then(function(cache) {
    cache.addAll(caches).then(() => self.skipWaiting());
  }));
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(fetch(event.request.url).catch(function() {
      caches.match(offlineUrl);
    }));
  } else {
    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
  }
});
