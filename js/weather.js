(function(module) {
  var weather = {};

  weather.updateData = function(locObj, callback) {
    var localData;
    $.get('/wu/astronomy/hourly/q/'+ locObj.zipcode +'.json')
    .done (function(data, message, xhr) {
      localData = $.extend(locObj, weather.extractData(data));
      if (callback) {
        userLocation.all.push(new userLocation(localData));
        callback(localData);
      } else {
        console.log('weather.updateData says "No callback specified"');
      }
    });
  };

  weather.updateCurrent = function (coordinates, callback) {
    $.get('/wu/astronomy/hourly/q/'+ coordinates.lat + ',' + coordinates.lng +'.json')
    .done(function (data, message, xhr) {
      currentData = weather.extractData(data);
      callback(currentData);
    });
  };

  weather.extractData = function(data) {
    return {
      temperature:  data.hourly_forecast[0].temp.english,
      condition:    data.hourly_forecast[0].condition,
      windSpeed:    data.hourly_forecast[0].wspd.english,
      windDir:      data.hourly_forecast[0].wdir.dir,
      sunrise:      data.sun_phase.sunrise.hour +':'+ data.sun_phase.sunrise.minute,
      sunset:       data.sun_phase.sunset.hour +':'+ data.sun_phase.sunset.minute,
    };
  };

  weather.getCurrentLocation = function() {
    return currentLocation.locationCheck();
  };

  weather.insertFavoriteIcons = function(data) {
    
  };

  weather.insertCurrentIcon = function () {

  };


  module.weather = weather;
})(window);
