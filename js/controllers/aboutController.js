(function(module) {
  var aboutController = {};

  $(document).ready(function() {
    $('#toAbout').click(function() {
      $('html, body').animate({
        scrollTop: $('#about').offset().top
      }, 500);
    });
  });

  aboutController.index = function() {
    $('nav a').removeClass('viewing');
    $('nav #toAbout').addClass('viewing');
  };

  module.aboutController = aboutController;
})(window);
