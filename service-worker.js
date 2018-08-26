const cacheName = 'RestaurantReviews';

// The list of files to cache including our restaurant images.
const filesToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

// add the event listener to handle the install event
self.addEventListener('install', e => {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        // open the cache and add all our files to it
        caches.open(cacheName).then(cache => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

// handle the service worker activate event
self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

// handle the fetch event and return 
// either from the cache or request from server
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});