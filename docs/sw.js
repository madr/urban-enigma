const created = 'Sat Aug 31 2019 17:55:34 GMT+0200 (Västeuropa, sommartid)';
const caches = ['/assets\\index.html','/assets\\icon.bac3c665.svg','/assets\\src.6ebfba02.js','/assets\\src.6ebfba02.css','/index.html'];
const cacheName = 'undefined-d04b3891';
const offlineUrl = '/index.html';

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
