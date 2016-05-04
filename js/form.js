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
      console.log('Name was already there.');
      userName = localStorage.currentUser;
      formHandler.el.$nameForm.hide();
      formHandler.el.$locationForm.show();
      formHandler.showRec();
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

  // function useName(currentUser, goodDayOrBadDay) { //params of currentUser and what kind of day it is
  //   var makeGoodorBad = function(goodOrBad) {  //makeGoodorBad - to display correct kind of day later
  //     formHandler.el.$output.append('<p id="outputText">' + formHandler.el.$outputText.text() + '</p>'); // adds a <p> to the output section
  //     formHandler.el.$outputText.text('Hey ' + currentUser + ', ' + goodOrBad); // adds the message text to the output <p>
  //   };
  //   return makeGoodorBad;
  // }
  //
  // //here cometh the Closure 😱
  // function message (currentUser){
  //   var goodDay = useName(currentUser, 'itsgood');
  //   goodDay('what a great day for biking!');
  //   var badDay = useName(currentUser, 'itsbad');
  //   badDay('maybe leave the bike at home today....');
  //   var soSoDay = useName(currentUser, 'itssoso');
  //   soSoDay('Conditions are not ideal. Depends on you, dude...');
  // };

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

    var locationDataForm = document.forms['locationData'];
    var inputLocation = {};
    var locationName = locationDataForm['flocationname'].value;

    if (!locationName){ // if location name falsy
      $('#locationNameAlert').show();
    } else {
      inputLocation.locationName = locationName;
    };

    var streetAddress = locationDataForm['fstreetaddress'].value;
    if (!streetAddress) { // if location address falsy
      $('#locationAddressAlert').show();
    } else {
      inputLocation.streetAddress = streetAddress;
    };

    var city = locationDataForm['fcity'].value;
    if (!city) { // if location city falsy
      $('#locationCityAlert').show();
    } else {
      inputLocation.city = city;
    };

    var state = locationDataForm['fstate'].value;
    if (!state) { // if location state falsy
      $('#locationStateAlert').show();
    } else {
      inputLocation.state = state;
    };

    var zipcode = locationDataForm['fzip'].value;
    if (!zipcode) { // if location zipcode falsy
      $('#locationZipAlert').show();
    } else {
      inputLocation.zipcode = zipcode;
    };
    var obj = new userLocation(inputLocation);
    obj.insertRecord(userLocation.merge);
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
