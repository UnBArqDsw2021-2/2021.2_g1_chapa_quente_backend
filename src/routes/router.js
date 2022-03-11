const { Router } = require('express');
const { ClienteController } = require('../controller/clienteController');
const verificaToken = require('../midllewares/verificaToken');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send({ message: 'API Online! =)' });
});

// Cliente
const clienteController = new ClienteController();
routes.post('/cliente', (req, res) => clienteController.create(req, res));
routes.get('/cliente/all', verificaToken, (req, res) =>
  clienteController.index(req, res),
);
routes.delete('/cliente/:id', verificaToken, (req, res) =>
  clienteController.destroy(req, res),
);
routes.put('/cliente/:id', verificaToken, (req, res) =>
  clienteController.update(req, res),
);
routes.post('/cliente/signin', (req, res) =>
  clienteController.signIn(req, res),
);

module.exports = routes;
