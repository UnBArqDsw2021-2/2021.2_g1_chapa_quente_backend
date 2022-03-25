const { Adicional } = require('../model/adicional');
const CardapioController = require('./cardapioController');

class AdicionalController extends CardapioController {
  constructor(options) {
    if (options) {
      super(options);
    } else {
      super({ Model: Adicional });
    }
  }

  async create(req, res) {
    const { descricao, preco, tipo, desconto, isAvailable } = req.body;

    const adicional = new Adicional({
      descricao,
      preco,
      tipo,
      desconto,
      isAvailable,
    });

    try {
      const adicionalSalvo = await adicional.save();
      res.status(201).send(adicionalSalvo);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { AdicionalController };
