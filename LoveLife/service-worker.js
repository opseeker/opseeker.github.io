importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-window.prod.mjs')

workbox.routing.registerRoute(
    ({request})=> request.destination === 'image',
    new workbox.strategies.NetworkFirst()
)