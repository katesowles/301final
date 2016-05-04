(function(module) {
  var $configure = $('#configure');
  var $toConfigure = $('#toConfigure');
  var configureController = {};

  $(document).ready(function() {
    $toConfigure.click(function() {
      $('html, body').animate({
        scrollTop: $configure.offset().top
      }, 500);
    });
  });

  configureController.index = function() {
    $('nav a').removeClass('viewing');
    $toConfigure.addClass('viewing');
  };

  module.configureController = configureController;
})(window);
