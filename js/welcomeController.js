(function(module) {
  var welcomeController = {};

  welcomeController.index = function() {
    $(document).ready(function() {
      $('#toWelcome').click(function() {
        $('html, body').animate({
          scrollTop: $('#welcome').offset().top
        }, 500);
      });
    });

    $('nav a').removeClass('viewing');
    $('nav #toWelcome').addClass('viewing');
  };

  module.welcomeController = welcomeController;
})(window);
