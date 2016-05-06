(function(module) {

  currentLocation = {};

  // Gets location from browser, initiates weather conditions pull.
  currentLocation.locationCheck = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var coordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      $('#currentLatitude').text('current latitude: ' + coordinates.lat);
      $('#currentLongitude').text('current longitude: ' + coordinates.lng);
      weather.updateCurrent(coordinates, locationView.current);
    });
  };

  module.currentLocation = currentLocation;
})(window);
