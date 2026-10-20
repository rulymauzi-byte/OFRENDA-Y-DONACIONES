/* Service worker: permite instalar la app y usarla sin internet.
   Cuando cambies index.html u otros archivos, sube también el número de VERSION. */
const VERSION = 'colab-v5.4.0';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './config.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/logo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

function putCache(req, res) {
  if (res && (res.ok || res.type === 'opaque')) {
    const copy = res.clone();
    caches.open(VERSION).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  // Librerías externas que se guardan para funcionar sin internet (Firebase)
  const cdn = (url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/')) || url.hostname === 'cdnjs.cloudflare.com';
  if (!sameOrigin && !cdn) return; // la sincronización de Firestore va directo a la red

  // Página principal: primero la red (para recibir actualizaciones), si tarda o no hay señal, la copia guardada
  if (req.mode === 'navigate') {
    e.respondWith(new Promise((resolve) => {
      let done = false;
      const fallback = () => caches.match('./index.html').then((r) => { if (!done) { done = true; resolve(r || fetch(req)); } });
      const timer = setTimeout(fallback, 3000);
      fetch(req).then((res) => {
        clearTimeout(timer);
        putCache('./index.html', res.clone());
        if (!done) { done = true; resolve(res); }
      }).catch(() => { clearTimeout(timer); fallback(); });
    }));
    return;
  }

  // Resto: copia guardada al instante y se actualiza en segundo plano
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => putCache(req, res)).catch(() => hit);
      return hit || net;
    })
  );
});
