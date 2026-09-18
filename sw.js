const CACHE="tavern-clash-v0.9-bust-round";
const CORE=["./","./index.html","./game30.html","./game_darts_1.html","./assets/audio/darts/BUST.mp3","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./assets/asset-1-c7aa3583019c.png","./assets/asset-2-ff5aedfab131.png","./assets/asset-3-534a26b685a6.mp3"];
self.addEventListener("install",e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
 e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 const isPage=e.request.mode==="navigate" || e.request.destination==="document";
 if(isPage){
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(resp=>{
   const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;
  }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));
 }else{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
   if(resp && resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
   return resp;
  })));
 }
});
