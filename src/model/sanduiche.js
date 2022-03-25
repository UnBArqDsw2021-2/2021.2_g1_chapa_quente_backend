const mongoose = require('mongoose');
const { cardapioSchema } = require('./cardapio');
const { extend } = require('../utils/extend');

const sanduicheSchema = extend(cardapioSchema, {
  adicional: {
    type: Array,
  },
});

const Sanduiche = mongoose.model('Sanduiche', sanduicheSchema);

module.exports = { Sanduiche };
