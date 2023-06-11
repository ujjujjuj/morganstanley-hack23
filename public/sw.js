import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener("push", (e) => {
  const { title, body } = e.data.json()
  const options = {
    body,
    icon: "/splash.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [],
  }
  e.waitUntil(self.registration.showNotification(title, options))
})
