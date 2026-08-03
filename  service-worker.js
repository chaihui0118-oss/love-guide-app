const cache="love-guide";


self.addEventListener("install",e=>{

e.waitUntil(

caches.open(cache)

);

});