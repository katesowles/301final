(function(module) {

  currentLocation = {};

  currentLocation.locationCheck = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('latitude', position.coords.latitude);
      console.log('longitude', position.coords.longitude);
      var coordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      $('#currentLatitude').text('current latitude: ' + coordinates.lat);
      $('#currentLongitude').text('current longitude: ' + coordinates.lng);
      //return coordinates;
    });
  };

  module.currentLocation = currentLocation;
})(window);
