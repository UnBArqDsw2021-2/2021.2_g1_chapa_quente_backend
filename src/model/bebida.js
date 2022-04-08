const mongoose = require('mongoose');
const { cardapioSchema } = require('./cardapio');
const { extend } = require('../utils/extend');

const bebidaSchema = extend(cardapioSchema, {
  comGelo: {
    type: Boolean,
    required: true,
    default: false
  },
  tamanho: {
    type: String,
    enum: ['P', 'M', 'G'],
    required: true
  }
});

const Bebida = mongoose.model('Bebida', bebidaSchema);

module.exports = { Bebida };
