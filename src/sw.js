importScripts('workbox-v3.4.1/workbox-sw.js');

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.routing.registerRoute(
  new RegExp('\\.svg'),
  workbox.strategies.cacheFirst()
);

self.workbox.routing.registerRoute(
  new RegExp('\\.png'),
  workbox.strategies.staleWhileRevalidate()
);

self.workbox.routing.registerRoute(
  /^https:\/\/api\.soundcloud\.com/,
  workbox.strategies.staleWhileRevalidate()
);

self.workbox.precaching.precacheAndRoute([]);
