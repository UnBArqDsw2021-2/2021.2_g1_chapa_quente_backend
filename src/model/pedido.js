const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema(
  {
    estado: {
      enum: [
        'Carrinho',
        'Pronto para fazer',
        'Preparando',
        'Coleta',
        'Rota de entrega',
        'Concluido',
        'Pronto para Coleta',
      ],
      type: String,
    },
    combo: {
      default: [],
      type: Array,
    },
    sanduiche: {
      default: [],
      type: Array,
    },
    bebida: {
      default: [],
      type: Array,
    },
    acompanhamento: {
      default: [],
      type: Array,
    },
    sobremesa: {
      default: [],
      type: Array,
    },
    cupom: {
      type: String,
    },
    valorTotal: {
      type: Number,
      required: true,
    },
    cliente: {
      type: String,
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
