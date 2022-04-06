const mongoose = require('mongoose');

const cartaoSchema = new mongoose.Schema({
    numero: { 
        type: String,
        required: true,
    },
    titular: { 
        type: String,
        required: true,
    },
    cvc: { 
        type: String,
        required: true,
    },
    validade: { 
        type: Date,
        required: true,
    },
    bandeira: {
        type: String,
        required: true,
    }
  },
  { collection: 'cartao' },
);

const Cartao = mongoose.model('Cartao', cartaoSchema);

module.exports = { Cartao, cartaoSchema };