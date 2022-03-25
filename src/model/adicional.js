const mongoose = require('mongoose');
const { cardapioSchema } = require('./cardapio');

const Adicional = mongoose.model('Adicional', cardapioSchema);

module.exports = { Adicional };
