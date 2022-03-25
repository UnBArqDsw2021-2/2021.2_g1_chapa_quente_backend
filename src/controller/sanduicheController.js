const { Sanduiche } = require('../model/sanduiche');
const CardapioController = require('./cardapioController');

class SanduicheController extends CardapioController {
  constructor(options) {
    if (options) {
      super(options);
    } else {
      super({ Model: Sanduiche });
    }
  }

  async create(req, res) {
    const { descricao, preco, tipo, desconto, adicional, isAvailable } = req.body;

    const sanduiche = new Sanduiche({
      descricao,
      preco,
      tipo,
      desconto,
      adicional,
      isAvailable,
    });

    try {
      const sanduicheSalva = await sanduiche.save();
      res.status(201).send(sanduicheSalva);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { SanduicheController };
