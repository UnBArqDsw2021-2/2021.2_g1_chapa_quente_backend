const { Pessoa } = require('../model/pessoa');

class PessoaController {
  Model;

  constructor(options) {
    if (this.constructor === PessoaController) {
      throw new Error('Classe Abstrata não pode ser instanciada!');
    }
    const { Model } = options;

    if (Model) {
      this.Model = Model;
    } else {
      this.Model = Pessoa;
    }
  }

  async create(req, res) {
    const { nome, telefone, email, senha, cpf } = req.body;

    const pessoa = this.Model({
      nome,
      telefone,
      email,
      senha,
      cpf,
    });

    try {
      const pessoaSalva = await pessoa.save();

      res.status(201).send(pessoaSalva);
    } catch (err) {
      res.send({ erro: err.message });
    }
  }

  async destroy(req, res) {
    const { email } = req.params;

    try {
      await this.Model.deleteOne({ email });

      res.status(204).send();
    } catch (err) {
      res.send({ erro: err.message });
    }
  }

  async index(_req, res) {
    try {
      const result = await this.Model.find();

      res.send(result);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async profile(req, res) {
    const { id } = req.pessoaId;
    try {
      const result = await this.Model.findById(id);

      res.send(result);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async update(req, res) {
    const { email } = req.params;
    const updateParams = req.body;

    try {
      const cliente = await this.Model.findOneAndUpdate(
        { email },
        updateParams,
        {
          new: true,
        },
      );

      res.send(cliente);
    } catch (err) {
      res.send({ err: err.message });
    }
  }
}

module.exports = PessoaController;
