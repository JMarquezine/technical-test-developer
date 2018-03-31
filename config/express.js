var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
  var api = express();

  api.use(bodyParser.json());
  api.use(bodyParser.urlencoded({ extended: true }));

  // Carregamento dos modulos necessários
  // CWD: Carrega somente os modulos que estão dentro da pasta api, para que o load não pesquise no projeto inteiro.
  load('infra', { cwd: 'api' })
    .then('models')
    .then('controllers')
    .then('routes')
    .into(api);

  return api;
};
