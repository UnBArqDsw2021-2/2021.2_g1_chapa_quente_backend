const { Cliente } = require('../model/cliente');
const PessoaController = require('./pessoaController');

class ClienteController extends PessoaController {
  constructor(options) {
    if (options) {
      super(options)
    } else {
      super({ Model: Cliente });
    }
  }
  

  async create(req, res) {
    const { nome, telefone, email, senha, cpf, endereco } = req.body;

    const cliente = new Cliente({
      nome,
      telefone,
      email,
      senha,
      cpf,
      endereco,
    });

    try {
      const clienteSalvo = await cliente.save();

      res.status(201).send(clienteSalvo);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { ClienteController };
