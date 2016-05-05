(function(module) {
  var $about = $('#about');
  var $toAbout = $('#toAbout');
  var aboutController = {};

  $(document).ready(function() {
    $toAbout.click(function() {
      $('html, body').animate({
        scrollTop: $about.offset().top
      }, 500);
    });
  });

  aboutController.index = function() {
    console.log('aboutController triggered');
    $('nav a').removeClass('viewing');
    $toAbout.addClass('viewing');
  };

  module.aboutController = aboutController;
})(window);
