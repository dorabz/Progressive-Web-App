url aplikacije na firebase servisu: https://snorlax-web2.web.app 
Aplikacija ima implementirano:
- native API : geolocation - da, davanjem pristupa vašoj lokaciji
    i pritiskom na gumb "try it" vidjet će se vaš longitude i latitude
- biti installable - da, aplikacija je dostupna za instaliranje (ponuđen prozor za instaliranje)
- imati barem jednu cacheing strategiju - da, cache only on install , korištena za precache index page assetsa (source code: public/sw.js l: 1-16) i može se vidjeti u cache storage 
- offline rad barem za app shell - da, provjeriti se može gašenjem interneta ili odabirom kvačice offline u dev tools
- background sync - ne
- push notifikacija - ne
- demonstrirati gracefull degradation - da, demonstrirano na primjeru sa printanjem stranice, 
kada javascript nije omogućen onda slijedi naputak da se uključi jer print opcija ne radi