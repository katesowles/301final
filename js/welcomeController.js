(function(module) {
  var welcomeController = {};

  welcomeController.index = function() {
    $('section').hide();
    $('#welcome').show();
    $('nav a').removeClass('viewing');
    $('nav #toWelcome').addClass('viewing');
  };

  module.welcomeController = welcomeController;
})(window);
