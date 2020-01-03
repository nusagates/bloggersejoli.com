var CACHE_NAME = 'bloggersejoli-cache';
var urlsToPrefetch = [
  '/?m=1',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        // Magic is here. Look the  mode: 'no-cors' part.
        cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
           return new Request(urlToPrefetch, { mode: 'no-cors' });
        })).then(function() {
          console.log('All resources have been fetched and cached.');
        });
      })
  );
});
