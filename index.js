// hamburger menu
const hamburger = document.getElementById("hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("navbar-is-active")
})


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}