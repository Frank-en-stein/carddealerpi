'use strict';
module.exports = function(app) {
  var dealer = require('../controllers/dealerController');

  app.route('/deal').get(dealer.dealCards);

};
