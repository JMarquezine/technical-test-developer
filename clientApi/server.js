var host = "localhost";
var porta = 8080;

var api = require('.config/express')();

api.listen(porta, host, function() {
    console.log("Web Api rodando em http://" + ip + ":" + porta + "/");
});