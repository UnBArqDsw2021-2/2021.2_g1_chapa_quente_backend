const Cardapio = require('../model/cardapio');

class CardapioController {
  constructor() {}

  async listaItemsCardapio(req, res) {
    const itemsCardapio = await Cardapio.find();
    return res.status(201).send(itemsCardapio);
  }

  async getItemCardapio(req, res) {
    const { id } = req.params;
    const itemCardapio = await Cardapio.findOne({ _id: id });
    return res.status(200).send(itemCardapio);
  }

  async cadastrarItemNoCardapio(req, res) {
    const { nome, descricao, preco, imagem } = req.body;
    try {
      const novoItem = await Cardapio.create({
        nome,
        descricao,
        preco,
        imagem,
      });
      return res.status(201).send(novoItem);
    } catch (err) {
      return res.status(400).send(err);
    }
  }

  async atualizarItem(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco, imagem } = req.body;

    try {
      const itemCadastrado = await Cardapio.findOneAndUpdate(
        { _id: id },
        {
          nome,
          descricao,
          preco,
          imagem,
        },
        { new: true },
      );
      return res.status(200).send(itemCadastrado);
    } catch (err) {
      return res.status(400).send({ message: err });
    }
  }

  async removerItemCardapio(req, res) {
    const { id } = req.params;

    try {
      const deletedItem = await Cardapio.deleteOne({ _id: id });
      return res.status(200).send(deletedItem);
    } catch (err) {
      return res.status(400).send({ message: err });
    }
  }
}

module.exports = { CardapioController };
