(function(module) {
  var routes = {};

  routes.mapping = function() {
    page.base('/');
    page('', welcomeController.index);
    page('welcome', welcomeController.index);
    page('dashboard', dashboardController.index);
    page('configure', configureController.index);
    page('about', aboutController.index);
    page('deleteRecord/:id', deleteRecord.index);

    page();
  };

  routes.mapping();

  module.routes = routes;
})(window);
