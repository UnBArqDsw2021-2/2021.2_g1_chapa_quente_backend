const { Sobremesa } = require('../model/sobremesa');
const CardapioController = require('./cardapioController');

class SobremesaController extends CardapioController {
  constructor(options) {
    if (options) {
      super(options);
    } else {
      super({ Model: Sobremesa });
    }
  }

  async create(req, res) {
    const { descricao, preco, tipo, desconto, isAvailable } = req.body;

    const sobremesa = new Sobremesa({
      descricao,
      preco,
      tipo,
      desconto,
      isAvailable,
    });

    try {
      const sobremesaSalva = await sobremesa.save();
      res.status(201).send(sobremesaSalva);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { SobremesaController };
