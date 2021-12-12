'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};

exports.greeting = function(event, context, callback) {
  var greeting = {greeting: 'Hello from the Lambdas!'};
  var result = {
    statusCode: 200,
    body: greeting,
    headers: {'content-type': 'application/json'}
  };

  callback(null, result);
};
