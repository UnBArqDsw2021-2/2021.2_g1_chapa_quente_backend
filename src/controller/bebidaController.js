const { Bebida } = require('../model/bebida');
const CardapioController = require('./cardapioController');

class BebidaController extends CardapioController {
  constructor(options) {
    if (options) {
      super(options);
    } else {
      super({ Model: Bebida });
    }
  }

  async create(req, res) {
    const { descricao, preco, tipo, desconto, comGelo, tamanho, isAvailable } =
      req.body;

    const bebida = new Bebida({
      descricao,
      preco,
      tipo,
      desconto,
      comGelo,
      tamanho,
      isAvailable,
    });

    try {
      const bebidaSalva = await bebida.save();
      res.status(201).send(bebidaSalva);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { BebidaController };
