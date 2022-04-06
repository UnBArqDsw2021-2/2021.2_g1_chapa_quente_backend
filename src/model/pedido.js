const mongoose = require('mongoose');
const { Estado } = require('../utils/estadoPedido');

const pedidoSchema = new mongoose.Schema(
  {
    estado: {
      enum: Estado,
      type: String,
    },
    combo: {
      type: Object,
    },
    sanduiche: {
      type: Object,
    },
    bebida: {
      type: Object,
    },
    acompanhamento: {
      type: Object,
    },
    sobremesa: {
      type: Object,
    },
    cupom: {
      type: String,
    },
    valorTotal: {
      type: Number,
      required: true,
    },
    clienteId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    entregador: {
      type: String,
    },
    retiradaLocal: {
      type: Boolean,
    },
  },
  { collection: 'pedido' },
);

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = { Pedido, pedidoSchema };
