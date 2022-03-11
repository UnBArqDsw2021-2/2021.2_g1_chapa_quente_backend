const mongoose = require('mongoose');
const { pessoaSchema } = require('./pessoa');
const { extend } = require('../utils/extend');

const entregadorSchema = extend(pessoaSchema, {
  placaMoto: String,
});

const Entregador = mongoose.model('Entregador', entregadorSchema);

module.exports = { Entregador };
