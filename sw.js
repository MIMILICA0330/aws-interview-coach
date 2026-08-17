const CACHE_NAME = "aws-interview-coach-static-v7";
const AUDIO_ORIGIN = "https://interview-coach-tts.it09016760153.workers.dev";
const ASSETS = ["./", "./index.html", "./styles.css", "./fixes.css", "./content.js", "./translations.js", "./content-expanded.js", "./tts-config.js", "./app.js", "./audio-manifest.json", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", (event) => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))); });
self.addEventListener("activate", (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin === AUDIO_ORIGIN && url.pathname.startsWith("/audio/")) {
    event.respondWith(caches.open("interview-coach-audio-v5").then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      const response = await fetch(event.request);
      if (response.ok) cache.put(event.request, response.clone());
      return response;
    }));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
