let CACHE_NAME = 'pwa_test_4';
let urlsToCache = [
  '/',
  // '/completed'
];

// Install a service worker
self.addEventListener('install', function(event)  {
  console.log('[Service Worker] Installing Service Worker ...', event);
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', function(event)  {
  console.log('[Service Worker] Fetch something ...', event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }

//         // IMPORTANT: Clone the request. A request is a stream and
//         // can only be consumed once. Since we are consuming this
//         // once by cache and once by the browser for fetch, we need
//         // to clone the response.
//         var fetchRequest = event.request.clone();

//         return fetch(fetchRequest).then(
//           function(response) {
//             // Check if we received a valid response
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // IMPORTANT: Clone the response. A response is a stream
//             // and because we want the browser to consume the response
//             // as well as the cache consuming the response, we need
//             // to clone it so we have two streams.
//             var responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           }
//         );
//       })
//     );
// });


// Update a service worker
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  let cacheWhitelist = ['pwa_test_4'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
