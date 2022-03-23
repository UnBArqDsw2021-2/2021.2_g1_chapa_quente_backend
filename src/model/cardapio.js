const mongoose = require('mongoose');

const cardapioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true
  },
  preco: {
    type: Number,
    require: true
  },
  imagem: {
    type: String,
    require: false
  },
});

module.exports = mongoose.model('Cardapio', cardapioSchema);
