const mongoose = require('mongoose');
const { cardapioSchema } = require('./cardapio');
const { extend } = require('../utils/extend');

const acompanhamentoSchema = extend(cardapioSchema, {
  tamanho: {
    type: String,
    enum: ['P', 'M', 'G'],
    required: true
  },
});

const Acompanhamento = mongoose.model('Acompanhamento', acompanhamentoSchema);

module.exports = { Acompanhamento };
