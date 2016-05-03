(function(module) {
  locationView = {};

  // input: object of
  locationView.merge = function(locObj) {
    weather.updateData(locObj, locationView.display);
  };

  locationView.display = function(data) {
    // this will be something with handlebars tempaltes and shit.
    console.log(data);
  };

  // this will be moved somewhere more appropriate.
  userLocation.fetchAll(locationView.display);

  module.locationView = locationView;
})(window);
