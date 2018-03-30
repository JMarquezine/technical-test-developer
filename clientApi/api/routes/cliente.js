module.exports = function(api) {
    var clienteController = new api.controllers.clienteController();
    api.get('/', function(request, response) {
        response.json( {
            message: 'Api do Cliente',
            status: 200
        });
    });

    api.get('/api/cliente', function(request, response) {
        clienteController.listarClientes(function(error, resultados) {
            if (error) {
                console.log(error);
                response.json({
                    message: error,
                    status: 500
                });
            }

            response.json({
                resultados
            });
        });
    });

    api.post('/api/cliente', function(request, response) {
        clienteController.salvarCliente(request.body, function(error, resultado) {
            if (error) {
                console.log(error);
                response.json({
                    message: error,
                    status: 500
                });
                return;
            }
            response.json({
                resultado
            });
        });
    });
}