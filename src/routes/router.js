const { Router } = require('express');
const { ClienteController } = require('../controller/clienteController');
const { EntregadorController } = require('../controller/entregadorController');
const {
  FuncionarioController,
} = require('../controller/funcionarioController');
const verificaToken = require('../midllewares/verificaToken');
const { CardapioController } = require('../controller/cardapioController');

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

// Entregador
const entregadorController = new EntregadorController();
routes.post('/entregador', (req, res) => entregadorController.create(req, res));
routes.get('/entregador/all', verificaToken, (req, res) =>
  entregadorController.index(req, res),
);
routes.delete('/entregador/:id', verificaToken, (req, res) =>
  entregadorController.destroy(req, res),
);
routes.put('/entregador/:id', verificaToken, (req, res) =>
  entregadorController.update(req, res),
);
routes.post('/entregador/signin', (req, res) =>
  entregadorController.signIn(req, res),
);

// Funcionário
const funcionarioController = new FuncionarioController();
routes.post('/funcionario', (req, res) =>
  funcionarioController.create(req, res),
);
routes.get('/funcionario/all', verificaToken, (req, res) =>
  funcionarioController.index(req, res),
);
routes.delete('/funcionario/:id', verificaToken, (req, res) =>
  funcionarioController.destroy(req, res),
);
routes.put('/funcionario/:id', verificaToken, (req, res) =>
  funcionarioController.update(req, res),
);
routes.post('/funcionario/signin', (req, res) =>
  funcionarioController.signIn(req, res),
);

// Cardapio
const cardapioController = new CardapioController();
routes.get('/cardapio/all', verificaToken, (req, res) => {
  cardapioController.listaItemsCardapio(req, res)
})
routes.get('/cardapio/:id', verificaToken, (req, res) => {
  cardapioController.getItemCardapio(req, res)
})
routes.post('/cardapio/', verificaToken, (req, res) => {
  cardapioController.cadastrarItemNoCardapio(req, res)
})
routes.put('/cardapio/:id', verificaToken, (req, res) => {
  cardapioController.atualizarItem(req, res)
})
routes.delete('/cardapio/:id', verificaToken, (req, res) => {
  cardapioController.removerItemCardapio(req, res)
})

module.exports = routes;
