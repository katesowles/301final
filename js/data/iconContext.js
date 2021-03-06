(function(module) {

  iconContext = {};

  iconContext.weatherIcons = [
    {
      conditionText : 'Light Drizzle',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Drizzle',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Heavy Drizzle',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Light Rain',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Rain',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Heavy Rain',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Light Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Snow Grains',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Snow Grains',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Snow Grains',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Ice Crystals',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Ice Crystals',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Ice Crystals',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Ice Pellets',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Ice Pellets',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Heavy Ice Pellets',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Light Hail',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Hail',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Heavy Hail',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Light Mist',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Mist',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Heavy Mist',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Light Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Heavy Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Light Fog Patches',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Fog Patches',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Heavy Fog Patches',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Light Smoke',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Smoke',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Smoke',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Volcanic Ash',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Volcanic Ash',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Volcanic Ash',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Haze',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Haze',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Haze',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Spray',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Spray',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Heavy Spray',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Light Dust Whirls',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Dust Whirls',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Dust Whirls',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Sandstorm',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Sandstorm',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Sandstorm',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Low Drifting Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Low Drifting Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Low Drifting Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Low Drifting Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Low Drifting Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Low Drifting Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Low Drifting Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Low Drifting Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Low Drifting Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Blowing Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Blowing Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Blowing Snow',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Blowing Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Blowing Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Blowing Widespread Dust',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Blowing Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Blowing Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Heavy Blowing Sand',
      conditionIcon : 'img/weather/Smoke.svg'
    },
    {
      conditionText : 'Light Rain Mist',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Rain Mist',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Heavy Rain Mist',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Light Rain Showers',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Rain Showers',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Heavy Rain Showers',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Light Snow Showers',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Snow Showers',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Show Showers',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Snow Blowing Snow Mist',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Snow Blowing Snow Mist',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Heavy Snow Blowing Snow Mist',
      conditionIcon : 'img/weather/Snow.svg'
    },
    {
      conditionText : 'Light Ice Pellet Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Ice Pellet Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Heavy Ice Pellet Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Light Hail Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Hail Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Heavy Hail Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Light Small Hail Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Small Hail Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Heavy Small Hail Showers',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Light Thunderstorm',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Thunderstorm',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Heavy Thunderstorm',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Light Thunderstorms and Rain',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Thunderstorms and Rain',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Heavy Thunderstorms and Rain',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Light Thunderstorms and Snow',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Thunderstorms and Snow',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Heavy Thunderstorms and Snow',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Light Thunderstorms and Ice Pellets',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Thunderstorms and Ice Pellets',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Heavy Thunderstorms and Ice Pellets',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Light Thunderstorms with Hail',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Thunderstorms with Hail',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Heavy Thunderstorms with Hail',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Light Thunderstorms with Small Hail',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Thunderstorms with Small Hail',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Heavy Thunderstorms with Small Hail',
      conditionIcon : 'img/weather/Lightening.svg'
    },
    {
      conditionText : 'Light Freezing Drizzle',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Freezing Drizzle',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Heavy Freezing Drizzle',
      conditionIcon : 'img/weather/Drizzle.svg'
    },
    {
      conditionText : 'Light Freezing Rain',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Freezing Rain',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Heavy Freezing Rain',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Light Freezing Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Freezing Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Heavy Freezing Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Patches of Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Shallow Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Partial Fog',
      conditionIcon : 'img/weather/Fog.svg'
    },
    {
      conditionText : 'Overcast',
      conditionIcon : 'img/weather/Overcast.svg'
    },
    {
      conditionText : 'Clear',
      conditionIcon : 'img/weather/Sun.svg'
    },
    {
      conditionText : 'Partly Cloudy',
      conditionIcon : 'img/weather/Overcast.svg'
    },
    {
      conditionText : 'Mostly Cloudy',
      conditionIcon : 'img/weather/Overcast.svg'
    },
    {
      conditionText : 'Scattered Clouds',
      conditionIcon : 'img/weather/Overcast.svg'
    },
    {
      conditionText : 'Small Hail',
      conditionIcon : 'img/weather/Hail.svg'
    },
    {
      conditionText : 'Squalls',
      conditionIcon : 'img/weather/Windy.svg'
    },
    {
      conditionText : 'Funnel Clouds',
      conditionIcon : 'img/weather/Tornado.svg'
    },
    {
      conditionText : 'Unknown Precipitation',
      conditionIcon : 'img/weather/Rain.svg'
    },
    {
      conditionText : 'Unknown',
      conditionIcon : 'img/weather/Shades.svg'
    }
  ];

  module.iconContext = iconContext;
})(window);
