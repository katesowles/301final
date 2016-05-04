(function(module) {
  locationView = {};

  // input: object of userLocation,


  // sent as callback from .merge
  locationView.display = function(data) {
    // this will be something with handlebars tempaltes and shit.
    console.log('lv.disp shows: ',data);
  };

  // this will be moved somewhere more appropriate.
  locationView.init = function() {
    userLocation.createTable();
    userLocation.fetchAll();
  };

  module.locationView = locationView;
})(window);
