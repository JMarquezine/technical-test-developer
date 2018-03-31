module.exports = function(api) {
  var clienteController = new api.controllers.ClienteController();

  var tratarRetorno = function(error, result) {
    if (error) {
      return {
        message: error,
        status: 500
      };
    }

    return {
      result
    };
  };

  api.get('/', function(request, response) {
    response.json({
      message: 'Api do Cliente',
      status: 200
    });
  });

  api.get('/api/cliente', function(request, response) {
    if (request.query.cpf) {
      clienteController.procurarCliente(request.query.cpf, function(error, result) {
        response.json(tratarRetorno(error, result));
      });
    } else {
      clienteController.listarClientes(function(error, result) {
        response.json(tratarRetorno(error, result));
      });
    }
  });

  api.post('/api/cliente', function(request, response) {
    clienteController.salvarCliente(request.body, function(error, result) {
      response.json(tratarRetorno(error, result));
    });
  });
};
