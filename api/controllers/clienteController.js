var mongoose;
var Cliente;

function ClienteController() { }

ClienteController.prototype.listarClientes = function(callback) {
  // Listar todos os clientes
  Cliente.find({}, callback);
};

ClienteController.prototype.salvarCliente = function(clienteBody, callback) {
  // Executa validação da estrutura do cliente informado e retorna o erro em caso de falha.
  // Em caso de sucesso prossegue com a criação ou atualização do cliente.
  var cliente = new Cliente(clienteBody);

  var error = cliente.validateSync();

  if (error) {
    callback(error.errors);
  } else {
    Cliente.findOneAndUpdate({ cpf: clienteBody.cpf }, clienteBody, { upsert: true, new: true }, callback);
  }
};

ClienteController.prototype.procurarCliente = function(cpfPesquisa, callback) {
  // Procurar o cliente pelo CPF especificado
  Cliente.findOne({ cpf: cpfPesquisa }, callback);
};

module.exports = function(api) {
  mongoose = api.infra.db;
  Cliente = mongoose.model('Clientes');
  return ClienteController;
};
