console.log('got here.');

$.getJSON('/wu/forecast//q/97203.json')
// $.getJSON('http://api.wunderground.com/api/5e1af6276eda1937/forecast/pws:1/q/97203.json')

  .done(function(data, message, xhr) {
    console.log('data = ',data);
}).error(function() {
  console.log('error.');
});
