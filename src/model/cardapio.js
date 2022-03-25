const mongoose = require('mongoose');

const cardapioSchema = new mongoose.Schema({
    descricao: { 
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    tipo: { 
        type: String,
        required: true,
    },
    desconto: { 
        type: Number,
        required: true, 
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
  },
  { collection: 'cardapio' },
);

const Cardapio = mongoose.model('Cardapio', cardapioSchema);

module.exports = { Cardapio, cardapioSchema };
