(function(module) {
  var welcomeController = {};

  welcomeController.index = function() {
    // $('section').hide();
    // $('#welcome').show();

    $(document).ready(function() {
      $('#toWelcome').click(function() {
        $('html, body').animate({
          scrollTop: $('#welcome').offset().top
        }, 2000);
      });
    });

    $('nav a').removeClass('viewing');
    $('nav #toWelcome').addClass('viewing');
  };

  module.welcomeController = welcomeController;
})(window);
