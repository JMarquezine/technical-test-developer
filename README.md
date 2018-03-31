# PROPOSED SOLUTION

Clients Api created to handle requests of Creation, Update and Search using the following requirements:
  - Client identification will be a CPF*.
  - CPF must be valid.
  - Client is allowed to have only one address.
  - Client is allowed to have multiple phone numbers.
  - Client has a Name, E-mail and Marital Status.
  - All data is mandatory, system will prevent registrations with missing information.

# HOW TO RUN

First we'll install npm packages

```shell
$ npm install
```

After we should run server.js
```shell
$ node server.js
```

And now open browser and access http://localhost:8080/.
It should return a json with status = 200

## GET
/api/cliente
  - Retorna todos os clientes cadastrados
  
/api/cliente?cpf=<sua_busca_aqui>
  - Retorna o cliente que possua o cpf de busca informado.

## POST
/api/cliente
  - Insere/Atualiza um novo cliente
  - Ex:
    - BODY 
    ```json
      {
            "name": <nome_do_cliente>,
            "estadoCivil": ['solteiro(a)', 'casado(a)', 'divorciado(a)'],
            "cpf": <cpf_do_cliente>,
            "email": <email_do_cliente>,
            "endereco": {
                "rua": <endereco>,
                "numero": <numero_do_endereco>,
                "cep": <cep>,
                "complemento": <complemento>,
                "bairro": <bairro>,
                "cidade": <cidade>,
                "estado": <estado>,
                "pais": <pais>
            },
            "telefone": [{
              "ddd": <ddd>,
              "numeroTelefone": <numero_do_telefone>,
              "tipo": [ 'residencial', 'celular', 'comercial' ]
            }]
          }
    ```
That's it!
