const { Cliente } = require('../model/cliente');
const jwt = require('../utils/jwt');
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

  async signIn(req, res) {
    const { email, senha } = req.body;

    try {
      const cliente = await Cliente.findOne({ email });

      if (!cliente)
        throw new Error(`Não foi achado nenhum cliente com email ${email}`);

      if (cliente.senha !== senha) throw new Error('Senha incorreta');

      const token = jwt.sign({ id: cliente.id });

      res.send({ cliente, token });
    } catch (err) {
      res.status(400).send({ erro: err.message });
    }
  }
}

module.exports = { ClienteController };
