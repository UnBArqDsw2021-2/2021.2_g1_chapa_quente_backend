const { Entregador } = require('../model/entregador');
const PessoaController = require('./pessoaController');

class EntregadorController extends PessoaController {
  constructor(options) {
    if (options) {
      super(options)
    } else {
      super({ Model: Entregador });
    }
  }

  async create(req, res) {
    const { nome, telefone, email, senha, cpf, placaMoto } = req.body;

    const entregador = new Entregador({
      nome,
      telefone,
      email,
      senha,
      cpf,
      placaMoto,
    });

    try {
      const entregadorSalvo = await entregador.save();

      res.status(201).send(entregadorSalvo);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { EntregadorController };
