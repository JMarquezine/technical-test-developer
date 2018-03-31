require('dotenv').load();
var api = require('./config/express')();

api.listen(process.env.PORTA, process.env.HOST, function() {
  console.log('Web Api rodando em http://' + process.env.HOST + ':' + process.env.PORTA + '/');
});
