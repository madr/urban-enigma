const version = "V0.01";
const staticCacheName = version + "staticfiles";
addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName).then(staticCache => {
      return staticCache.addAll([
        "/path/to/stylesheet.css",
        "/path/to/javascript.js",
        "/index.html"
      ]);
    })
  );
});
