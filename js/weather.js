(function(module) {
  var weather = {};

  weather.updateData = function(locObj, callback) {
    var localData;
    $.get('/wu/astronomy/hourly/q/'+ locObj.zipcode +'.json')
    .done (function(data, message, xhr) {
      if (data.hourly_forecast) {
        localData = $.extend(locObj, weather.extractData(data));
        if (callback) {
          userLocation.all.push(new userLocation(localData));
          callback(localData);
        } else {
          console.info('weather.updateData says "No callback specified"');
        }
      } else {
        console.info('Error from Weather Underground: ', data.response.error.description);
      }
    });
  };

  weather.updateCurrent = function (coordinates, callback) {
    $.get('/wu/astronomy/hourly/q/'+ coordinates.lat + ',' + coordinates.lng +'.json')
    .done(function (data, message, xhr) {
      if (data.hourly_forecast) {
        currentData = weather.extractData(data);
        locationView.showRec(currentData);
        callback(currentData);
      } else {
        console.info('Error from Weather Underground: ', data.response.error.description);
      }
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
      imageUrl:     weather.getImageUrl(data.hourly_forecast[0].condition, locationView.addIcons, data),
    };
  };

  weather.getCurrentLocation = function() {
    return currentLocation.locationCheck();
  };

  weather.getImageUrl = function (whichCondition, callback, data) {
    var savedIcon;
    for (i = 0; i < iconContext.weatherIcons.length; i++) {
      if (iconContext.weatherIcons[i].conditionText.toLowerCase() == whichCondition.toLowerCase()) {
        savedIcon = iconContext.weatherIcons[i].conditionIcon;
      }
    };
    callback(data);
    return savedIcon;
  };

  module.weather = weather;
})(window);
