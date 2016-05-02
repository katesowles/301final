console.log('got here.');

$.get('/wu/forecast/pws:1/q/97203.json')
  .done(function(data, message, xhr) {
    console.log('data = ',data);
}).error(function() {
  console.log('error.');
});
