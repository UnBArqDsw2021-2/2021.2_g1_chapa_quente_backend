const { Router } = require('express');
const { ClienteController } = require('../controller/clienteController');
const { EntregadorController } = require('../controller/entregadorController');
const {
  FuncionarioController,
} = require('../controller/funcionarioController');
const AutenticacaoController = require('../controller/autenticacaoController');
const verificaToken = require('../midllewares/verificaToken');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send({ message: 'API Online! =)' });
});

// Autenticação
routes.post('/signin', AutenticacaoController.signIn);

// Cliente
const clienteController = new ClienteController();
routes.post('/cliente', (req, res) => clienteController.create(req, res));
routes.get('/cliente/all', verificaToken, (req, res) =>
  clienteController.index(req, res),
);
routes.get('/cliente/profile', verificaToken, (req, res) =>
  clienteController.profile(req, res),
);
routes.delete('/cliente/:email', verificaToken, (req, res) =>
  clienteController.destroy(req, res),
);
routes.put('/cliente/:email', verificaToken, (req, res) =>
  clienteController.update(req, res),
);

// Entregador
const entregadorController = new EntregadorController();
routes.post('/entregador', (req, res) => entregadorController.create(req, res));
routes.get('/entregador/all', verificaToken, (req, res) =>
  entregadorController.index(req, res),
);
routes.get('/entregador/profile', verificaToken, (req, res) =>
  entregadorController.index(req, res),
);
routes.delete('/entregador/:email', verificaToken, (req, res) =>
  entregadorController.destroy(req, res),
);
routes.put('/entregador/:email', verificaToken, (req, res) =>
  entregadorController.update(req, res),
);

// Funcionário
const funcionarioController = new FuncionarioController();
routes.post('/funcionario', (req, res) =>
  funcionarioController.create(req, res),
);
routes.get('/funcionario/all', verificaToken, (req, res) =>
  funcionarioController.index(req, res),
);
routes.get('/funcionario/profile', verificaToken, (req, res) =>
  funcionarioController.profile(req, res),
);
routes.delete('/funcionario/:email', verificaToken, (req, res) =>
  funcionarioController.destroy(req, res),
);
routes.put('/funcionario/:email', verificaToken, (req, res) =>
  funcionarioController.update(req, res),
);

module.exports = routes;
