/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ba3ded74e8504847845f564bef48aa9c"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7fae4c44.js",
    "revision": "982ade04acc232a4e05199f694724e42"
  },
  {
    "url": "assets/js/10.55c00561.js",
    "revision": "81a4f31a961c4d30ee2c861015246a5c"
  },
  {
    "url": "assets/js/14.169f7f28.js",
    "revision": "2b7c51ff5db90219d0f28d5662a51ca3"
  },
  {
    "url": "assets/js/15.80983bcc.js",
    "revision": "2cb9cbb03638c63e7c981a09bed9dfb4"
  },
  {
    "url": "assets/js/16.e68e0059.js",
    "revision": "521e9ef9d9d56044620675081729eed6"
  },
  {
    "url": "assets/js/17.4a1e8213.js",
    "revision": "ce08718d4e06f210bdbb415c5f937774"
  },
  {
    "url": "assets/js/18.826d5d56.js",
    "revision": "382e1858e4003e5ce130ffa7df5690b4"
  },
  {
    "url": "assets/js/19.a63f60dd.js",
    "revision": "5ba85b7843484a1bae2c9e88590fd6a4"
  },
  {
    "url": "assets/js/2.b462a11d.js",
    "revision": "e305b259f4c5a4b9b702138e05c753c2"
  },
  {
    "url": "assets/js/20.0f315758.js",
    "revision": "d4abbd9b36a709cf19876b4fa61e459c"
  },
  {
    "url": "assets/js/21.b77552da.js",
    "revision": "ee123fd46595bb0de18b11c38bbe7486"
  },
  {
    "url": "assets/js/22.0578bb2f.js",
    "revision": "69880c4f3659c399e0ecdf03bd7b0b56"
  },
  {
    "url": "assets/js/23.f00b1312.js",
    "revision": "2f4c1f52c80461eb13c9e6073f2e42d7"
  },
  {
    "url": "assets/js/24.9ff8a26d.js",
    "revision": "cae4ee1add5b84a01bca733f8b3572f9"
  },
  {
    "url": "assets/js/25.40bf0509.js",
    "revision": "1139752d2e35fae6f9defcceb0033ab7"
  },
  {
    "url": "assets/js/26.b6510955.js",
    "revision": "1da7f6988b83948ccdcc5712db1657e5"
  },
  {
    "url": "assets/js/27.b35f7af7.js",
    "revision": "da82bb53bf0f5ac0182af95d3312a770"
  },
  {
    "url": "assets/js/28.27e5e860.js",
    "revision": "599be1d59c7fecc2ed030e7f4a8f8dc7"
  },
  {
    "url": "assets/js/29.c922701a.js",
    "revision": "920dee03c61de0a89bb003321ab09cf9"
  },
  {
    "url": "assets/js/3.73757bd1.js",
    "revision": "ad87523144153b2a8cea1f27ebd60392"
  },
  {
    "url": "assets/js/30.6472a690.js",
    "revision": "9409695d37ff9ff9c2a8fc4f89568010"
  },
  {
    "url": "assets/js/31.0452e8fa.js",
    "revision": "b4c041dc91d6337bea5b6b20af50dd46"
  },
  {
    "url": "assets/js/32.806f4a0e.js",
    "revision": "abd2434020fc79c071727d4b1a876ae9"
  },
  {
    "url": "assets/js/33.510a706b.js",
    "revision": "863c54506758e45ab34f63d064c2ce8f"
  },
  {
    "url": "assets/js/34.307f6192.js",
    "revision": "bb5ee48ecc236abcf9319bfc635edd62"
  },
  {
    "url": "assets/js/35.f333dc79.js",
    "revision": "d4f4dfea1036fc826bb097e504ea7652"
  },
  {
    "url": "assets/js/36.5109cf8f.js",
    "revision": "b70adec4270d7e2a6c26a3d9fee0e62a"
  },
  {
    "url": "assets/js/37.b7c53222.js",
    "revision": "1f9f448dbae61cb85ce3ebec03bb7dd1"
  },
  {
    "url": "assets/js/38.639d3c26.js",
    "revision": "0a6f1c1cc5954c99a62c100eb5e8c819"
  },
  {
    "url": "assets/js/39.29844ad2.js",
    "revision": "8b8e6412a56f7a9ebab4df8b6bc9e37d"
  },
  {
    "url": "assets/js/4.e7db506f.js",
    "revision": "98445f027a574aff080ed5baf86405bc"
  },
  {
    "url": "assets/js/40.481a9de2.js",
    "revision": "8a54bcf3079f26f8ca6fa5690aed25fd"
  },
  {
    "url": "assets/js/41.d2979f1e.js",
    "revision": "13c2c8de34826b7ada1209ad483912fd"
  },
  {
    "url": "assets/js/42.11edee64.js",
    "revision": "710cbea1f7570a9da0475869e56c8a7c"
  },
  {
    "url": "assets/js/43.450313b6.js",
    "revision": "e20228dcd6cf20fb8c296d65a1d34cbe"
  },
  {
    "url": "assets/js/44.276ea6e2.js",
    "revision": "1e4e6685318d1417ee49a716fcfd9995"
  },
  {
    "url": "assets/js/45.f372237b.js",
    "revision": "dc88eaa7517f99f826cb010b5a493d82"
  },
  {
    "url": "assets/js/5.7f9f0e06.js",
    "revision": "5e446b40e80611c383e22107687168d6"
  },
  {
    "url": "assets/js/6.38d2ce38.js",
    "revision": "6ceb4cb2456e3d3a21646ac473f33e9d"
  },
  {
    "url": "assets/js/7.0d9b32d6.js",
    "revision": "b72afe24bfa551a24d02d3bde7740a64"
  },
  {
    "url": "assets/js/8.607b1a99.js",
    "revision": "c9a44014f9211e893b2838d7a7dcf64f"
  },
  {
    "url": "assets/js/9.98fee886.js",
    "revision": "15d3d9c89aaf8b06a6b184c3c43047b3"
  },
  {
    "url": "assets/js/app.d0644a9a.js",
    "revision": "5924609fefb16c56d8dd00d33f288cfb"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.dfbd4b9e.js",
    "revision": "51ac30db2ca2b63445f34d61d38036c4"
  },
  {
    "url": "assets/js/vendors~flowchart.ddbfa5f1.js",
    "revision": "ef2d540b379ee54124c4b063ed83b1d4"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "afae22afb7d30a574b026806f09b4056"
  },
  {
    "url": "categories/java/index.html",
    "revision": "711885856cc5c1aaf3a762f4493c95a0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c075826d49de6c8adccd6e5156fd0119"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6c7b5b7ff40b253f7449b77dfaca0993"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e12806d428e2a15d9e8e48e5b1cb4ab7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "224758179ba09e84d846c2a3f29eecb2"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "bf0b24a643d3bad59409fcfbb45da775"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c068fd628bdfdd8efdf83c29aebfd186"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a136489e993c2ec0d9f5ae68310a6c67"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "84879c3c9851e5388592ed282be243c8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c9ebb2371e7c926b8d39fd1953daf19c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7f97fd53434a8928291e923fc1717b21"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ce2da0bddcf10ea7851699d50e01f795"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e5fb950afa521d283147e19160110829"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "28e71cf997a50f9f3f5aa8ab6ba2b5c7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2d514f82882a0af29b67ef99e490f247"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "28c5b0838cf6ceb9e2b0338bf6adde35"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7752bf2ddb75881354b77250fd765468"
  },
  {
    "url": "timeline/index.html",
    "revision": "07fb2dc731e218dd8509c8d299d2dd85"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "3ed657b1f6a7d09afabd6dde66e31c6e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "14f189a98525ea39b5fff0029c0544ce"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a72ef3513a1a957abdecf2cb6021fe07"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "dc296d4c1340273e52f088424fd146b8"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c4da691787051c21b3faf0944ef0e5d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
