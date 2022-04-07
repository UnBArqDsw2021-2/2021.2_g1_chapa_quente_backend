const { Cliente } = require('../model/cliente');
const validator = require('../utils/validator');
const PessoaController = require('./pessoaController');
const Endereco = require('../model/endereco');

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

    try {
      const { rua, numero, complemento, bairro, cidade } = endereco;
      const enderecoObject = new Endereco(rua, numero, complemento);
  
      await enderecoObject.setFlyWeight(bairro, cidade);

      const enderecoSalvo = await enderecoObject.save();

      const cliente = new Cliente({
        nome,
        telefone,
        email,
        senha,
        cpf,
        enderecoId: enderecoSalvo.id,
      });

      validator.validatePassword(senha);

      const clienteSalvo = await cliente.save();

      res.status(201).send(clienteSalvo);
    } catch (err) {
      res.send({ erro: err.message, stack: err.stack });
    }
  }
}

module.exports = { ClienteController };
