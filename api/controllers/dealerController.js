'use strict';

exports.dealCards = function(req, res) {
  if (global.dealtCards === undefined) {
      global.dealtCards = [];
  }
  if (global.dealtCards.length === 52) {
      res.json({msg: "Game ended"});
      return;
  }

  var availableCards = [...Array(52).keys()].filter((x) => { return !global.dealtCards.includes(x); });
  var first = availableCards[Math.floor(Math.random()*100) % availableCards.length];
  glocal.dealCards.push(first);

  availableCards = [...Array(52).keys()].filter((x) => { return !global.dealtCards.includes(x); });
  var second = availableCards[Math.floor(Math.random()*100) % availableCards.length];
  global.dealtCards.push(first, second);
  res.json({cards: [first, second]});
};

exports.resetDealer = function(req, res) {
    global.dealtCards = [];
    res.json({msg: "game reset"});
};

exports.registerMouseWheel = function(event) {
    if (this.prev === undefined) {
        this.uptime = new Date();
        this.downtime = new Date();
        this.count = 0;
    }
    else {
        var now = new Date();
        if (event.rotation !== this.prev) {
            if (event.rotation === 1) this.uptime = new Date();
            else this.downtime = new Date();
        }
        var timediff = Math.abs(this.uptime.getTime() - this.downtime.getTime());
        if (timediff < 300 && timediff > 0) {
            if (this.count < 7) this.count++;
            else {
                this.count = 0;
                this.uptime = this.downtime = now;
                global.dealtCards = [];
                console.log("Dealer reset ");
            }
        }
    }
    this.prev = event.rotation;
};
