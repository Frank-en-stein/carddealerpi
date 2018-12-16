'use strict';

exports.dealCards = function(req, res) {
  if (global.dealtCards === undefined) {
      global.dealtCards = [];
  }
  //if (global.dealtCards.length = 52) return resetDealer(req, res);

  var availableCards = [...Array(52).keys()].filter((x) => { return !global.dealtCards.includes(x); });

  var first = availableCards[Math.floor(Math.random()*100) % availableCards.length];
  var second = availableCards[Math.floor(Math.random()*100) % availableCards.length];
  global.dealtCards.push(first, second);
  res.json({cards: [first, second]});
};

exports.resetDealer = function(req, res) {
    global.dealtCards = [];
    res.json({msg: "game reset"})
};

exports.registerMouseWheel = function(event) {
    
};
