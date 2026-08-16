const CACHE_NAME = "aws-interview-coach-v17";
const ASSETS = ["./", "./index.html", "./styles.css", "./fixes.css", "./content.js", "./translations.js", "./content-expanded.js", "./app.js", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", (event) => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))); });
self.addEventListener("activate", (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (event) => event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request))));
