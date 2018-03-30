const isCpf = require('iscpf');

module.exports = function(api){
    var Schema = api.infra.db.Schema;

    var TelefoneSchema = new Schema({
        ddd: {
            type: String
        },
        numeroTelefone: {
            type: String
        },
        tipo: {
            type: String,
            enum: ['residencial', 'celular', 'comercial']
        }
    });

    var EnderecoSchema = new Schema({
        rua: {
            type: String
        },
        numero: {
            type: Number
        },
        complemento: {
            type: String
        },
        bairro: {
            type: String
        },
        cidade: {
            type: String
        },
        cep: {
            type: String
        },
        estado: {
            type: String
        },
        pais: {
            type: String
        }
    });

    var ClienteSchema = new Schema({
        name: {
            type: String,
            required: 'Nome do Cliente é Obrigatório'
        },
        cpf: {
            type: String,
            validate: {
                validator: function(cpf) {
                    return isCpf(cpf);
                },
                message: 'CPF informado é inválido!'
            },
            required: 'CPF do Cliente é Obrigatório'
        },
        endereco: {
            type: EnderecoSchema,
            required: 'Endereço do Cliente é Obrigatório'
        },
        telefone: 
            [ TelefoneSchema ],
        email: {
            type: String,
            required: 'E-mail do Cliente é Obrigatório'
        },
        estadoCivil: {
            type: String,
            enum: ['solteiro(a)', 'casado(a)', 'divorciado(a)'],
            required: 'Estado Civil do Cliente é Obrigatório'
        },
        createdon: {
            type: Date,
            default: Date.now
        }
    });

    return api.infra.db.model('Clientes', ClienteSchema);
}