var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var api = express();

    api.use(bodyParser.urlencoded({ extended = true }));
    load('routes', {cwd = 'api'})
        .then('infra')
        .into(api);

    return api;
}