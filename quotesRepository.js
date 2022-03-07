"use strict";

var replikler = require("./replikler");

module.exports = {
  getRandom: function getRandom(numberOfreplikler) {
    var limit =
      numberOfreplikler > replikler.length
        ? replikler.length
        : numberOfreplikler;

    var out = new Array(limit);
    var replik;

    for (var i = 0; i < limit; i++) {
      do {
        replik = replikler[Math.floor(Math.random() * replikler.length)];
      } while (out.indexOf(replik) > -1);
      out[i] = replik;
    }

    return out;
  },
};
