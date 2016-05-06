(function(module) {
  view = {};

  // Sets sections height to the size of the viewer.
  view.adjustSectionHeight = function() {
    var $windowHeight = $(window).innerHeight();
    return $('main section').css({'min-height': $windowHeight + 'px'});
  };

  // adjusts the favorite location icons based on icon width.
  view.adjustWidgetHeight = function() {
    var widgetWidth = $('.favorite').width();
    $('.favorite').css({
      'height' : widgetWidth + 'px'
    });
  };

  // deletes locations from DOM
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
