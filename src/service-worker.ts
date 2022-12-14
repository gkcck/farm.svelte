// based on https://github.com/tretapey/svelte-pwa/blob/master/public/service-worker.js

import { build, files, version } from '$service-worker';

const worker: any = self;
const CACHE_NAME = `static-cache-${version}`;

const to_cache = build.concat(files);

worker.addEventListener('install', (event: any) => {
  //console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      //console.log('[ServiceWorker] Pre-caching offline page');
      await cache.addAll(to_cache);
      worker.skipWaiting();
    })
  );
});

worker.addEventListener('activate', (event: any) => {
  //console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk
  event.waitUntil(
    caches.keys().then(async (keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            //console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  worker.clients.claim();
});

self.addEventListener('fetch', (event: any) => {
  //console.log('[ServiceWorker] Fetch', event.request.url);
  if (event.request.mode !== 'navigate') {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return await cache.match('offline.html');
    })
  );
});
