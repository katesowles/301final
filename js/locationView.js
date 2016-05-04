(function(module) {
  var $showLocations = $('#showLocations');
  var source = $('#favoritesList').text();
  var template = Handlebars.compile(source);

  locationView = {};

  // sent as callback from .merge
  locationView.display = function(data) {
    $showLocations.append(template(data));
  };

  // this will be moved somewhere more appropriate.
  locationView.init = function() {
    userLocation.createTable();
    userLocation.fetchAll();
  };

  module.locationView = locationView;
})(window);
