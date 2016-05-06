(function(module) {

  formHandler = {};
  formHandler.userName = '';
  formHandler.el = {};
  formHandler.el.$nameForm = $('#nameForm');
  formHandler.el.$locationForm = $('#locationForm');
  formHandler.el.$submitName = $('#submitName');
  formHandler.el.$submitLocation = $('#submitLocation');
  formHandler.el.ldf = document.getElementById('locationForm');

  formHandler.init = function(){
    if (localStorage.currentUser) {
      formHandler.userName = localStorage.currentUser;
      formHandler.el.$nameForm.hide();
      formHandler.el.$locationForm.show();
      $('#savedContainer').show();
    } else {
      formHandler.el.$submitName.on('click', function(e){
        e.preventDefault();
        if (formHandler.el.$nameForm.valid()) {
          console.log('Valid.');
          localStorage.currentUser = formHandler.userName = $('#fname').val();
          formHandler.el.$nameForm.hide();
          formHandler.el.$locationForm.show();
          $('#savedContainer').show();
        }
      });
    }

    formHandler.el.$submitLocation.on('click', function(e) {
      e.preventDefault();
      if (formHandler.el.$locationForm.valid()) {
        var inputLocation = {};
        inputLocation.locationName = formHandler.el.ldf.elements.flocationname.value;
        inputLocation.streetAddress = formHandler.el.ldf.elements.fstreetaddress.value;
        inputLocation.city = formHandler.el.ldf.elements.fcity.value;
        inputLocation.state = formHandler.el.ldf.elements.fstate.value;
        inputLocation.zipcode = formHandler.el.ldf.elements.fzip.value;
        var obj = new userLocation(inputLocation);
        obj.insertRecord(userLocation.merge);
        formHandler.el.ldf.reset();
      }
    });
  };

  module.formHandler = formHandler;
})(window);
