const { Cliente } = require('../model/cliente');

class ClienteController {
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

  async update(req, res) {
    const { email } = req.params;
    const updateParams = req.body;

    try {
      const cliente = await Cliente.findOneAndUpdate({ email }, updateParams, {
        new: true,
      });

      res.send(cliente);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async index(_req, res) {
    try {
      const result = await Cliente.find();

      res.send(result);
    } catch (err) {
      res.send({ err: err.message });
    }
  }

  async destroy(req, res) {
    const { email } = req.params;

    try {
      await Cliente.deleteOne({ email });

      res.status(204).send();
    } catch (err) {
      res.send({ erro: err.message });
    }
  }
}

module.exports = { ClienteController: new ClienteController() };
