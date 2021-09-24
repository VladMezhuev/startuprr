/* eslint-disable */ 

let googleMap

function initMap() {
  const mapContainer = document.getElementById('map')
  const coordinates = { lat: 40.7209000, lng: -74.0143100 }
  const correctZoom = 10
  googleMap = new google.maps.Map(mapContainer, { center: coordinates, zoom: correctZoom })

  const marker = new google.maps.Marker({
    position: coordinates,
    map: googleMap,
    icon: '../static/img/marker.png',
  })
}

window.initMap = initMap
