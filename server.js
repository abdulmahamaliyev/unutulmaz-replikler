"use strict";

var express = require("express");
var repliklerRepository = require("./replikTabani");
var app = express();
var port = process.env.PORT || 3001;

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/v1/replikler/:num?", function (req, res) {
  res.send(repliklerRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
  console.log("Server running on port", port);
});
