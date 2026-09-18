const CACHE = "tavern-clash-v0.3-10k-commentator";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./assets/asset-1-c7aa3583019c.png", "./assets/asset-2-ff5aedfab131.png", "./assets/asset-3-534a26b685a6.mp3", "./assets/audio/10k/10k_1000_01.mp3", "./assets/audio/10k/10k_1000_02.mp3", "./assets/audio/10k/10k_1000_03.mp3", "./assets/audio/10k/10k_2000_01.mp3", "./assets/audio/10k/10k_2000_02.mp3", "./assets/audio/10k/10k_2000_03.mp3", "./assets/audio/10k/10k_3000_01.mp3", "./assets/audio/10k/10k_3000_02.mp3", "./assets/audio/10k/10k_3000_03.mp3", "./assets/audio/10k/10k_curse_01.mp3", "./assets/audio/10k/10k_curse_02.mp3", "./assets/audio/10k/10k_curse_03.mp3", "./assets/audio/10k/10k_good_01.mp3", "./assets/audio/10k/10k_good_02.mp3", "./assets/audio/10k/10k_good_03.mp3", "./assets/audio/10k/10k_nic2_01.mp3", "./assets/audio/10k/10k_nic2_02.mp3", "./assets/audio/10k/10k_nic2_03.mp3", "./assets/audio/10k/10k_nic_01.mp3", "./assets/audio/10k/10k_nic_02.mp3", "./assets/audio/10k/10k_nic_03.mp3", "./assets/audio/10k/10k_win_01.mp3", "./assets/audio/10k/10k_win_02.mp3", "./assets/audio/10k/10k_win_03.mp3"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    const copy = resp.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy));
    return resp;
  }).catch(() => caches.match("./index.html"))));
});
