var mongoose;
var Cliente;

function ClienteController() {}

ClienteController.prototype.listarClientes = function(callback) {
  Cliente.find({}, callback);
};

ClienteController.prototype.salvarCliente = function(clienteBody, callback) {
  if (clienteBody.cpf) {
    var cliente = new Cliente(clienteBody);

    var error = cliente.validateSync();

    if (error) {
      callback(error.errors);
    } else {
      Cliente.findOneAndUpdate({cpf: clienteBody.cpf}, clienteBody, {upsert: true, new: true}, callback);
    }
  }
};

ClienteController.prototype.procurarCliente = function(cpfPesquisa, callback) {
  Cliente.findOne({cpf: cpfPesquisa}, callback);
};

module.exports = function(api) {
  mongoose = api.infra.db;
  Cliente = mongoose.model('Clientes');
  return ClienteController;
};
