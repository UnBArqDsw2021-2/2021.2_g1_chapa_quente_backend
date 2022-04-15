const mongoose = require('mongoose');

const enderecoFlyWeightSchema = new mongoose.Schema(
  {
    cidade: {
      type: String,
      required: true,
    },
    bairro: {
      type: String,
      required: true,
    },
  },
  { collection: 'EnderecoBase' },
);

const EnderecoFlyWeight = mongoose.model(
  'EnderecoBase',
  enderecoFlyWeightSchema,
);

module.exports = { EnderecoFlyWeight };
