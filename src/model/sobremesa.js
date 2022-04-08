const mongoose = require('mongoose');
const { cardapioSchema } = require('./cardapio');

const Sobremesa = mongoose.model('Sobremesa', cardapioSchema);

module.exports = { Sobremesa };
