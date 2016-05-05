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
    var response = {
      answer: '',
      good: true
    };

    if (temp < 50){
      response.answer = 'It\'s very cold, ';
      response.good = false;
    } else if ((temp >= 50) && (temp < 61)) {
      response.answer = 'It\s pleasantly cool, ';
      response.good = true;
    } else if ((temp >= 61) && (temp < 70)) {
      response.answer = 'It\'s nice and warm, ';
      response.good = true;
    } else if ((temp >= 70) && (temp < 79)) {
      response.answer = 'It\'s pretty warm, ';
      response.good = true;
    } else if ((temp >= 79) && (temp < 88)) {
      response.answer = 'It\'s very warm out there, ';
      response.good = false;
    } else {
      response.answer = 'It\'s very hot, ';
      response.good = false;
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
      response = ' with barely any wind.';
    } else if ((wind >= 16) && (wind < 26)) {
      response = ' with a bit of a breeze.';
    } else {
      response = ' with quite a bit of wind.';
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
      response = 'and drizzling';
      break;
    case 'Rain':
    case 'Rain Showers':
    case 'Freezing Rain':
    case 'Unknown Precipitation':
      response = 'and raining';
      break;
    case 'Snow':
    case 'Snow Grains':
    case 'Ice Crystals':
    case 'Low Drifting Snow':
    case 'Blowing Snow':
    case 'Snow Showers':
    case 'Snow Blowing Snow Mist':
      response = 'and snowing';
      break;
    case 'Hail':
    case 'Ice Pellets':
    case 'Ice Pellet Showers':
    case 'Hail Showers':
    case 'Small Hail Showers':
    case 'Small Hail':
      response = 'and hailing';
      break;
    case 'Mist':
    case 'Fog':
    case 'Fog Patches':
    case 'Freezing Fog':
    case 'Spray':
    case 'Patches of Fog':
    case 'Shallow Fog':
    case 'Partial Fog':
      response = 'and foggy';
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
      response = 'and smoky';
      break;
    case 'Thunderstorm':
    case 'Thunderstorms and Rain':
    case 'Thunderstorms and Snow':
    case 'Thunderstorms and Ice Pellets':
    case 'Thunderstorms with Hail':
    case 'Thunderstorms with Small Hail':
      response = 'with thunderstorms';
      break;
    case 'Overcast':
    case 'Partly Cloudy':
    case 'Mostly Cloudy':
    case 'Scattered Clouds':
      response = 'and overcast';
      break;
    case 'Clear':
      response = 'and clear';
      break;
    case 'Squall':
      response = 'and there\'s squalls';
    case 'Funnel Cloud':
      response = 'and there\'s funnel clouds';
      break;
    case 'Unknown':
      response = '';
      break;
    default:
      response = '';
    };
    return response;
  };

  formHandler.init();

  module.formHandler = formHandler;
})(window);
