const { Types } = require('mongoose');
const { Pedido } = require('../model/pedido');
const { Estado } = require('../utils/estadoPedido');

const ObjectId = Types.ObjectId;
class PedidoController {
  Model;

  constructor() {
    this.Model = Pedido;
  }

  async getOrderDetails(req, res) {
    const { id } = req.params;
    try {
      const dadosPedido = await this.Model.aggregate([
        { $match: { _id: ObjectId(id) } },
        {
          $lookup: {
            from: "clients",
            localField: "clienteId",
            foreignField: "_id",
            as: "dadosCliente"
          },
        },
        {$unwind:'$dadosCliente'},
        {
          $project: {
            "dadosCliente._id": 0,
            "dadosCliente.email": 0,
            "dadosCliente.senha": 0,
            "dadosCliente.cpf": 0,
            "dadosCliente.telefone": 0,
          }
        }
      ])
      return res.send(dadosPedido);
    } catch (err) {
      return res.send({ err: err.message });
    }
  }

  async getOrder(req, res) {
    const { id } = req.params;
    try {
      const order = await this.Model.findOne({ id });
      return res.send(order);
    } catch (err) {
      return res.status(400).send({ erro: err.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await this.Model.find();
      return res.send(orders);
    } catch (err) {
      return res.send({ erro: err.message });
    }
  }

  async getToDoOrders(_req, res) {
    try {
      const toDoOrders = await this.Model.find({
        estado: { $in: [Estado.ProntoParaFazer, Estado.Preparando] },
      });
      return res.send(toDoOrders);
    } catch (err) {
      return res.status(400).send({ erro: err.message });
    }
  }

  async getClientOrdersList(req, res) {
    const { id } = req.params;
    try {
      const orders = await this.Model.find({ clienteId: id });
      return res.send(orders);
    } catch (e) {
      return res.send({ erro: err.message });
    }
  }

  async startOrder(req, res) {
    try {
      const { id } = req.params;
      const pedido = await this.Model.findByIdAndUpdate(
        id,
        {
          estado: Estado.Preparando,
        },
        { new: true },
      );
      return res.send(pedido);
    } catch (err) {
      return res.status(400).send({ erro: err.message });
    }
  }

  async finishCookOrder(req, res) {
    try {
      const { id } = req.params;
      const { retiradaLocal } = this.Model.findById(id);
      const pedido = await this.Model.findByIdAndUpdate(
        id,
        {
          estado: retiradaLocal ? Estado.ProntoParaColeta : Estado.Coleta
        },
        { new: true },
      );
      return res.send(pedido);
    } catch (err) {
      return res.status(400).send({ erro: err.message });
    }
  }

  async createOrder(req, res) {
    const {
      combo,
      sanduiche,
      bebida,
      acompanhamento,
      sobremesa,
      cupom,
      valorTotal,
      clienteId,
      entregador,
      retiradaLocal,
    } = req.body;

    const createdOrder = new this.Model({
      estado: Estado.ProntoParaFazer,
      combo,
      sanduiche,
      bebida,
      acompanhamento,
      sobremesa,
      cupom,
      valorTotal,
      clienteId,
      entregador,
      retiradaLocal,
    });

    try {
      const pedido = await createdOrder.save();
      return res.status(201).send(pedido);
    } catch (err) {
      return res.status(400).send({ erro: err.message });
    }
  }

  async updateOrder(req, res) {
    const { id } = req.params;
    const { estado, entregador } = req.body;

    try {
      const updatedOrder = await this.Model.findOneAndUpdate({ _id: id },
        {
          estado,
          entregador,
        },
        { new: true },
      );
      return res.send(updatedOrder);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  async deleteOrder(req, res) {
    const { id } = req.params;

    try {
      const deletedOrder = await this.Model.deleteOne({ id });
      return res.status(204).send(deletedOrder);
    } catch (err) {
      return res.status(400).send({ erro: err.message });
    }
  }
}

module.exports = { PedidoController };
