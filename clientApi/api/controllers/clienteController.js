var mongoose = require('mongoose');
var Cliente = mongoose.model('Clientes');

function clienteController() {
    
}

clienteController.prototype.listarClientes = function(callback) {
    Cliente.find({}, callback);
}

clienteController.prototype.salvarCliente = function(clienteBody, callback) {
    if (clienteBody.cpf) {
        Cliente.findOneAndUpdate({cpf: clienteBody.cpf}, clienteBody, {upsert: true, new: true}, callback);
    }
}

clienteController.prototype.procurarCliente = function(cpfPesquisa, callback) {
    Cliente.findOne({cpf : cpfPesquisa}, callback);
}

module.exports = function(api) {
    return clienteController;
}
