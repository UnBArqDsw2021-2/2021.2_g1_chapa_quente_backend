const mongoose = require('mongoose');
const { pessoaSchema } = require('./pessoa');
const { extend } = require('../utils/extend');
const { Funcao } = require('../utils/funcao');

const funcionarioSchema = extend(pessoaSchema, {
  funcao: {
    type: String,
    enum: Funcao,
    default: Funcao.Atendente,
    required: true,
  },
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = { Funcionario };
