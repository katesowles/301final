(function(module) {
  var configureController = {};

  configureController.index = function() {
    // $('section').hide();
    // $('#configure').show();

    $(document).ready(function() {
      $('#toConfigure').click(function() {
        $('html, body').animate({
          scrollTop: $('#configure').offset().top
        }, 2000);
      });
    });

    $('nav a').removeClass('viewing');
    $('nav #toConfigure').addClass('viewing');
  };

  module.configureController = configureController;
})(window);
