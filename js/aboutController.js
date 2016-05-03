(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $(document).ready(function() {
      $('#toAbout').click(function() {
        $('html, body').animate({
          scrollTop: $('#about').offset().top
        }, 500);
      });
    });

    $('nav a').removeClass('viewing');
    $('nav #toAbout').addClass('viewing');
  };

  module.aboutController = aboutController;
})(window);
