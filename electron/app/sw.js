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

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/js/checkerboard.js",
    "revision": "1f8b2fd27c714201ad1fdd70d4fce8a1"
  },
  {
    "url": "assets/js/scroll-aw.js",
    "revision": "8c020955ab6e6331bde222ae50cff2ba"
  },
  {
    "url": "build/app.css",
    "revision": "d38a5842c41956d74ec8669f2d5f1a64"
  },
  {
    "url": "build/app.js",
    "revision": "6849e23f638bb97e4251ab73a0ac9157"
  },
  {
    "url": "build/app/0m8rmycz.entry.js",
    "revision": "d26f2b9b271992371584011d735f80ca"
  },
  {
    "url": "build/app/0m8rmycz.sc.entry.js",
    "revision": "6a2611e74567dbb63fb045ca9b849d67"
  },
  {
    "url": "build/app/475tvclq.entry.js",
    "revision": "e3be6dbdc2ea2c00fb2f624b233a5f9a"
  },
  {
    "url": "build/app/475tvclq.sc.entry.js",
    "revision": "e3be6dbdc2ea2c00fb2f624b233a5f9a"
  },
  {
    "url": "build/app/6ya1qaus.entry.js",
    "revision": "eb26b541a51279554d486d232055f3dc"
  },
  {
    "url": "build/app/6ya1qaus.sc.entry.js",
    "revision": "f2e233437d479f1d6537f5786e002fe0"
  },
  {
    "url": "build/app/7icfgy7q.entry.js",
    "revision": "ec8085198ed00a7a652841b25e99ef33"
  },
  {
    "url": "build/app/7icfgy7q.sc.entry.js",
    "revision": "667c8f9998719f820a5ecd6d158a8537"
  },
  {
    "url": "build/app/8pfoclcz.entry.js",
    "revision": "f0f14e0bf942ff3ba891e0e1a461ff7d"
  },
  {
    "url": "build/app/8pfoclcz.sc.entry.js",
    "revision": "d9ddcd12221693ddfcd8215ece0078bf"
  },
  {
    "url": "build/app/app.eyxg6nhk.js",
    "revision": "118c46e8d1e4f005c2a8dc003bb134c6"
  },
  {
    "url": "build/app/app.frm6tzwf.js",
    "revision": "1519bab5959fa8b0900692a6afc6a0ea"
  },
  {
    "url": "build/app/bntymjdc.entry.js",
    "revision": "6e7b5832375cd1ea48e49e5bfffa2d28"
  },
  {
    "url": "build/app/bntymjdc.sc.entry.js",
    "revision": "92378ed0a4a2eca5c68d34388c371d52"
  },
  {
    "url": "build/app/bw6zyrdi.entry.js",
    "revision": "056eb36110c881c8230b486ba13c710e"
  },
  {
    "url": "build/app/bw6zyrdi.sc.entry.js",
    "revision": "88ac9d7cf8a73910f141132a6e043482"
  },
  {
    "url": "build/app/chunk-03236d39.es5.js",
    "revision": "5596bd86289415e180ff43498b74da62"
  },
  {
    "url": "build/app/chunk-14141f33.js",
    "revision": "2db1c55f851ce6f8e9c1cff4382ec650"
  },
  {
    "url": "build/app/chunk-1ce9020c.es5.js",
    "revision": "5d3ccc91d1e48478199d45769ca074a6"
  },
  {
    "url": "build/app/chunk-2a112823.js",
    "revision": "cfe4e24bf754600c058c56c7c1637fe1"
  },
  {
    "url": "build/app/chunk-37baa648.es5.js",
    "revision": "f5746aa86754a7265c6ff2b01dbeaf20"
  },
  {
    "url": "build/app/chunk-3b830363.js",
    "revision": "ed6f07a30b5cabfbd7340eb18c38a564"
  },
  {
    "url": "build/app/chunk-4725fc51.js",
    "revision": "bddacaa49de0e05745e379d6d5eafac2"
  },
  {
    "url": "build/app/chunk-4af9a3a1.js",
    "revision": "083fa6d13e91b88439747ea268f7078e"
  },
  {
    "url": "build/app/chunk-4f24dff4.js",
    "revision": "f7124208aa7b21e6fdee929b5e223197"
  },
  {
    "url": "build/app/chunk-54ca8d01.es5.js",
    "revision": "88878c35838de78d89cdd8eb9353b137"
  },
  {
    "url": "build/app/chunk-58ce983f.es5.js",
    "revision": "ded8443256b4a988c1eb304a2f2fff20"
  },
  {
    "url": "build/app/chunk-5a4be5b7.es5.js",
    "revision": "9d8ec1eef8cc5d1beec133ea141226b0"
  },
  {
    "url": "build/app/chunk-62036b20.js",
    "revision": "884276749bfe5ef6058c8121b4ff55ad"
  },
  {
    "url": "build/app/chunk-746f049e.js",
    "revision": "1daa9cf7ae74bef253bc9599244ccd19"
  },
  {
    "url": "build/app/chunk-75ece731.js",
    "revision": "2f61ddb806604ad9e84bb86ea918d99d"
  },
  {
    "url": "build/app/chunk-7c632336.js",
    "revision": "165a94a7c63e226b0ff0912679e304f9"
  },
  {
    "url": "build/app/chunk-836d2986.es5.js",
    "revision": "fc11754fcf8e795540523e3a7d4418de"
  },
  {
    "url": "build/app/chunk-8c887d58.js",
    "revision": "8006753491faea23b2823c486d76ece7"
  },
  {
    "url": "build/app/chunk-95429572.es5.js",
    "revision": "8d38621b486edab6c2098bbf30d03a1b"
  },
  {
    "url": "build/app/chunk-99353f3d.js",
    "revision": "9ae43e40d68896da2bde097694121ba3"
  },
  {
    "url": "build/app/chunk-9a5c0d8f.es5.js",
    "revision": "bf4a1348f0b1d1c8be20b7b30e28adcb"
  },
  {
    "url": "build/app/chunk-a1b3902f.es5.js",
    "revision": "85bfb08872d2b0a43850bf30e2165927"
  },
  {
    "url": "build/app/chunk-a5be4357.es5.js",
    "revision": "4e2166170e116d40d098bd8b3796ea98"
  },
  {
    "url": "build/app/chunk-a99bd936.es5.js",
    "revision": "b936d8d7ac4a6c434e55478860a839e9"
  },
  {
    "url": "build/app/chunk-b43431d3.js",
    "revision": "994c4966bc9162fd4d7477028666883b"
  },
  {
    "url": "build/app/chunk-b4c8d6e2.js",
    "revision": "0e17d208ab0e15f4c3226b8b9844e11d"
  },
  {
    "url": "build/app/chunk-be8d65e3.es5.js",
    "revision": "122d29e04d40e45f7673caa086595ef6"
  },
  {
    "url": "build/app/chunk-bf9db9f1.es5.js",
    "revision": "ebb78c6d751667f854117211fceba09e"
  },
  {
    "url": "build/app/chunk-c1fa1662.es5.js",
    "revision": "986616bc501fa5ba0f810d864d76ab5a"
  },
  {
    "url": "build/app/chunk-c2e7b2b6.es5.js",
    "revision": "278bc6437cbeec9f7b8f928659b7a4eb"
  },
  {
    "url": "build/app/chunk-ca529fbc.js",
    "revision": "79865f7e8671ac0d5624daa666d319a0"
  },
  {
    "url": "build/app/chunk-d737f83f.js",
    "revision": "7be80df58bc432bcf0b81d163585b0ee"
  },
  {
    "url": "build/app/chunk-d93e0932.es5.js",
    "revision": "b85d4c3713f235cfe60de1f991123bf7"
  },
  {
    "url": "build/app/chunk-dc3578ea.es5.js",
    "revision": "02710e296d99aa58ccc114d2cdc7e4d4"
  },
  {
    "url": "build/app/chunk-dc9f5104.es5.js",
    "revision": "c77a234be074cfc9f4b08f7f5a56aea3"
  },
  {
    "url": "build/app/chunk-e34b3d2d.js",
    "revision": "fe7a3bca3b0952fe786f439e55bede34"
  },
  {
    "url": "build/app/chunk-e875fb27.es5.js",
    "revision": "9db68cde46e3927e75a2e9c21bb79e77"
  },
  {
    "url": "build/app/chunk-e89efc0a.es5.js",
    "revision": "515575f3340526ad67fbc2c8a5d6b109"
  },
  {
    "url": "build/app/chunk-f2d9e763.js",
    "revision": "715cd90aed03e8e67e5ec142f0112971"
  },
  {
    "url": "build/app/chunk-f5118fa0.js",
    "revision": "46be696ed90a2a09c725c4672a359974"
  },
  {
    "url": "build/app/chunk-f56eaea8.js",
    "revision": "b812e86602f66dba2564596611271846"
  },
  {
    "url": "build/app/chunk-f9db771e.js",
    "revision": "5e5d8398b5496ab9c35572423678bc14"
  },
  {
    "url": "build/app/ckrqduix.entry.js",
    "revision": "08a45076e231d609af4845b247467595"
  },
  {
    "url": "build/app/ckrqduix.sc.entry.js",
    "revision": "08a45076e231d609af4845b247467595"
  },
  {
    "url": "build/app/ft0hdn2v.entry.js",
    "revision": "16dd0774dd95b7b93b0c206bc9084f12"
  },
  {
    "url": "build/app/ft0hdn2v.sc.entry.js",
    "revision": "3cfcbfb2e30e98956ec6c3984a33c164"
  },
  {
    "url": "build/app/huxjhsfw.entry.js",
    "revision": "86ec491d27ffc239432aae01f856e813"
  },
  {
    "url": "build/app/huxjhsfw.sc.entry.js",
    "revision": "ef3bacb27f10aab84ab22f5b8c7bd8d4"
  },
  {
    "url": "build/app/khoqh8ad.entry.js",
    "revision": "2a1fe8407f1a767cef06a4efaee503ce"
  },
  {
    "url": "build/app/khoqh8ad.sc.entry.js",
    "revision": "0346724bb0d7f1e757dec1e24e565de4"
  },
  {
    "url": "build/app/l3elbd0z.entry.js",
    "revision": "97778b6ddd33978b37a9c47a5d48be93"
  },
  {
    "url": "build/app/l3elbd0z.sc.entry.js",
    "revision": "b23e142642245f4648ce1ae5b79838d8"
  },
  {
    "url": "build/app/l7gz7eda.entry.js",
    "revision": "97b819ec47400cb48d683c25fc5811c7"
  },
  {
    "url": "build/app/l7gz7eda.sc.entry.js",
    "revision": "1405d425d94c4777c628ccf878df6454"
  },
  {
    "url": "build/app/ncuc6qj9.entry.js",
    "revision": "9c2b82eaafa3f63ec515fbe465bf9adb"
  },
  {
    "url": "build/app/ncuc6qj9.sc.entry.js",
    "revision": "eef81ea2e930ea45e2aff7f9ae20ff4b"
  },
  {
    "url": "build/app/nyg5fe5e.entry.js",
    "revision": "3588397c4e443f34ca53f7788e5b757b"
  },
  {
    "url": "build/app/nyg5fe5e.sc.entry.js",
    "revision": "3588397c4e443f34ca53f7788e5b757b"
  },
  {
    "url": "build/app/ojqsfgys.entry.js",
    "revision": "3a342c14662cbfef61c3bd809d4afee0"
  },
  {
    "url": "build/app/ojqsfgys.sc.entry.js",
    "revision": "6673713674e75bb023ee39dab85214b0"
  },
  {
    "url": "build/app/pcex6xjm.entry.js",
    "revision": "3dc7b1eb18cc05af5b9f19a2c392f78e"
  },
  {
    "url": "build/app/pcex6xjm.sc.entry.js",
    "revision": "ad5f83b8b88d35e1327f8e402ad06c41"
  },
  {
    "url": "build/app/r1812jvk.entry.js",
    "revision": "af5f35da3bca8cdb3f6558dbddfc3327"
  },
  {
    "url": "build/app/r1812jvk.sc.entry.js",
    "revision": "49fa26be7499c40c649f0151c683945f"
  },
  {
    "url": "build/app/svg/index.esm.js",
    "revision": "2bdea9e6190aa6a40e24eb01a1e4fb97"
  },
  {
    "url": "build/app/svg/index.js",
    "revision": "35b1701e9c9c1dacb8be33a8bace509b"
  },
  {
    "url": "build/app/swiper/swiper.bundle.js",
    "revision": "23e255b27033df816c6587dd8ecfd1cd"
  },
  {
    "url": "build/app/swiper/swiper.js",
    "revision": "c367d2eccf6c79b874c8df5b7fd0721d"
  },
  {
    "url": "build/app/x0yzxjsr.entry.js",
    "revision": "c746335e349122e7275590eb6f6804e4"
  },
  {
    "url": "build/app/x0yzxjsr.sc.entry.js",
    "revision": "996b2bdff832819f47fd6124814975a4"
  },
  {
    "url": "build/app/xwzyllro.entry.js",
    "revision": "f97c1960b2eba131568098e3f072d556"
  },
  {
    "url": "build/app/xwzyllro.sc.entry.js",
    "revision": "fbb6795a213d2181c3600b16fbe38242"
  },
  {
    "url": "build/app/z9nt6ntd.entry.js",
    "revision": "67d9d3ea7b438e26ebdcac01bfb377fb"
  },
  {
    "url": "build/app/z9nt6ntd.sc.entry.js",
    "revision": "e7f431830da365ef8ff49f2f6591a38e"
  },
  {
    "url": "index.html",
    "revision": "4dd43ba6a92d4bb2f4a138976285c9a9"
  },
  {
    "url": "manifest.json",
    "revision": "47a98c2c42474640c4056b11b0c3a7dd"
  }
]);
