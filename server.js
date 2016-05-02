var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var proxyWU = function(request, response) {
  console.log('Routing Weather Underground request for', request.params[0]);
  var queryUrl = 'http://api.wunderground.com/api/' + process.env.WU_API_KEY + '/' + request.params[0];
  console.log('Full url:' , queryUrl);
  (requestProxy({
    url: queryUrl,
  }))(request, response, function () {console.log('response = ', response);});
};

app.get('/wu/*', proxyWU);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
