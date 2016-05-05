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

  view.adjustWidgetHeight();
  view.adjustSectionHeight();
  weather.getCurrentLocation();
  weather.updateCurrent(locationView.current);
  weather.insertFavoriteIcons();

  module.view = view;
})(window);
