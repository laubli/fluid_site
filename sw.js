var CACHE_NAME = 'watch-watch-cache';
var urlToCAche = [
    '/',
    '/index.css',
    '/index.js',
    '/app.js'
];

self.addEventListener('install', evt => {
    console.log('service worker has benn installed');
});

self.addEventListener('install', function(event) {
    console.log('service worker has benn installed');
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('opened cache');
            return cache.addAll(urlToCAche);
        })
    )
});

self.addEventListener('activate', function(event) {
    console.log('service worker has benn actived');
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', function(event) {
    console.log('Ressource récupéré' + evt.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }

            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                    .then (function(cache) {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                }
            );
        })
    );
});