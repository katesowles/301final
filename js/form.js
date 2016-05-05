(function(module) {

  formHandler = {};
  formHandler.userName = '';
  formHandler.el = {};
  formHandler.el.$nameAlert = $('#nameAlert');
  formHandler.el.$outputTemp = $('#outputTemp');
  formHandler.el.$outputCondi = $('#outputCondi');
  formHandler.el.$outputWind = $('#outputWind');
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

//Info Message about the temperature
  formHandler.recTemp= function(temp){
    var response = '';
    if (temp < 50){
      response = 'It\'s very cold';
    } else if ((temp >= 50) && (temp < 61)) {
      response = 'It\s pleasantly cool';
    } else if ((temp >= 61) && (temp < 70)) {
      response = 'It\'s nice and warm, perfect biking temperatures ';
    } else if ((temp >= 70) && (temp < 79)) {
      response = 'It\'s pretty warm, should be a nice ride';
    } else if ((temp >= 79) && (temp < 88)) {
      response = 'It\'s very warm out there';
    } else {
      response = 'It\'s very hot';
    }
    return response;
  };

  formHandler.showRec = function (){
    formHandler.el.$outputTemp.text(formHandler.recTemp(userLocation.all[0].temperature));
    formHandler.el.$outputWind.text(formHandler.recWind(userLocation.all[0].wind));
  };

//Info Message about the Wind

  formHandler.recWind= function(wind){
    var response = '';
    if (wind < 16){
      response = 'There\'s barely any wind';
    } else if ((wind >= 16) && (wind < 26)) {
      response = 'It\'s a bit breezy';
    } else {
      response = 'It\'s windy.';
    }
    return response;
  };

//Info Message about Weather Condition

var response = '';

switch (userLocation.all[0].condition) {
  case 'Drizzle':
  case 'Rain Mist':
  case 'Freezing Drizzle':
    response = 'It\'s drizzling';
    break;
  case 'Rain':
  case 'Rain Showers':
  case 'Freezing Rain':
  case 'Unknown Precipitation':
    response = 'It\'s raining';
    break;
  case 'Snow':
  case 'Snow Grains':
  case 'Ice Crystals':
  case 'Low Drifting Snow':
  case 'Blowing Snow':
  case 'Snow Showers':
  case 'Snow Blowing Snow Mist':
    response = 'It\'s snowing';
    break;
  case 'Hail':
  case 'Ice Pellets':
  case 'Ice Pellet Showers':
  case 'Hail Showers':
  case 'Small Hail Showers':
  case 'Small Hail':
    response = 'It\'s hailing';
    break;
  case 'Mist':
  case 'Fog':
  case 'Fog Patches':
  case 'Freezing Fog':
  case 'Spray':
  case 'Patches of Fog':
  case 'Shallow Fog':
  case 'Partial Fog':
    response = 'It\'s foggy';
    break;
  case 'Smoke':
  case 'Volcanic Ash':
  case 'Wide Spread Dust':
  case 'Sand':
  case 'Haze':
  case 'Dust Whirls':
  case 'Sandstorm':
  case 'Low Drifting Widespread Dust':
  case 'Low Drifting Sand':
  case 'Blowing Sand':
  case 'Blowing Widespread Dust':
    response = 'It\'s smoky';
    break;
  case 'Thunderstorm':
  case 'Thunderstorms and Rain':
  case 'Thunderstorms and Snow':
  case 'Thunderstorms and Ice Pellets':
  case 'Thunderstorms with Hail':
  case 'Thunderstorms with Small Hail':
    response = 'There\'s thunderstorms';
    break;



DONT FORGET DEFAULT!!!!!!!


  //Event Listeners for Submit Button
  formHandler.el.$submitName.click(validateUserName);

  function validateUserName(e) {
    e.preventDefault();
    // $nfValidator.element('#fname');
    var userName = document.forms['nameInput']['fname'].value;
    if (!userName) { // if userName is falsy
      formHandler.el.$nameAlert.show();
      // $outputTemp.hide();
    }else {

      formHandler.el.$nameAlert.hide();
      formHandler.el.$nameForm.hide();
      // $outputTemp.show();
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
