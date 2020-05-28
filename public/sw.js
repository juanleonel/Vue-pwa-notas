if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let i = Promise.resolve();
            return c[e] || (i = new Promise(async i => {
                if ("document" in self) {
                    const c = document.createElement("script");
                    c.src = e, document.head.appendChild(c), c.onload = i
                } else importScripts(e), i()
            })), i.then(() => { if (!c[e]) throw new Error(`Module ${e} didn’t register its module`); return c[e] })
        },
        i = (i, c) => { Promise.all(i.map(e)).then(e => c(1 === e.length ? e[0] : e)) },
        c = { require: Promise.resolve(i) };
    self.define = (i, n, r) => {
        c[i] || (c[i] = Promise.resolve().then(() => {
            let c = {};
            const o = { uri: location.origin + i.slice(1) };
            return Promise.all(n.map(i => {
                switch (i) {
                    case "exports":
                        return c;
                    case "module":
                        return o;
                    default:
                        return e(i)
                }
            })).then(e => { const i = r(...e); return c.default || (c.default = i), c })
        }))
    }
}
define("./sw.js", ["./workbox-b5c7431c"], (function(e) {
    "use strict";
    self.addEventListener("message", e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() }), e.precacheAndRoute([{ url: "favicon.ico", revision: "1ba2ae710d927f13d483fd5d1e548c9b" }, { url: "icons/icon-128x128.png", revision: "ffaadd7090ccc9894c343dc6edcf7d63" }, { url: "icons/icon-144x144.png", revision: "4eb27c4935821238c7bc0ca80a20b63d" }, { url: "icons/icon-152x152.png", revision: "7b77bf7ba95c6157993e8f8d576cbe27" }, { url: "icons/icon-192x192.png", revision: "32c1b8e4c143af7fd3ea577946dc133a" }, { url: "icons/icon-384x384.png", revision: "13c5a5b2b57f768a89cfc71cce51e6bd" }, { url: "icons/icon-512x512.png", revision: "577afa5f8be8a0be114f8f83e14bc73e" }, { url: "icons/icon-72x72.png", revision: "6f7bf21f0a3ddb87395d77d0f77432aa" }, { url: "icons/icon-96x96.png", revision: "60c33f9b23cc43fe1d884a4dfe7b6032" }, { url: "index.html", revision: "33b3e0d1e0b5a793c949508c3b13f007" }, { url: "manifest.json", revision: "453ea7cb8cf1e2b1b368973470bf85ab" }], {})
}));
//# sourceMappingURL=sw.js.map

const currentCache = 'cache-v1.0';

const files = [
    "favicon.ico",
    "icons/icon-128x128.png",
    "icons/icon-144x144.png",
    "icons/icon-152x152.png",
    "icons/icon-192x192.png",
    "icons/icon-384x384.png",
    "icons/icon-512x512.png",
    "icons/icon-72x72.png",
    "icons/icon-96x96.png",
    "index.html",
    "manifest.json",
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(currentCache).then(cache => {
            return cache.addAll(files);
        })
    );
});
self.addEventListener('activate', event => {
    let version = 'v1.0.0';
    event.waitUntil(
        caches.keys()
        .then(
            cacheNames => {
                Promise.all(
                    cacheNames
                    .map(c => c.split('-'))
                    .filter(c => c[0] === 'cache')
                    .filter(c => c[1] !== version)
                    .map(c => caches.delete(c.join('-')))
                )
            }
        )
    );
});
/*
/// cacheFirst
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            return response || fetch(event.request);
        })
    );
});

// CacheOnly
self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request));
});
// networkFirst
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});

// stale-while-revalidate
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(currentCache)
        .then(function(cache) {
            return cache.match(event.request)
                .then(function(response) {
                    var fetchPromise = fetch(event.request)
                        .then(function(networkResponse) {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    return response || fetchPromise;
                })
        })
    );
});*/