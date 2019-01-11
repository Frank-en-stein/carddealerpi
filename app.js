var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  dealer = require('./api/controllers/dealerController'),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/cardDealerRoutes');
routes(app);

app.listen(port);

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["native/EventRegistrer.py"]);

pythonProcess.stdout.on('data', (data) => {
    try {
        var event = JSON.parse(data.toString());
        dealer.registerMouseWheel(event);
    } catch (err) {
        //console.log(err);
    }
});

console.log('RESTful API server started on: ' + port);
