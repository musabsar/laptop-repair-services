const CACHE = 'laptop-v1';
const FILES_TO_CACHE = [
  '/laptop-repair/',
  '/laptop-repair/index.html',
  '/laptop-repair/software.html',
  '/laptop-repair/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES_TO_CACHE)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
