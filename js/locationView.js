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
      response.answer = '<p><span>It\'s very cold</span> - so dress warmly</p> ';
      response.good = false;
    } else if ((temp >= 50) && (temp < 61)) {
      response.answer = '<p><span>It\'s pleasantly cool<span> - so put on a sweater and enjoy the ride</p> ';
    } else if ((temp >= 61) && (temp < 70)) {
      response.answer = '<p><span>It\'s nice and warm</span> - so no need for a sweater</p> ';
    } else if ((temp >= 70) && (temp < 79)) {
      response.answer = '<p><span>It\'s pretty warm</span> - so bring some water</p>';
    } else if ((temp >= 79) && (temp < 88)) {
      response.answer = '<p><span>It\'s very warm out there</span> - don\'t forget to bring water</p> ';
      response.good = false;
    } else {
      response.answer = '<p><span>It\'s very hot<span> - definitely bring water and try to stay in the shade</p>';
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
      response.answer = '<p><span>with barely any wind</span> - so no need for an extra jacket</p>';
    } else if ((wind >= 13) && (wind < 20)) {
      response.answer = '<p><span>with a bit of a breeze</span> - it\'ll feel good on your face</p>';
    } else if ((wind >= 20) && (wind < 30)) {
      response.answer = '<p><span>with some wind</span> - an extra jacket might be a good idea</p>';
    } else {
      response.answer = '<p><span>with strong wind</span> - bring an extra jacket and be careful out there</p>';
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
      response.answer = '<p><span>and drizzling</span> - no biggie unless you\'re made out of sugar</p>';
      break;
    case 'Rain':
    case 'Rain Showers':
    case 'Freezing Rain':
    case 'Unknown Precipitation':
      response.answer = '<p><span>and raining</span> - wear a rain-jacket if you have to use the bike</p>';
      response.good = false;
      break;
    case 'Snow':
    case 'Snow Grains':
    case 'Ice Crystals':
    case 'Low Drifting Snow':
    case 'Blowing Snow':
    case 'Snow Showers':
    case 'Snow Blowing Snow Mist':
      response.answer = '<p><span>and snowing</span> - not ideal for biking so consider other transportation</p>';
      response.good = false;
      break;
    case 'Hail':
    case 'Ice Pellets':
    case 'Ice Pellet Showers':
    case 'Hail Showers':
    case 'Small Hail Showers':
    case 'Small Hail':
      response.answer = '<p><span>and hailing</span> - please leave your bike at home. In fact, stay in yourself if you can</p>';
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
      response.answer = '<p><span>and foggy</span> - be very careful and don\'t forget your lights</p>';
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
      response.answer = '<p><span>and smoky</span> - be very careful and don\'t forget your lights</p>';
      response.good = false;
      break;
    case 'Thunderstorm':
    case 'Thunderstorms and Rain':
    case 'Thunderstorms and Snow':
    case 'Thunderstorms and Ice Pellets':
    case 'Thunderstorms with Hail':
    case 'Thunderstorms with Small Hail':
      response.answer = '<p><span>with thunderstorms</span> - please leave your bike at home. In fact, stay in yourself if you can</p>';
      response.good = false;
      break;
    case 'Overcast':
    case 'Partly Cloudy':
    case 'Mostly Cloudy':
    case 'Scattered Clouds':
      response.answer = '<p><span>and overcast</span> - so shades are only for looks</p>';
      break;
    case 'Clear':
      response.answer = '<p><span>and clear</span> - put on those shades and enjoy the sun on your face</p>';
      break;
    case 'Squall':
      response.answer = '<p><span>and there\'s squalls</span> - be very careful if you decide to bike it</p>';
      response.good = false;
    case 'Funnel Cloud':
      response.answer = '<p><span>and there\'s funnel clouds</span> - be very careful if you decide to bike it</p>';
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
      answer = '<p><span>The sun will rise at ' + loc.sunrise + '</span> - so bring some lights if you\'re out early</p>';
    } else {
      answer = '<p><span>The sun will set at ' + loc.sunset + '</span> - so bring some lights if you\'re out early</p>';

    }
    return answer;
  };

  locationView.showRec = function (loc){
    var temp = locationView.recTemp(loc.temperature);
    var wind = locationView.recWind(loc.windSpeed);
    var condi = locationView.recCondi(loc.condition);
    var sunRiseSet = locationView.recSunRiseSet(loc);

    $('#outputTemp').html(temp.answer);
    $('#outputWind').html(wind.answer);
    $('#outputCondi').html(condi.answer);
    $('#outputSun').html(sunRiseSet);

    if (temp.good && wind.good && condi.good) {
      $('#outputRec').text('In short - It\'s a great for biking!');
    } else {
      $('#outputRec').text('Maybe leave your bike home today.');
    }
  };

  module.locationView = locationView;
})(window);
