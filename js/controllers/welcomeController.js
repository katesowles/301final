(function(module) {
  var welcomeController = {};

  $(document).ready(function() {
    $('#toWelcome').click(function() {
      $('html, body').animate({
        scrollTop: $('#welcome').offset().top
      }, 500);
    });
  });

  welcomeController.index = function() {
    $('nav a').removeClass('viewing');
    $('nav #toWelcome').addClass('viewing');
  };

  module.welcomeController = welcomeController;
})(window);
