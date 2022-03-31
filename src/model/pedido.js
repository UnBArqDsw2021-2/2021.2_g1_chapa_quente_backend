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
