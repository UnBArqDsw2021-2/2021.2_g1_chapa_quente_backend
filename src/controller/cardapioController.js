const { Cardapio } = require('../model/cardapio');

class CardapioController {
  Model;

  constructor(options) {
    if (this.constructor === CardapioController) {
      throw new Error('Classe Abstrata não pode ser instanciada!');
    }
    const { Model } = options;

    if (Model) {
      this.Model = Model;
    } else {
      this.Model = Cardapio;
    }
  }

  async itemCardapio(req, res) {
    const { id } = req.params;

    try {
      const itens = await this.Model.findOne({ id });
      res.send(itens);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async itensCardapio(_req, res) {
    try {
      const result = await this.Model.find();
      res.send(result);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async atualizarItem(req, res) {
    const { id } = req.params;
    const updateParams = req.body;

    try {
      const itemAtualizado = await this.Model.findOneAndUpdate(
        { id },
        updateParams,
        { new: true },
      );
      res.send(itemAtualizado);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async deletarItem(req, res) {
    const { id } = req.params;

    try {
      const itemRemovido = await this.Model.deleteOne({ id });
      res.status(204).send(itemRemovido);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = CardapioController;
