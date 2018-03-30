var host = "localhost";
var porta = 8080;

var mongoose = require('mongoose');

var api = require('./config/express')();

mongoose.connect('mongodb://localhost/clientedb'); 

api.listen(porta, host, function() {
    console.log("Web Api rodando em http://" + host + ":" + porta + "/");
});