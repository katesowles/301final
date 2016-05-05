(function(module) {
  var $showLocations = $('#showLocations');
  var sourceConfig = $('#favoritesList').text();
  var templateConfig = Handlebars.compile(sourceConfig);
  var sourceDash = $('#favoritesView').text();
  var templateDash = Handlebars.compile(sourceDash);
  var sourceCurrent = $('#currentLocView').text();
  var templateCurrent = Handlebars.compile(sourceCurrent);

  locationView = {};

  // sent as callback from .merge
  locationView.display = function(data) {
    $showLocations.append(templateConfig(data));
    $('#displayLocations .row').append(templateDash(data));
  };

  locationView.current = function(data, callback) {
    $('.current').append(templateCurrent(data));
    if (callback) callback();
  };

  // this will be moved somewhere more appropriate.
  locationView.init = function() {
    userLocation.createTable();
    userLocation.fetchAll();
  };

  module.locationView = locationView;
})(window);
