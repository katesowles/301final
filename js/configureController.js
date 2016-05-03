(function(module) {
  var configureController = {};

  configureController.index = function() {
    $('section').hide();
    $('#configure').show();
    $('nav a').removeClass('viewing');
    $('nav #toConfigure').addClass('viewing');
  };

  module.configureController = configureController;
})(window);
