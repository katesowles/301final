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
    var domDashboard = '#record' + ctx.params.id;
    var domConfig = '#recordB' + ctx.params.id;
    $(domDashboard).remove();
    $(domConfig).remove();
    history.pushState({}, null, '/');
  };

  view.adjustSectionHeight();
  view.adjustWidgetHeight();
  weather.getCurrentLocation();

  module.view = view;
})(window);
