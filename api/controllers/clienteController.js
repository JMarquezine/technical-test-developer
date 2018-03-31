var mongoose = undefined;
var Cliente = undefined;

function clienteController() {
    
}

clienteController.prototype.listarClientes = function(callback) {
    Cliente.find({}, callback);
}

clienteController.prototype.salvarCliente = function(clienteBody, callback) {
    if (clienteBody.cpf) {
        var cliente = new Cliente(clienteBody);
        error = cliente.validateSync();
        if (error) {
            callback(error.errors);
        }
        else{
            Cliente.findOneAndUpdate({cpf: clienteBody.cpf}, clienteBody, {upsert: true, new: true}, callback);
        }
    }
}

clienteController.prototype.procurarCliente = function(cpfPesquisa, callback) {
    Cliente.findOne({cpf : cpfPesquisa}, callback);
}

module.exports = function(api) {
    mongoose = api.infra.db;
    Cliente = mongoose.model('Clientes');
    return clienteController;
}
