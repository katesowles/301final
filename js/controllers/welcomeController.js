(function(module) {
  var $welcome = $('#welcome');
  var $toWelcome = $('#toWelcome');
  var welcomeController = {};

  $(document).ready(function() {
    $toWelcome.click(function() {
      $('html, body').animate({
        scrollTop: $welcome.offset().top
      }, 500);
    });
  });

  welcomeController.index = function() {
    $('nav a').removeClass('viewing');
    $toWelcome.addClass('viewing');
  };

  module.welcomeController = welcomeController;
})(window);
