var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  ioHook = require('ioHook'),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/cardDealerRoutes');
routes(app);

app.listen(port);

ioHook.on('mousewheel', event => {
  registerMouseWheel(event);
});
ioHook.start();

console.log('RESTful API server started on: ' + port);
