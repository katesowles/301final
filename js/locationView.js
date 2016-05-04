(function(module) {
  var $showLocations = $('#showLocations');
  locationView = {};
  var ui = function() {
    $showLocations.empty().show();
  };
  var allAddresses = [];

  // sent as callback from .merge
  locationView.display = function(data) {
    $showLocations.append(
      Handlebars.compile($('#favoritesList').html())
    );
  };

  // this will be moved somewhere more appropriate.
  locationView.init = function() {
    userLocation.createTable();
    userLocation.fetchAll();
  };

  module.locationView = locationView;
})(window);
