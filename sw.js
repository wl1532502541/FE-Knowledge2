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
    "revision": "8417fc39f0eb5b18cd74a32dceda2c16"
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
    "revision": "fd6a8c3184ad6a9910cc206863a8ab44"
  }, {
    "url": "CSS_DEMOS/glimmer.html",
    "revision": "bcbb4f71046197a91215f208b4313b4c"
  }, {
    "url": "CSS_DEMOS/HoverMe.html",
    "revision": "9c43b69bb2158b3590dd4735ec09faed"
  }, {
    "url": "CSS_DEMOS/HoverUnderline.html",
    "revision": "336287c0c825995672aa48046107bc41"
  }, {
    "url": "CSS_DEMOS/steam-card.html",
    "revision": "edd4fbc3f5213154ac9ad205398430f0"
  }, {
    "url": "CSS_DEMOS/ThreedCard.html",
    "revision": "900b08211bfb2835db02f94ff721dce9"
  }, {
    "url": "CSS_DEMOS/Typing.html",
    "revision": "565250427e49e196f1ac8511664a99fb"
  }, {
    "url": "CSS基础/css基础.html",
    "revision": "c34f45c2a6ae1aaa3705a3b4c06a07cd"
  }, {
    "url": "CSS基础/link和@import.html",
    "revision": "50f00932563fd2f689f57755648c9827"
  }, {
    "url": "CSS基础/媒体查询——动画减弱.html",
    "revision": "ad90454b2530599086d6fe7cbb9f984d"
  }, {
    "url": "favicon.ico",
    "revision": "ab5018a558f47ae3c67fc9c323423084"
  }, {
    "url": "favicon.svg",
    "revision": "71dcfd191507c31dc79efe3341dfa3b9"
  }, {
    "url": "index.html",
    "revision": "6035803aabb3d5a2cc2f66a22029ee32"
  }, {
    "url": "JS基础/Promise面试题.html",
    "revision": "87f4b50b269987b5eb536fccf2dc7aff"
  }, {
    "url": "JS基础/script 标签中的 async 和 defer 属性.html",
    "revision": "587951c7339b0613b7619f3dec6882e5"
  }, {
    "url": "JS基础/严格模式.html",
    "revision": "b907c446b3bfae662aa7b7e77a65679d"
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
    "revision": "78d53c9a3aff2d9476fafb62dfbf42a9"
  }, {
    "url": "README.html",
    "revision": "2fa6baa9a441697f33377345876ccfa2"
  }, {
    "url": "registerSW.js",
    "revision": "3f2e2b39814b71a7807a89a16369bffa"
  }, {
    "url": "Vue/Vue3.html",
    "revision": "b76c5c65e9d7708c1cb6a28753f47e99"
  }, {
    "url": "Vue/Vuex.html",
    "revision": "ae21b7da6dea9bee8cba3e0bb52b1624"
  }, {
    "url": "前后端通信/ajax.html",
    "revision": "b62cedf332c483cf4c47826b6ac4784a"
  }, {
    "url": "前后端通信/REST,GraphQL,gRPC,tRPC.html",
    "revision": "662c5f9b74fe8da543dd75ec2ae652fd"
  }, {
    "url": "前后端通信/跨域.html",
    "revision": "927ea4f2919040f71f0c08aca50f4162"
  }, {
    "url": "好文阅读历史/202112.html",
    "revision": "8fc0b0423f1ef399d44ea7faa8f8fa68"
  }, {
    "url": "好文阅读历史/202201.html",
    "revision": "ca64c5cabecb94794eb3f17e491a6030"
  }, {
    "url": "好文阅读历史/202202.html",
    "revision": "9ccea3e4f98a2521cdc65a177f42b6ac"
  }, {
    "url": "好文阅读历史/202203.html",
    "revision": "7f7d5cd41ae833bbe86fefa0b35eba06"
  }, {
    "url": "好文阅读历史/202205.html",
    "revision": "ebe8d476c0aeaf69c318df77d917c180"
  }, {
    "url": "好文阅读历史/202207.html",
    "revision": "82d613b9b25df6cf024c1685df279d44"
  }, {
    "url": "好文阅读历史/202208.html",
    "revision": "e3266338e479307e30aa0a393ab32e0f"
  }, {
    "url": "好文阅读历史/202212.html",
    "revision": "69599bcfcc1cb746392b04dd807fb622"
  }, {
    "url": "好文阅读历史/202301.html",
    "revision": "ecada884d1a907ad6196f5d807513ff0"
  }, {
    "url": "好文阅读历史/202302.html",
    "revision": "9eead1cb868e0e06ea6a552b0f33c9be"
  }, {
    "url": "好文阅读历史/202303.html",
    "revision": "26974982f6bbcb27072a71c3023ccb1e"
  }, {
    "url": "好文阅读历史/202304.html",
    "revision": "186e9663f0daf83ba995472cf539e8da"
  }, {
    "url": "好文阅读历史/202305.html",
    "revision": "31b1380189cc9a7f48bca92ed2c69280"
  }, {
    "url": "好文阅读历史/202306.html",
    "revision": "14efdec8885046c791ab221fe2e08026"
  }, {
    "url": "好文阅读历史/202308.html",
    "revision": "58de374fc5a2244e5c7b20422fff09f9"
  }, {
    "url": "好文阅读历史/202309.html",
    "revision": "f098a9ddbe34f0a15c7b7b1c9dd54bca"
  }, {
    "url": "实用库/实用库.html",
    "revision": "f0a18a18b7bd1d242a77bd54d4cf6be1"
  }, {
    "url": "手写/实现一个mini Vue.html",
    "revision": "c7839ce70e9f911996b33ab06d0919ef"
  }, {
    "url": "手写/封装ajax.html",
    "revision": "ccf40566df86d18dd3875aa78a37d57d"
  }, {
    "url": "手写/手写async、await.html",
    "revision": "6ab4aa1bba6f3c2099ee90aab73a7488"
  }, {
    "url": "手写/深浅拷贝.html",
    "revision": "3e6fce57a84ccdec7ec0396495b550ef"
  }, {
    "url": "手写/高频手写.html",
    "revision": "3a79bd6dd9b045345d9b9aeab3c61eab"
  }, {
    "url": "浏览器/从输入url到显示发生了什么.html",
    "revision": "e12a2db49ac8f8f50812b92d8e4f9991"
  }, {
    "url": "浏览器/浏览器内核的理解.html",
    "revision": "cc891d93083b57f5505357cba135ff85"
  }, {
    "url": "浏览器/碎片化知识点.html",
    "revision": "5792905069d651f0788a3090d555fa2d"
  }, {
    "url": "移动端/体验优化.html",
    "revision": "a4cc293b1e59b382d54a58206bbaba36"
  }, {
    "url": "算法/十大经典排序算法.html",
    "revision": "81d9db469ccd31a907449079a1627862"
  }, {
    "url": "算法/并查集.html",
    "revision": "a014ec2a75f77d0c2e1072867e336020"
  }, {
    "url": "算法/线段树.html",
    "revision": "e1c60fff8e15084f9e031c689defe24a"
  }, {
    "url": "计算机网络相关/0 网络模型.html",
    "revision": "4b30270e56617ca5bd867c12502bb231"
  }, {
    "url": "计算机网络相关/HTTP报文格式.html",
    "revision": "0831534977fb5da2235dc11e22fa66d9"
  }, {
    "url": "计算机网络相关/HTTP版本.html",
    "revision": "c027d55dec9ceb42e72cc8c0b3eb60c5"
  }, {
    "url": "计算机网络相关/HTTP状态码.html",
    "revision": "951307cc058ed3246869d85e6b38dbe2"
  }, {
    "url": "计算机网络相关/KCP.html",
    "revision": "ad9e10aedfe86fcc4381fdb23fd08e6e"
  }, {
    "url": "计算机网络相关/QUIC.html",
    "revision": "b7c7e669f5e3aea16cd061210d4f2607"
  }, {
    "url": "计算机网络相关/TCP三次握手四次挥手.html",
    "revision": "7f7e417b1472a0abf6b797ed379d0f7a"
  }, {
    "url": "计算机网络相关/TCP和UDP的区别.html",
    "revision": "ef557317a305499a31f78e32705c6bcf"
  }, {
    "url": "计算机网络相关/TCP报文格式.html",
    "revision": "16db6916248b49a71fab8d504eff9807"
  }, {
    "url": "计算机网络相关/TCP重传、流量控制与拥塞控制.html",
    "revision": "bf5f78740f5dc9c8665e209b37e16600"
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
