module.exports = function(api){
    var Schema = api.infra.db.Schema;

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
            required: 'CPF do Cliente é Obrigatório'
        },
        endereco: {
            type: EnderecoSchema,
            required: 'Endereço do Cliente é Obrigatório'
        },
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