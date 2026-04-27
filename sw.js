const CACHE = 'dme-v4'
const ARQUIVOS = ['./index.html','./encarregado.html','./gestor.html','./style.css','./manifest.json','./icon-192.png','./icon-512.png']
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)).then(()=>self.skipWaiting())) })
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())) })
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))) })
