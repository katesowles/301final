(function(module) {
  var dashboardController = {};

  $(document).ready(function() {
    $('#toDashboard').click(function() {
      $('html, body').animate({
        scrollTop: $('#dashboard').offset().top
      }, 500);
    });
  });

  dashboardController.index = function() {
    $('nav a').removeClass('viewing');
    $('nav #toDashboard').addClass('viewing');
  };

  module.dashboardController = dashboardController;
})(window);
