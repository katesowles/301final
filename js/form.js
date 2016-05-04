(function(module) {
  var $nameAlert = $('#nameAlert');
  var $output = $('#output');
  var $outputText = $('#outputText');
  var $nameForm = $('#nameForm');
  var $locationForm = $('#locationForm');
  var $submitName = $('#submitName');
  var $submitLocation = $('#submitLocation');

  formHandler = {};

  $(document).ready(function(){
    $('button').click(function(e){
      e.preventDefault();
      var userName = $('input:text').val();
      useName(userName);
      localStorage.setItem('currentUser', userName);
      return userName;
    });
  });

  function useName(currentUser, goodDayOrBadDay) { //params of currentUser and what kind of day it is
    var makeGoodorBad = function(goodOrBad) {  //makeGoodorBad - to display correct kind of day later
      $output.append('<p id="outputText"></p>'); // adds a <p> to the output section
      $outputText.text('Hey ' + currentUser + ', ' + goodOrBad); // adds the message text to the output <p>
    };
    return makeGoodorBad;
  }

  //here cometh the Closure 😱
  function message (currentUser){
    var goodDay = useName(currentUser, 'itsgood');
    goodDay('what a great day for biking!');
    var badDay = useName(currentUser, 'itsbad');
    badDay('maybe leave the bike at home today....');
    var soSoDay = useName(currentUser, 'itssoso');
    soSoDay('Conditions are not ideal. Depends on you, dude...');
  };

  //Event Listeners for Submit Button
  $submitName.click(validateUserName);

  function validateUserName(e) {
    e.preventDefault();
    var userName = document.forms['nameInput']['fname'].value;
    if (!userName) { // if userName is falsy
      $nameAlert.show();
      $output.hide();
    }else {
      message(userName);
      $nameAlert.hide();
      $nameForm.hide();
      $output.show();
      $locationForm.show();
    }
  };

  //Event Listener for Submit Button2
  $submitLocation.click(validateLocation);

  //Validating the input for the Location Form

  function validateLocation(e){
    var locationDataForm = document.forms['locationData'];
    e.preventDefault();
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

  $('form').validate({
    showErrors: function(errorMap, errorList) {

      $.each(this.validElements(), function (index, element) {
        var $element = $(element);
        $element.data('title', '')
      .removeClass('error')
      .tooltip('destroy');
      });

      $.each(errorList, function (index, error) {
        var $element = $(error.element);
        $element.parent().addClass('has-error');
        $element.tooltip('destroy')
        .data('title', error.message)
        // .addClass('error')
        .tooltip();
      });
    },
    submitHandler: function(form) {
      alert('This is a valid form!');
    }
  });



  module.formHandler = formHandler;
})(window);
