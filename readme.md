# Progressive Web Apps

This is a repo of project made as a part of university course.

Theme of project: PWA 

application url on the firebase service: https://snorlax-web2.web.app 

Implemented features:
- native API: geolocation - yes, by giving access to your location
     and pressing the "try it" button will see your longitude and latitude
- be installable - yes, the application is available for installation (installation window offered)
- have at least one cacheing strategy - yes, cache only on install, used for precache index page assets (source code: public / sw.js l: 1-16) and can be seen in cache storage
- offline work at least for the app shell - yes, it can be checked by turning off the internet or by selecting the offline checkbox in dev tools
- background sync - no
- push notification - no
- demonstrate graceful degradation - yes, demonstrated by example with page printing,
when javascript is not enabled then the instruction to turn it on because the print option does not work follows

