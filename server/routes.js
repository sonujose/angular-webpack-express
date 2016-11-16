/*jslint unparam:true*/

'use strict';

var dataLoader = require('./libs/loader.js');

var basicHandler = function (promise, req, res) {
  promise
    .fail(function (err) {
      res.status(500).send(err);
    })
    .then(function (data) {
      res.status(200).send(data);
    });
};

module.exports = function (app) {

  app.get('/api/test', function (req, res) {
    basicHandler(dataLoader('test.json'), req, res);
  });
  app.get('/api/articles', function (req, res) {
    basicHandler(dataLoader('articleDetails.json'), req, res);
  });

};