const { Pedido } = require('../model/pedido');

class PedidoController {
    Model;
    constructor() {
        this.Model = Pedido;
    }

  async getOrder(req, res) {
    const { id } = req.params;
    try {
      const order = await this.Model.findOne({ id });
      return res.send(order);
    } catch (err) {
      return res.send({ err: err.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await this.Model.find();
      return res.send(orders);
    } catch (err) {
      return res.send({ err: err.message });
    }
  }

  async createOrder(req, res) {
    const {
      estado,
      combo,
      sanduiche,
      bebida,
      acompanhamento,
      sobremesa,
      cupom,
      valorTotal,
      cliente,
      entregador,
      retiradaLocal,
    } = req.body;

    const createdOrder = this.Model({
      estado,
      combo,
      sanduiche,
      bebida,
      acompanhamento,
      sobremesa,
      cupom,
      valorTotal,
      cliente,
      entregador,
      retiradaLocal,
    });

    try {
      const pedido = await createdOrder.save();
      return res.status(201).send(pedido);
    } catch (err) {
      return res.send({ erro: err.message });
    }
  }

  async updateOrder(req, res) {
    const { estado, entregador } = req.body;

    try {
      const updatedOrder = await this.Model.findOneAndUpdate(
        {
          estado,
          entregador,
        },
        { new: true },
      );
      return res.send(updatedOrder);
    } catch (err) {
      return res.send({ err: err.message });
    }
  }

  async deleteOrder(req, res) {
    const { id } = req.params;

    try {
      const deletedOrder = await this.Model.deleteOne({ id });
      return res.status(204).send(deletedOrder);
    } catch (err) {
      return res.send({ erro: err.message });
    }
  }
}

module.exports = { PedidoController };
