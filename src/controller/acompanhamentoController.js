const { Acompanhamento } = require('../model/acompanhamento');
const CardapioController = require('./cardapioController');

class AcompanhamentoController extends CardapioController {
  constructor(options) {
    if (options) {
      super(options);
    } else {
      super({ Model: Acompanhamento });
    }
  }

  async create(req, res) {
    const { descricao, preco, tipo, desconto, tamanho, isAvailable } = req.body;

    const acompanhamento = new Acompanhamento({
      descricao,
      preco,
      tipo,
      desconto,
      tamanho,
      isAvailable,
    });

    try {
      const acompanhamentoSalvo = await acompanhamento.save();
      res.status(201).send(acompanhamentoSalvo);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { AcompanhamentoController };
