(function(module) {
  var $dashboard = $('#dashboard');
  var $toDashboard = $('#toDashboard');
  var dashboardController = {};

  $(document).ready(function() {
    locationView.init();
    $toDashboard.click(function() {
      $('html, body').animate({
        scrollTop: $dashboard.offset().top
      }, 500);
    });
  });

  dashboardController.index = function() {
    $('nav a').removeClass('viewing');
    $toDashboard.addClass('viewing');
  };

  module.dashboardController = dashboardController;
})(window);
