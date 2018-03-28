var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    name: {
        type: String,
        required: 'Nome do Cliente é Obrigatório'
    },
    cpf: {
        type: String,
        required: 'CPF do Cliente é Obrigatório'
    },
    email: {
        type: String,
        required: 'E-mail do Cliente é Obrigatório'
    },
    maritalStatus: {
        type: String,
        enum: ['solteiro(a)', 'casado(a)', 'divorciado(a)']
    },
    createdon: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);