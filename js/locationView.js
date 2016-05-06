(function(module) {
  var $showLocations = $('#showLocations');
  var sourceConfig = $('#favoritesList').text();
  var templateConfig = Handlebars.compile(sourceConfig);
  var sourceDash = $('#favoritesView').text();
  var templateDash = Handlebars.compile(sourceDash);
  var sourceCurrent = $('#currentLocView').text();
  var templateCurrent = Handlebars.compile(sourceCurrent);
  var sourceIcons = $('.iconGoesHere').text();
  var templateIcons = Handlebars.compile(sourceIcons);

  locationView = {};

  // sent as callback from .merge
  locationView.display = function(data) {
    $showLocations.append(templateConfig(data));
    $('#displayLocations .row').append(templateDash(data));
  };

  locationView.current = function(data, callback) {
    $('.current').append(templateCurrent(data));
    if (callback) callback();
  };

  locationView.addIcons = function (savedIcon) {
    console.log('incoming?: ', savedIcon);
    $('.iconGoesHere').append(templateIcons(savedIcon));
  };

  // this will be moved somewhere more appropriate.
  locationView.init = function() {
    userLocation.createTable();
    userLocation.fetchAll();
  };

  //Info Message about the temperature
  locationView.recTemp= function(temp){
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



//Info Message about the Wind

  locationView.recWind= function(wind){
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

  locationView.recCondi = function(condi){
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


  locationView.recSunRiseSet = function(loc){
    var answer = '';
    var now = new Date();
    if (now.getHours() <= loc.sunrise) {
      answer = 'The sun will rise at ' + loc.sunrise;
    } else {
      answer = 'The sun will set at ' + loc.sunset;
    }
    return answer;
  };

  locationView.showRec = function (loc){
    var temp = locationView.recTemp(loc.temperature);
    var wind = locationView.recWind(loc.windSpeed);
    var condi = locationView.recCondi(loc.condition);
    var sunRiseSet = locationView.recSunRiseSet(loc);

    $('#outputTemp').text(temp.answer);
    $('#outputWind').text(wind.answer);
    $('#outputCondi').text(condi.answer);
    $('#outputSun').text(sunRiseSet);

    if (temp.good && wind.good && condi.good) {
      $('#outputRec').text('It\'s a great for biking!');
    } else {
      $('#outputRec').text('Maybe leave your bike home today.');
    }
  };

  module.locationView = locationView;
})(window);
