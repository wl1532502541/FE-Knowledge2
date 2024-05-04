/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "bfe36ade5d00b7696fcc5211d348e867"
  }, {
    "url": "assets/app.6e58fbdc.js",
    "revision": null
  }, {
    "url": "assets/chunks/VPAlgoliaSearchBox.3edb68dc.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_avatar-out.md.02ae193e.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_avatar-out.md.02ae193e.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_glimmer.md.afa5a851.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_glimmer.md.afa5a851.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_HoverMe.md.9f4bc06d.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_HoverMe.md.9f4bc06d.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_HoverUnderline.md.241f5bc5.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_HoverUnderline.md.241f5bc5.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_steam-card.md.f941bda1.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_steam-card.md.f941bda1.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_ThreedCard.md.204d9f24.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_ThreedCard.md.204d9f24.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_Typing.md.9e893b8d.js",
    "revision": null
  }, {
    "url": "assets/CSS_DEMOS_Typing.md.9e893b8d.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS基础_css基础.md.38fe9de9.js",
    "revision": null
  }, {
    "url": "assets/CSS基础_css基础.md.38fe9de9.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS基础_link和@import.md.e1449ca2.js",
    "revision": null
  }, {
    "url": "assets/CSS基础_link和@import.md.e1449ca2.lean.js",
    "revision": null
  }, {
    "url": "assets/CSS基础_媒体查询——动画减弱.md.55e304df.js",
    "revision": null
  }, {
    "url": "assets/CSS基础_媒体查询——动画减弱.md.55e304df.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.07bdbc2e.js",
    "revision": null
  }, {
    "url": "assets/index.md.07bdbc2e.lean.js",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic.ea42a392.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek-ext.4fbe9427.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek.8f4463c4.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin-ext.bd8920cc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin.bd3b6f56.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-vietnamese.6ce511fb.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic-ext.e75737ce.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic.5f2c6c8c.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek-ext.ab0619bc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek.d5a6d92a.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin-ext.0030eebd.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin.2ed14f66.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-vietnamese.14ce25a6.woff2",
    "revision": null
  }, {
    "url": "assets/JS基础_Promise面试题.md.156d17b6.js",
    "revision": null
  }, {
    "url": "assets/JS基础_Promise面试题.md.156d17b6.lean.js",
    "revision": null
  }, {
    "url": "assets/JS基础_script 标签中的 async 和 defer 属性.md.0c913bc6.js",
    "revision": null
  }, {
    "url": "assets/JS基础_script 标签中的 async 和 defer 属性.md.0c913bc6.lean.js",
    "revision": null
  }, {
    "url": "assets/JS基础_严格模式.md.abad15e8.js",
    "revision": null
  }, {
    "url": "assets/JS基础_严格模式.md.abad15e8.lean.js",
    "revision": null
  }, {
    "url": "assets/React_React.md.dae63182.js",
    "revision": null
  }, {
    "url": "assets/React_React.md.dae63182.lean.js",
    "revision": null
  }, {
    "url": "assets/README.md.d6054c11.js",
    "revision": null
  }, {
    "url": "assets/README.md.d6054c11.lean.js",
    "revision": null
  }, {
    "url": "assets/steam-card.4aa1d68f.png",
    "revision": null
  }, {
    "url": "assets/style.79dcd427.css",
    "revision": null
  }, {
    "url": "assets/Vue_Vue3.md.b8b23664.js",
    "revision": null
  }, {
    "url": "assets/Vue_Vue3.md.b8b23664.lean.js",
    "revision": null
  }, {
    "url": "assets/Vue_Vuex.md.ea8680f0.js",
    "revision": null
  }, {
    "url": "assets/Vue_Vuex.md.ea8680f0.lean.js",
    "revision": null
  }, {
    "url": "assets/前后端通信_ajax.md.ec2932dd.js",
    "revision": null
  }, {
    "url": "assets/前后端通信_ajax.md.ec2932dd.lean.js",
    "revision": null
  }, {
    "url": "assets/前后端通信_REST_GraphQL_gRPC_tRPC.md.1ac35415.js",
    "revision": null
  }, {
    "url": "assets/前后端通信_REST_GraphQL_gRPC_tRPC.md.1ac35415.lean.js",
    "revision": null
  }, {
    "url": "assets/前后端通信_跨域.md.57d419fe.js",
    "revision": null
  }, {
    "url": "assets/前后端通信_跨域.md.57d419fe.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202112.md.5ad719a4.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202112.md.5ad719a4.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202201.md.292901a3.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202201.md.292901a3.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202202.md.71f6fa1c.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202202.md.71f6fa1c.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202203.md.8e8ceefb.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202203.md.8e8ceefb.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202205.md.1e108902.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202205.md.1e108902.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202207.md.ccfc1aa3.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202207.md.ccfc1aa3.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202208.md.3c24ddc3.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202208.md.3c24ddc3.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202212.md.c72814a2.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202212.md.c72814a2.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202301.md.9afe696e.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202301.md.9afe696e.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202302.md.d9e04b76.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202302.md.d9e04b76.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202303.md.8d94a0bb.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202303.md.8d94a0bb.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202304.md.36550e05.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202304.md.36550e05.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202305.md.13b84bbf.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202305.md.13b84bbf.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202306.md.72a003f1.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202306.md.72a003f1.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202308.md.29b18ee9.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202308.md.29b18ee9.lean.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202309.md.ac5b597b.js",
    "revision": null
  }, {
    "url": "assets/好文阅读历史_202309.md.ac5b597b.lean.js",
    "revision": null
  }, {
    "url": "assets/实用库_实用库.md.35b43bc3.js",
    "revision": null
  }, {
    "url": "assets/实用库_实用库.md.35b43bc3.lean.js",
    "revision": null
  }, {
    "url": "assets/手写_实现一个mini Vue.md.bb869103.js",
    "revision": null
  }, {
    "url": "assets/手写_实现一个mini Vue.md.bb869103.lean.js",
    "revision": null
  }, {
    "url": "assets/手写_封装ajax.md.67c8ba69.js",
    "revision": null
  }, {
    "url": "assets/手写_封装ajax.md.67c8ba69.lean.js",
    "revision": null
  }, {
    "url": "assets/手写_手写async、await.md.7fa956c7.js",
    "revision": null
  }, {
    "url": "assets/手写_手写async、await.md.7fa956c7.lean.js",
    "revision": null
  }, {
    "url": "assets/手写_深浅拷贝.md.8b3de7f5.js",
    "revision": null
  }, {
    "url": "assets/手写_深浅拷贝.md.8b3de7f5.lean.js",
    "revision": null
  }, {
    "url": "assets/手写_高频手写.md.9255310e.js",
    "revision": null
  }, {
    "url": "assets/手写_高频手写.md.9255310e.lean.js",
    "revision": null
  }, {
    "url": "assets/浏览器_从输入url到显示发生了什么.md.1a07f618.js",
    "revision": null
  }, {
    "url": "assets/浏览器_从输入url到显示发生了什么.md.1a07f618.lean.js",
    "revision": null
  }, {
    "url": "assets/浏览器_浏览器内核的理解.md.065f468c.js",
    "revision": null
  }, {
    "url": "assets/浏览器_浏览器内核的理解.md.065f468c.lean.js",
    "revision": null
  }, {
    "url": "assets/浏览器_碎片化知识点.md.ddb4c233.js",
    "revision": null
  }, {
    "url": "assets/浏览器_碎片化知识点.md.ddb4c233.lean.js",
    "revision": null
  }, {
    "url": "assets/移动端_体验优化.md.d1649180.js",
    "revision": null
  }, {
    "url": "assets/移动端_体验优化.md.d1649180.lean.js",
    "revision": null
  }, {
    "url": "assets/算法_十大经典排序算法.md.1c8d99d5.js",
    "revision": null
  }, {
    "url": "assets/算法_十大经典排序算法.md.1c8d99d5.lean.js",
    "revision": null
  }, {
    "url": "assets/算法_并查集.md.c3f55329.js",
    "revision": null
  }, {
    "url": "assets/算法_并查集.md.c3f55329.lean.js",
    "revision": null
  }, {
    "url": "assets/算法_线段树.md.120c8c5e.js",
    "revision": null
  }, {
    "url": "assets/算法_线段树.md.120c8c5e.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_0 网络模型.md.ce93315d.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_0 网络模型.md.ce93315d.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_HTTP报文格式.md.eb16b703.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_HTTP报文格式.md.eb16b703.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_HTTP版本.md.fcd8f5db.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_HTTP版本.md.fcd8f5db.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_HTTP状态码.md.c1b81f04.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_HTTP状态码.md.c1b81f04.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_KCP.md.147e6948.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_KCP.md.147e6948.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_QUIC.md.1d5c98a5.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_QUIC.md.1d5c98a5.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP三次握手四次挥手.md.692530a1.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP三次握手四次挥手.md.692530a1.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP和UDP的区别.md.5b703eca.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP和UDP的区别.md.5b703eca.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP报文格式.md.0c422b7e.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP报文格式.md.0c422b7e.lean.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP重传、流量控制与拥塞控制.md.07eed175.js",
    "revision": null
  }, {
    "url": "assets/计算机网络相关_TCP重传、流量控制与拥塞控制.md.07eed175.lean.js",
    "revision": null
  }, {
    "url": "colagirl-192x192.png",
    "revision": "5dbc25f6919f6ab0c3b1e40c3cf8250b"
  }, {
    "url": "colagirl-512x512.png",
    "revision": "68224474e166e57a57b6e61a9d4d6c4b"
  }, {
    "url": "CSS_DEMOS/avatar-out.html",
    "revision": "d3d331491f258ac3896261c5a9c4cded"
  }, {
    "url": "CSS_DEMOS/glimmer.html",
    "revision": "37af039d7adb1b57e292a214dddf03eb"
  }, {
    "url": "CSS_DEMOS/HoverMe.html",
    "revision": "fad4ab30fa83a86d774a55d1ed10a979"
  }, {
    "url": "CSS_DEMOS/HoverUnderline.html",
    "revision": "0b9ebc22cfa956e1e7ea0ec90a66fdd4"
  }, {
    "url": "CSS_DEMOS/steam-card.html",
    "revision": "ea39097a43fa7a2aadf24fdba4594b6b"
  }, {
    "url": "CSS_DEMOS/ThreedCard.html",
    "revision": "4785dbe646aa902c9ff3e8c0d3625bc5"
  }, {
    "url": "CSS_DEMOS/Typing.html",
    "revision": "ac2e3781058de2f2decd73930add57c3"
  }, {
    "url": "CSS基础/css基础.html",
    "revision": "d25d10c65bdc9ff64f98e1eeec227ca2"
  }, {
    "url": "CSS基础/link和@import.html",
    "revision": "c81fcf77148b992d54473c9a0318599f"
  }, {
    "url": "CSS基础/媒体查询——动画减弱.html",
    "revision": "c05216483dff5e56d575caf7555f6b46"
  }, {
    "url": "favicon.ico",
    "revision": "ab5018a558f47ae3c67fc9c323423084"
  }, {
    "url": "favicon.svg",
    "revision": "71dcfd191507c31dc79efe3341dfa3b9"
  }, {
    "url": "index.html",
    "revision": "5821fa6b866341c53ed2ce28d4644947"
  }, {
    "url": "JS基础/Promise面试题.html",
    "revision": "7c853238674093adf6a343c21aad12d2"
  }, {
    "url": "JS基础/script 标签中的 async 和 defer 属性.html",
    "revision": "ce4fdfb21db6d2788f354b1e01ecdfa9"
  }, {
    "url": "JS基础/严格模式.html",
    "revision": "fdc3bc901f79ac799af13ed29fb49b8a"
  }, {
    "url": "logo/book.png",
    "revision": "d1cda68b0602d9e56d2636de4725aaf3"
  }, {
    "url": "logo/klee.ico",
    "revision": "ab5018a558f47ae3c67fc9c323423084"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f24c9384006bbc8de95ed69990459dca"
  }, {
    "url": "pwa-512x512.png",
    "revision": "4db5b8fe442a8f8fdc6e35cd40138057"
  }, {
    "url": "React/React.html",
    "revision": "5f12732ecc0071f6118a4b10e8e0ccfb"
  }, {
    "url": "README.html",
    "revision": "f6d7883dd647ab5195e739b52a50ac64"
  }, {
    "url": "registerSW.js",
    "revision": "3f2e2b39814b71a7807a89a16369bffa"
  }, {
    "url": "Vue/Vue3.html",
    "revision": "7a7e39e92170d11b5e1497ee01c6ec17"
  }, {
    "url": "Vue/Vuex.html",
    "revision": "4850adc1a0c567ba823f549f7059af9b"
  }, {
    "url": "前后端通信/ajax.html",
    "revision": "0f5bcfd0c8d219880e8850211b6db8ae"
  }, {
    "url": "前后端通信/REST,GraphQL,gRPC,tRPC.html",
    "revision": "a3104a85872f8fe90e4c73fdc41baf55"
  }, {
    "url": "前后端通信/跨域.html",
    "revision": "a04cd76c44b18cb0e0e4444efb6c8674"
  }, {
    "url": "好文阅读历史/202112.html",
    "revision": "a6b9d7b3072829d206f99e71680ebf12"
  }, {
    "url": "好文阅读历史/202201.html",
    "revision": "078f6efffc208d05231f92fc53ff2b67"
  }, {
    "url": "好文阅读历史/202202.html",
    "revision": "82a90135da816e3c24103f46ea29afbd"
  }, {
    "url": "好文阅读历史/202203.html",
    "revision": "362de0a09aedabefbee2580fd416f9ba"
  }, {
    "url": "好文阅读历史/202205.html",
    "revision": "8a1701e80dd32653f1ccdca9315f4cd2"
  }, {
    "url": "好文阅读历史/202207.html",
    "revision": "5565c2951a43806e72272bc6feac7ad0"
  }, {
    "url": "好文阅读历史/202208.html",
    "revision": "b1fbe15d796d945b8cf12e65238a9fd2"
  }, {
    "url": "好文阅读历史/202212.html",
    "revision": "dcb933ef8a21c2211db65fc9d3c1f950"
  }, {
    "url": "好文阅读历史/202301.html",
    "revision": "4c67b8b6685f3bf3feb9898a6f69b0ea"
  }, {
    "url": "好文阅读历史/202302.html",
    "revision": "5bfd925ecce92edd7d8fe9990f8edb74"
  }, {
    "url": "好文阅读历史/202303.html",
    "revision": "276a0556248b4a976f5f5337c1562d34"
  }, {
    "url": "好文阅读历史/202304.html",
    "revision": "7b25a3eceb73ed84ff5b40d202db823d"
  }, {
    "url": "好文阅读历史/202305.html",
    "revision": "912d54924d47f98070dab2dad9cebdd1"
  }, {
    "url": "好文阅读历史/202306.html",
    "revision": "1095e1b412a4a7a32b95b4149c6231f1"
  }, {
    "url": "好文阅读历史/202308.html",
    "revision": "44baaba668a6a48926b4f1295acbab26"
  }, {
    "url": "好文阅读历史/202309.html",
    "revision": "2c85edc88c1867372685e30f7abb0ae2"
  }, {
    "url": "实用库/实用库.html",
    "revision": "63736f8f8618b5abca86c6ae5a8eee1e"
  }, {
    "url": "手写/实现一个mini Vue.html",
    "revision": "a7ca0042aff925b957bb8b673398236a"
  }, {
    "url": "手写/封装ajax.html",
    "revision": "1f312ee1cd17a7d71ddf5ad9efd3379a"
  }, {
    "url": "手写/手写async、await.html",
    "revision": "e7c85fa538ca6b153b23a94440f4365b"
  }, {
    "url": "手写/深浅拷贝.html",
    "revision": "f1c7eefecbd951ac54f48197e0249c47"
  }, {
    "url": "手写/高频手写.html",
    "revision": "ae96ec9dbccce9f64547c7fa67b8fb80"
  }, {
    "url": "浏览器/从输入url到显示发生了什么.html",
    "revision": "5244019cef02e3f12181181c9d471dd8"
  }, {
    "url": "浏览器/浏览器内核的理解.html",
    "revision": "82ec4be090fa8a685d2e31d5fc228d9f"
  }, {
    "url": "浏览器/碎片化知识点.html",
    "revision": "646bc4bb95a0c02054578abf90d88246"
  }, {
    "url": "移动端/体验优化.html",
    "revision": "dc21ae0526f60f77e5c6309da48a7d0e"
  }, {
    "url": "算法/十大经典排序算法.html",
    "revision": "4e5192aa4428ffee2506b1fca2609944"
  }, {
    "url": "算法/并查集.html",
    "revision": "001441c000743e1ba39b8b0a9b08d2fe"
  }, {
    "url": "算法/线段树.html",
    "revision": "6c468f94905c60b99bfec68dd614aa5e"
  }, {
    "url": "计算机网络相关/0 网络模型.html",
    "revision": "009c6e02c703f39a978ecd065249b6c0"
  }, {
    "url": "计算机网络相关/HTTP报文格式.html",
    "revision": "365e70c63af104e94b612ce8ed3f9d13"
  }, {
    "url": "计算机网络相关/HTTP版本.html",
    "revision": "f55f41c52442c762057a7c88235c57b4"
  }, {
    "url": "计算机网络相关/HTTP状态码.html",
    "revision": "17f4b996f4dabb39e019357cbe499ad5"
  }, {
    "url": "计算机网络相关/KCP.html",
    "revision": "07733a4a8814215f42e67dce8589a1c7"
  }, {
    "url": "计算机网络相关/QUIC.html",
    "revision": "a7e89be242f826b4f215f2911f7632be"
  }, {
    "url": "计算机网络相关/TCP三次握手四次挥手.html",
    "revision": "1cad1b1dd50462916aa9804d266f5f09"
  }, {
    "url": "计算机网络相关/TCP和UDP的区别.html",
    "revision": "0570c8c7ad901ba7a361b9917bd093d6"
  }, {
    "url": "计算机网络相关/TCP报文格式.html",
    "revision": "0df37d1fd7cfa6922886cc3aef022944"
  }, {
    "url": "计算机网络相关/TCP重传、流量控制与拥塞控制.html",
    "revision": "3d52600317c47d636b64f7d0b206e85e"
  }, {
    "url": "colagirl-192x192.png",
    "revision": "5dbc25f6919f6ab0c3b1e40c3cf8250b"
  }, {
    "url": "colagirl-512x512.png",
    "revision": "68224474e166e57a57b6e61a9d4d6c4b"
  }, {
    "url": "manifest.webmanifest",
    "revision": "eb9a20bd34d108324f2c8da1bff7493c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
