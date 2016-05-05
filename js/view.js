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

  view.deleteFromDom = function (ctx) {
    var domElement = '#record' + ctx.params.id;
    $(domElement).remove();
  };

  view.adjustWidgetHeight();
  view.adjustSectionHeight();
  weather.getCurrentLocation();
  // weather.insertFavoriteIcons();

  module.view = view;
})(window);
