(function(module) {
  var routes = {};

  routes.mapping = function() {
    page.base('/');
    page('', welcomeController.js);
    page('welcome', welcomeController.js);
    page('dashboard', dashboardController.js);
    page('configure', configureController.js);

    page();
  };

  routes.mapping();

  module.routes = routes;
})(window);
