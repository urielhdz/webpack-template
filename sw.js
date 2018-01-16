let CACHE_NAME = "up-wedding-v1";
let files = [
  "/index.html",
  "/dist/javascript/bundle.js"
];

// self => Representa el proxy
self.addEventListener("install",function(){
  // Abrimos nuestro cache, identificado por el nombre
  caches.open(CACHE_NAME).then(function(cache){
    // cache es nuestro cache
    return cache.addAll(files);
  })
});

self.addEventListener("activate",function(ev){
	ev.waitUntil(
		caches.keys().then(function(cache_names){
			return Promise.all(
				cache_names.map(function(cache_name){
					if(CACHE_NAME !== cache_name) return caches.delete(cache_name)
				})
			)
		})
	)
})

self.addEventListener("fetch",function(ev){
	ev.respondWith(
		caches.match(ev.request)
					.then(function(response){
						return returnFromCacheOrFetch(ev.request) //Devolviendo del cache
					}).catch(function(err){

						if(ev.request.mode == "navigate"){

							return caches.match(ev.request);
						}
					})
	)
});


// http://12devsofxmas.co.uk/2016/01/day-9-service-worker-santas-little-performance-helper/
function returnFromCacheOrFetch(request) {
  const cachePromise = caches.open(CACHE_NAME);
  const matchPromise = cachePromise.then(function(cache) {
    return cache.match(request);
  });

  return Promise.all([cachePromise, matchPromise]).then(function([cache, cacheResponse]) {
    // Kick off the update request
    const fetchPromise = fetch(request).then(function(fetchResponse) {
      // Cache the updated file and then return the response
      // console.log(request.url);
      if(request.url.toString().indexOf("blank.png") < 0){
        cache.put(request, fetchResponse.clone());
      }

      return fetchResponse;
    })
    // return the cached response if we have it, otherwise the result of the fetch.
    return cacheResponse || fetchPromise;
  });
}
