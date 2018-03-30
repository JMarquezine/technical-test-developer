module.exports = function(api) {
    var clienteController = new api.controllers.clienteController();
    api.get('/', function(request, response) {
        response.json( {
            message: 'Api do Cliente',
            status: 200
        });
    });

    api.get('/api/cliente', function(request, response) {
        if (request.query.cpf)
        {
            clienteController.procurarCliente(request.query.cpf, function(error, result){
                if (error) {
                    console.log(error);
                    response.json({
                        message: error,
                        status: 500
                    });
                }

                response.json({
                    result
                });
            });
        } else {
            clienteController.listarClientes(function(error, result) {
                if (error) {
                    console.log(error);
                    response.json({
                        message: error,
                        status: 500
                    });
                }
    
                response.json({
                    result
                });
            });
        }
    });

    api.post('/api/cliente', function(request, response) {
        clienteController.salvarCliente(request.body, function(error, result) {
            if (error) {
                console.log(error);
                response.json({
                    message: error,
                    status: 500
                });
                return;
            }
            response.json({
                result
            });
        });
    });
}