/*jslint nomen:true*/

'use strict';

var fs = require('fs'),
  Q = require('q'),
  path = require("path");

module.exports = function (fileName) {
  var pathToFile = path.join(__dirname, '../data/' + fileName),
    deferred = Q.defer();

  fs.readFile(pathToFile, 'utf8', function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(JSON.parse(data));
    }
  });
  return deferred.promise;
};