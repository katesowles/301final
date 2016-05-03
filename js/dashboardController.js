(function(module) {
  var dashboardController = {};

  dashboardController.index = function() {
    $('section').hide();
    $('#dashboard').show();
    $('nav a').removeClass('viewing');
    $('nav #toDashboard').addClass('viewing');
  };

  module.dashboardController = dashboardController;
})(window);
