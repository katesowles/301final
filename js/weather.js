(function(module) {
  var weather = {};

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

  // weather.updateData('97203', draw);

  module.weather = weather;
})(window);


//  This is a dummy render function, remove before production.
function draw(data) {
  console.log('data == ',data);
}
