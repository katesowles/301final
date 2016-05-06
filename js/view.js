(function(module) {
  view = {};

  view.adjustSectionHeight = function() {
    var $windowHeight = $(window).innerHeight();
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

  $(window).on('resize', view.adjustSectionHeight());
  // view.adjustSectionHeight();
  view.adjustWidgetHeight();
  weather.getCurrentLocation();

  module.view = view;
})(window);
