(function(module) {
  var dashboardController = {};

  dashboardController.index = function() {
    // $('section').hide();
    // $('#dashboard').show();

    $(document).ready(function() {
      $('#toDashboard').click(function() {
        $('html, body').animate({
          scrollTop: $('#dashboard').offset().top
        }, 500);
      });
    });

    $('nav a').removeClass('viewing');
    $('nav #toDashboard').addClass('viewing');
  };

  module.dashboardController = dashboardController;
})(window);
