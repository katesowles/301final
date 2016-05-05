(function(module) {

  formHandler = {};
  formHandler.userName = '';
  formHandler.el = {};
  formHandler.el.$nameAlert = $('#nameAlert');
  formHandler.el.$outputTemp = $('#outputTemp');
  formHandler.el.$outputCondi = $('#outputCondi');
  formHandler.el.$outputWind = $('#outputWind');
  formHandler.el.$outputRec = $('#outputRec');
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
    } else if ((temp >= 61) && (temp < 70)) {
      response.answer = 'It\'s nice and warm, ';
    } else if ((temp >= 70) && (temp < 79)) {
      response.answer = 'It\'s pretty warm, ';
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
    var loc = userLocation.all[0];
    var temp = formHandler.recTemp(loc.temperature);
    var wind = formHandler.recWind(loc.wind);
    var condi = formHandler.recCondi(loc.condition);


    formHandler.el.$outputTemp.text(temp.answer);
    formHandler.el.$outputWind.text(wind.answer);
    formHandler.el.$outputCondi.text(condi.answer);

    if (temp.good && wind.good && condi.good) {
      $('#outputRec').text('It\'s a great for biking!');
    } else {
      $('#outputRec').text('Maybe leave your bike home today.');
    }
  };

//Info Message about the Wind

  formHandler.recWind= function(wind){
    var response = {
      answer: '',
      good: true
    };

    if (wind < 13){
      response.answer = ' with barely any wind.';
    } else if ((wind >= 13) && (wind < 20)) {
      response.answer = ' with a bit of a breeze.';
    } else if ((wind >= 20) && (wind < 30)) {
      response.answer = ' with some wind.';
    } else {
      response.answer = ' with strong wind.';
      response.good = false;
    }
    return response;
  };

//Info Message about Weather Condition

  formHandler.recCondi = function(condi){
    var response = {
      answer: '',
      good: true
    };
    switch (condi) {
    case 'Drizzle':
    case 'Rain Mist':
    case 'Freezing Drizzle':
      response.answer = 'and drizzling';
      break;
    case 'Rain':
    case 'Rain Showers':
    case 'Freezing Rain':
    case 'Unknown Precipitation':
      response.answer = 'and raining';
      response.good = false;
      break;
    case 'Snow':
    case 'Snow Grains':
    case 'Ice Crystals':
    case 'Low Drifting Snow':
    case 'Blowing Snow':
    case 'Snow Showers':
    case 'Snow Blowing Snow Mist':
      response.answer = 'and snowing';
      response.good = false;
      break;
    case 'Hail':
    case 'Ice Pellets':
    case 'Ice Pellet Showers':
    case 'Hail Showers':
    case 'Small Hail Showers':
    case 'Small Hail':
      response.answer = 'and hailing';
      response.good = false;
      break;
    case 'Mist':
    case 'Fog':
    case 'Fog Patches':
    case 'Freezing Fog':
    case 'Spray':
    case 'Patches of Fog':
    case 'Shallow Fog':
    case 'Partial Fog':
      response.answer = 'and foggy';
      response.good = false;
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
      response.answer = 'and smoky';
      response.good = false;
      break;
    case 'Thunderstorm':
    case 'Thunderstorms and Rain':
    case 'Thunderstorms and Snow':
    case 'Thunderstorms and Ice Pellets':
    case 'Thunderstorms with Hail':
    case 'Thunderstorms with Small Hail':
      response.answer = 'with thunderstorms';
      response.good = false;
      break;
    case 'Overcast':
    case 'Partly Cloudy':
    case 'Mostly Cloudy':
    case 'Scattered Clouds':
      response.answer = 'and overcast';
      break;
    case 'Clear':
      response.answer = 'and clear';
      break;
    case 'Squall':
      response.answer = 'and there\'s squalls';
      response.good = false;
    case 'Funnel Cloud':
      response.answer = 'and there\'s funnel clouds';
      response.good = false;
      break;
    case 'Unknown':
      response = '';
      break;
    default:
      response = '';
    };
    return response;
  };


  formHandler.recSunriseSet = function(sunRiseSet){
    var answer = '';
    var now = new Date();
    if (now.getHours() <= userLocation.all[0].sunrise) {
      answer = 'the sun will rise at ' + userLocation.all[0].sunrise;
    } else {
      answer = 'the sun will set at ' + userLocation.all[0].sunset;
    }
    return answer;
  };


  formHandler.init();

  module.formHandler = formHandler;
})(window);
