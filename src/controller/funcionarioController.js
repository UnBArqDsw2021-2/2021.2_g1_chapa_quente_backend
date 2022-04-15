const { Funcionario } = require('../model/funcionario');
const PessoaController = require('./pessoaController');
const validator = require('../utils/validator');

class FuncionarioController extends PessoaController {
  constructor(options) {
    if (options) {
      super(options);
    } else {
      super({ Model: Funcionario });
    }
  }

  async create(req, res) {
    const { nome, telefone, email, senha, cpf, funcao } = req.body;

    const funcionario = new Funcionario({
      nome,
      telefone,
      email,
      senha,
      cpf,
      funcao,
    });

    try {
      validator.validatePassword(senha);

      const funcionarioSalvo = await funcionario.save();

      res.status(201).send(funcionarioSalvo);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { FuncionarioController };
