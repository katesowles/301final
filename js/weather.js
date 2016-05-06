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
    console.log(data);
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

  weather.getImageUrl = function (whichCondition, callback) {
    var savedIcon;
    for (i = 0; i < iconContext.weatherIcons.length; i++) {
      if (iconContext.weatherIcons[i].conditionText.toLowerCase() == whichCondition.toLowerCase()) {
        console.log('Icon Returned: ', iconContext.weatherIcons[i].conditionIcon);
        console.log('Text Returned: ', iconContext.weatherIcons[i].conditionText.toLowerCase());
        console.log('Which Condition?: ', whichCondition.toLowerCase());
        savedIcon = iconContext.weatherIcons[i].conditionIcon;
      }
    };
    callback(savedIcon);
    return savedIcon;
  };



  module.weather = weather;
})(window);
