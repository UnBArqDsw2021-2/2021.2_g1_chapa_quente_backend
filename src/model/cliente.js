const mongoose = require('mongoose');
const { pessoaSchema } = require('./pessoa');
const { extend } = require('../utils/extend');

const clienteSchema = extend(pessoaSchema, {
  enderecoId: {
    type: mongoose.Types.ObjectId,
    required: true,
  }
});

const Cliente = mongoose.model('Client', clienteSchema);

module.exports = { Cliente };
