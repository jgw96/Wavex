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
    "revision": "cec2a61d192c779ad83b89a064f264be"
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
    "url": "build/app/8o04m1gw.entry.js",
    "revision": "f28d389b51b08a637244f79648c2f7c0"
  },
  {
    "url": "build/app/8o04m1gw.sc.entry.js",
    "revision": "1f1a23fd84824cc93d7b49f80979e1c3"
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
    "url": "build/app/app.dd5uf0ge.js",
    "revision": "0c3e6e1741845e0f31710b4f95c2d94f"
  },
  {
    "url": "build/app/app.urlksxig.js",
    "revision": "5112e4b3fc6283946fb74c3d73fdbb8c"
  },
  {
    "url": "build/app/b1qankbs.entry.js",
    "revision": "07541a9ca6ec2d0ac6ce1cab0a8c8498"
  },
  {
    "url": "build/app/b1qankbs.sc.entry.js",
    "revision": "3c6e586a2efd4fbb34e9fa86938511b0"
  },
  {
    "url": "build/app/bhgroo3p.entry.js",
    "revision": "6c7811a0ede9be061925ca91242c4dc2"
  },
  {
    "url": "build/app/bhgroo3p.sc.entry.js",
    "revision": "2d0b5b46a59305a209cbfd32db7993b1"
  },
  {
    "url": "build/app/chunk-03236d39.es5.js",
    "revision": "5596bd86289415e180ff43498b74da62"
  },
  {
    "url": "build/app/chunk-14141f33.js",
    "revision": "13a3f15fa06d21d5bc1a42db98b5af2f"
  },
  {
    "url": "build/app/chunk-175e5cf7.es5.js",
    "revision": "62cb5d0f3ab3508447ee84b5861db1b1"
  },
  {
    "url": "build/app/chunk-2a112823.js",
    "revision": "cfe4e24bf754600c058c56c7c1637fe1"
  },
  {
    "url": "build/app/chunk-37baa648.es5.js",
    "revision": "27b28ac6787be73e84766e7e3cf99ed0"
  },
  {
    "url": "build/app/chunk-3b830363.js",
    "revision": "158f6dfa2a0f77eed4045d1ed0efcd9d"
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
    "url": "build/app/chunk-4ed23919.es5.js",
    "revision": "b4f2f32433849e5c806cb853eecea4b6"
  },
  {
    "url": "build/app/chunk-4f24dff4.js",
    "revision": "f8bdc5bc23ce8ef5fd497bcee2d8373f"
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
    "url": "build/app/chunk-62036b20.js",
    "revision": "884276749bfe5ef6058c8121b4ff55ad"
  },
  {
    "url": "build/app/chunk-6acd8bed.js",
    "revision": "66c1225b7182d729045ac8505c31b035"
  },
  {
    "url": "build/app/chunk-746f049e.js",
    "revision": "44e6d087e8bfbd171cc00badc15b678c"
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
    "revision": "d1dd3b81e58c8cd670e7272575a8f855"
  },
  {
    "url": "build/app/chunk-95429572.es5.js",
    "revision": "8d38621b486edab6c2098bbf30d03a1b"
  },
  {
    "url": "build/app/chunk-9a5c0d8f.es5.js",
    "revision": "7c8f1dda468574c387d35c0b9dc00f41"
  },
  {
    "url": "build/app/chunk-a1b3902f.es5.js",
    "revision": "85bfb08872d2b0a43850bf30e2165927"
  },
  {
    "url": "build/app/chunk-a5be4357.es5.js",
    "revision": "0df553f2836124ad72a08bdd53857705"
  },
  {
    "url": "build/app/chunk-a61aa877.es5.js",
    "revision": "0bbb7d2a52e281444a57041e090c737b"
  },
  {
    "url": "build/app/chunk-a99bd936.es5.js",
    "revision": "b936d8d7ac4a6c434e55478860a839e9"
  },
  {
    "url": "build/app/chunk-b429ce31.es5.js",
    "revision": "3512a0e102d7ce1ba8f77257ae4eed23"
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
    "revision": "652a1eac791e687e9dc7b4bbaa5ab447"
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
    "revision": "c4a01f4d8efa2c78a18a2eeb640fd95c"
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
    "url": "build/app/ft0hdn2v.entry.js",
    "revision": "16dd0774dd95b7b93b0c206bc9084f12"
  },
  {
    "url": "build/app/ft0hdn2v.sc.entry.js",
    "revision": "3cfcbfb2e30e98956ec6c3984a33c164"
  },
  {
    "url": "build/app/htajwmkj.entry.js",
    "revision": "8536a35a692304e853a97f7ad6a8ebf7"
  },
  {
    "url": "build/app/htajwmkj.sc.entry.js",
    "revision": "aef50ae8a486b4a7f31bbfeb49b131a2"
  },
  {
    "url": "build/app/ipu3lkvy.entry.js",
    "revision": "229bb796455809506e53d427ae503cfa"
  },
  {
    "url": "build/app/ipu3lkvy.sc.entry.js",
    "revision": "229bb796455809506e53d427ae503cfa"
  },
  {
    "url": "build/app/j6k9zggr.entry.js",
    "revision": "8fa2bd64682bc539032700650810bd5b"
  },
  {
    "url": "build/app/j6k9zggr.sc.entry.js",
    "revision": "cf464fdf4a009d881d8dbbcd44ed2fef"
  },
  {
    "url": "build/app/jqn2z5mb.entry.js",
    "revision": "26afa7d99e4c6e98f016a25b9f957d5d"
  },
  {
    "url": "build/app/jqn2z5mb.sc.entry.js",
    "revision": "26afa7d99e4c6e98f016a25b9f957d5d"
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
    "url": "build/app/lzp9g0g9.entry.js",
    "revision": "2d9a7ff60d20f5fe562627a5ab535f45"
  },
  {
    "url": "build/app/lzp9g0g9.sc.entry.js",
    "revision": "0ed3fcbdc636a05d71acf51ebefcb269"
  },
  {
    "url": "build/app/mjlomlam.entry.js",
    "revision": "3092ce32500cfe3e5fbc7f5dbd85ea8a"
  },
  {
    "url": "build/app/mjlomlam.sc.entry.js",
    "revision": "f10f6b71a065a578b5484166822375aa"
  },
  {
    "url": "build/app/mqjgj1gx.entry.js",
    "revision": "3108c6275831f7ebcdbc63f3797a03ca"
  },
  {
    "url": "build/app/mqjgj1gx.sc.entry.js",
    "revision": "900976bcd9008a02180726816e09c879"
  },
  {
    "url": "build/app/q3vmq28f.entry.js",
    "revision": "437566436f054a85a3eb7b40eb99f351"
  },
  {
    "url": "build/app/q3vmq28f.sc.entry.js",
    "revision": "437566436f054a85a3eb7b40eb99f351"
  },
  {
    "url": "build/app/qxsawymk.entry.js",
    "revision": "417b1ac183241767ea4ce63aa7231af4"
  },
  {
    "url": "build/app/qxsawymk.sc.entry.js",
    "revision": "0ec856bf0aaf5b76b25059e5922e1cfe"
  },
  {
    "url": "build/app/rgpsniw8.entry.js",
    "revision": "446a7e4a7216f22c6582562c7c272885"
  },
  {
    "url": "build/app/rgpsniw8.sc.entry.js",
    "revision": "1be39661ba80e0458cc73c8d2ecd3840"
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
    "url": "build/app/wqpdev08.entry.js",
    "revision": "c3eaa90c4574f206d82c63d902b2f308"
  },
  {
    "url": "build/app/wqpdev08.sc.entry.js",
    "revision": "7e3d05cc0788cb44ffa54423cbcea1d4"
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
    "url": "build/app/xyfguvg6.entry.js",
    "revision": "c587c6b9583a0193d50d17cd3d02e3c7"
  },
  {
    "url": "build/app/xyfguvg6.sc.entry.js",
    "revision": "5dfca19539aa4de8ff80fc33d78b1daf"
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
    "revision": "5b5444af8404054e3fe1a27544ed101f"
  },
  {
    "url": "manifest.json",
    "revision": "47a98c2c42474640c4056b11b0c3a7dd"
  }
]);
