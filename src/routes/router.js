const { Router } = require('express');
const { ClienteController } = require('../controller/clienteController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send({ message: 'API Online! =)' });
});

// Cliente
routes.post('/cliente', ClienteController.create);
routes.get('/cliente/all', ClienteController.index);
routes.delete('/cliente/:email', ClienteController.destroy);
routes.put('/cliente/:email', ClienteController.update);

module.exports = routes;
