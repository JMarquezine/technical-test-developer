module.exports = function(api) {
    api.get('/', function(request, response) {
        response.json( {
            message: 'Api do Cliente',
            status: 200
        });
    });

    api.get('/cliente', function(request, response) {
        response.send();
    });

    api.post('/cliente', function(request, response) {
        var cliente = request.body;
        
        if (cliente.cpf == null)
        {
            response;
        }

    });

    api.put('/cliente', function(request, response) {

    });

    api.delete('/cliente', function(request, response) {

    });
}