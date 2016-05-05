(function(module) {

  formHandler = {};
  formHandler.userName = '';
  formHandler.el = {};
  formHandler.el.$nameAlert = $('#nameAlert');
  formHandler.el.$output = $('#output');
  formHandler.el.$outputText = $('#outputText');
  formHandler.el.$nameForm = $('#nameForm');
  formHandler.el.$locationForm = $('#locationForm');
  formHandler.el.$submitName = $('#submitName');
  formHandler.el.$submitLocation = $('#submitLocation');

  formHandler.init = function(){
    if (localStorage.currentUser) {
      formHandler.userName = localStorage.currentUser;
      formHandler.el.$nameForm.hide();
      formHandler.el.$locationForm.show();
    } else {
      formHandler.el.$submitName.on('click', function(e){
        e.preventDefault();
        if (formHandler.el.$nameForm.valid()) {
          console.log('Valid.');
          localStorage.currentUser = formHandler.userName = $('#fname').val();
          formHandler.el.$nameForm.hide();
          formHandler.el.$locationForm.show();
        }
      });
    }
  };

  //Event Listener for Submit Button2
  formHandler.el.$submitLocation.on('click', function(e) {
    e.preventDefault();
    if (formHandler.el.$locationForm.valid()) {
      var ldf = document.getElementById('locationForm');
      var inputLocation = {};
      inputLocation.locationName = ldf.elements.flocationname.value;
      inputLocation.streetAddress = ldf.elements.fstreetaddress.value;
      inputLocation.city = ldf.elements.fcity.value;
      inputLocation.state = ldf.elements.fstate.value;
      inputLocation.zipcode = ldf.elements.fzip.value;
      var obj = new userLocation(inputLocation);
      obj.insertRecord(userLocation.merge);
      ldf.reset();
    }
  });

  formHandler.recommendation = function(temp){
    console.log('fH.recommendation says "temp = ' + temp + '"');
    var response = '';
    if (temp < 50){
      response = 'cold';
    } else if ((temp >= 50) && (temp < 75)) {
      response = 'good';
    } else {
      resonse = 'hot';
    }
    return response;
  };

  formHandler.showRec = function (){
    formHandler.el.$output.text(formHandler.recommendation(userLocation.all[0].temperature));
  };




  formHandler.init();

  module.formHandler = formHandler;
})(window);
