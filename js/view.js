(function(module) {
  var $windowHeight = $(window).innerHeight();
  view = {};

  view.adjustSectionHeight = function() {
    return $('main section').css({'min-height': $windowHeight + 'px'});
  };

  view.adjustWidgetHeight = function() {
    var widgetWidth = $('.favorite').width();
    $('.favorite').css({
      'height' : widgetWidth + 'px'
    });
  };

  weather.getCurrentWeather();
  view.adjustWidgetHeight();
  view.adjustSectionHeight();

  module.view = view;
})(window);
