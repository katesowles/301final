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
      // console.log('Name was already there.');
      userName = localStorage.currentUser;
      formHandler.el.$nameForm.hide();
      formHandler.el.$locationForm.show();
    } else {

      $('button').click(function(e){
        e.preventDefault();
        userName = $('input:text').val();
        localStorage.currentUser = userName;
      });
    }

  };

  formHandler.recommendation= function(temp){
    console.log(temp + 'hi there');
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

  //Event Listeners for Submit Button
  formHandler.el.$submitName.click(validateUserName);

  function validateUserName(e) {
    e.preventDefault();
    // $nfValidator.element('#fname');
    var userName = document.forms['nameInput']['fname'].value;
    if (!userName) { // if userName is falsy
      formHandler.el.$nameAlert.show();
      // $output.hide();
    }else {

      formHandler.el.$nameAlert.hide();
      formHandler.el.$nameForm.hide();
      // $output.show();
      formHandler.el.$locationForm.show();
    }
  };

  //Event Listener for Submit Button2
  formHandler.el.$submitLocation.click(validateLocation);

  //Validating the input for the Location Form

  function validateLocation(e){
    e.preventDefault();
    var error = false;
    var ldf = document.getElementById('locationForm');
    var inputLocation = {};
    $('fieldset > p').hide();
    inputLocation.locationName = ldf.elements.flocationname.value;
    inputLocation.streetAddress = ldf.elements.fstreetaddress.value;
    inputLocation.city = ldf.elements.fcity.value;
    inputLocation.state = ldf.elements.fstate.value;
    inputLocation.zipcode = ldf.elements.fzip.value;


    if (!inputLocation.locationName){ // if location name falsy
      $('#locationNameAlert').show();
      error = true;
    }
    if (!inputLocation.streetAddress) { // if location address falsy
      $('#locationAddressAlert').show();
      error = true;
    }
    if (!inputLocation.city) { // if location city falsy
      $('#locationCityAlert').show();
      error = true;
    }
    if (!inputLocation.state) { // if location state falsy
      $('#locationStateAlert').show();
      error = true;
    }
    if (!inputLocation.zipcode) { // if location zipcode falsy
      $('#locationZipAlert').show();
      error = true;
    }
    if (!error) {
      var obj = new userLocation(inputLocation);
      obj.insertRecord(userLocation.merge);
      ldf.reset();
    }
  };

//tooltips

  // var $nfValidator = $('#nameForm').validate({
  //   debug: true,
  //   showErrors: function(errorMap, errorList) {
  //     console.log('got to showErrors.');
  //     $.each(this.validElements(), function (index, element) {
  //       var $element = $(element);
  //       $element.data('title', '')
  //       .removeClass('error')
  //       .tooltip('destroy');
  //     });
  //
  //     $.each(errorList, function (index, error) {
  //       var $element = $(error.element);
  //       $element.parent().addClass('has-error');
  //       $element.tooltip('destroy')
  //       .data('title', error.message)
  //       // .addClass('error')
  //       .tooltip();
  //     });
  //   },
  //   submitHandler: function(form) {
  //     alert('This is a valid form!');
  //   }
  // });


  formHandler.init();

  module.formHandler = formHandler;
})(window);
