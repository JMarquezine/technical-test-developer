var mongoose = require('mongoose');
var Cliente = mongoose.model('Clientes');

function clienteController() {
    
}

clienteController.prototype.listarClientes = function(callback) {
    Cliente.find({}, callback);
}

clienteController.prototype.salvarCliente = function(clienteBody, callback) {
    var cliente = new Cliente(clienteBody);

    var clienteAtualiza = Cliente.findOne({cpf : cliente.cpf});

    if (clienteAtualiza)
    {
        clienteAtualiza = cliente;
        clienteAtualiza.update(callback);
    }
    else
    {
        cliente.save(callback);
    }
}

clienteController.prototype.procurarCliente = function(cpfPesquisa, callback) {
    return Cliente.findOne({cpf : cpfPesquisa}, callback);
}

module.exports = function() {
    return clienteController;
}
