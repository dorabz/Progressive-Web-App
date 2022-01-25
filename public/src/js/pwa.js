var pwaCard = document.querySelector('#pwa');
var pwaCardContent = pwaCard.querySelector('.card__content');
var pwaCardDetails = pwaCard.querySelector('.card__details');
var detailsShown = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function() {
      console.log('Service worker is registered....');
    });
}

pwaCard.addEventListener('click', function (event) {
  if (!detailsShown) {
    detailsShown = true;
    pwaCardContent.style.opacity = 0;
    pwaCardDetails.style.display = 'block';
    pwaCardContent.style.display = 'none';
    setTimeout(function () {
      pwaCardDetails.style.opacity = 1;
    }, 300);
  } else {
    detailsShown = false;
    pwaCardDetails.style.opacity = 0;
    pwaCardContent.style.display = 'block';
    pwaCardDetails.style.display = 'none';
    setTimeout(function () {
      pwaCardContent.style.opacity = 1;
    }, 300);  
  }
});

//function that gets the location and returns it
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geo Location not supported by browser");
  }
}
//function that retrieves the position
function showPosition(position) {
  var location = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude
  }
  console.log(location)
}
//request for location
getLocation();

var p = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    p.innerHTML = "Geo Location not supported by browser";
  }
}
    
function showPosition(position) {
    p.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

