const mongoose = require('mongoose');
const { pessoaSchema } = require('./pessoa');
const { extend } = require('../utils/extend');

const clienteSchema = extend(pessoaSchema, {
  endereco: String,
});

const Cliente = mongoose.model('Client', clienteSchema);

module.exports = { Cliente };
