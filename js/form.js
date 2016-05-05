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
    formHandler.el.$outputCondi.text(formHandler.recCondi(userLocation.all[0].condition));
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

  formHandler.recCondi = function(condi){
    var response = '';
    switch (condi) {
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
    case 'Overcast':
    case 'Partly Cloudy':
    case 'Mostly Cloudy':
    case 'Scattered Clouds':
      response = 'It\'s overcast';
      break;
    case 'Clear':
      response = 'It\'s clear';
      break;
    case 'Squall':
      response = 'There\'s squalls';
    case 'Funnel Cloud':
      response = 'There\'s a funnel cloud';
      break;
    case 'Unknown':
      response = 'Look out the window';
      break;
    default:
      response = 'Any weather is great biking weather!';
    };
    return response;
  };

  formHandler.init();

  module.formHandler = formHandler;
})(window);
