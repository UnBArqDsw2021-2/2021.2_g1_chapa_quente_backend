const { Router } = require('express');
const { ClienteController } = require('../controller/clienteController');
const { EntregadorController } = require('../controller/entregadorController');
const {
  FuncionarioController,
} = require('../controller/funcionarioController');
const AutenticacaoController = require('../controller/autenticacaoController');
const verificaToken = require('../midllewares/verificaToken');
const autorizaFuncionario = require('../midllewares/autorizaFuncionario');
const {
  AcompanhamentoController,
} = require('../controller/acompanhamentoController');
const { AdicionalController } = require('../controller/adicionalController');
const { SobremesaController } = require('../controller/sobremesaController');
const { SanduicheController } = require('../controller/sanduicheController');
const { BebidaController } = require('../controller/bebidaController');
const { PedidoController } = require('../controller/pedidoController');
const { CartaoController } = require('../controller/cartaoController');
const autorizaEntregador = require('../midllewares/autorizaEntregador');

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
routes.delete('/funcionario/:email', verificaToken, (req, res) =>
  funcionarioController.destroy(req, res),
);
routes.put('/funcionario/:email', verificaToken, (req, res) =>
  funcionarioController.update(req, res),
);

// Acompanhamento
const acompanhamentoController = new AcompanhamentoController();
routes.get('/acompanhamento', (req, res) => {
  acompanhamentoController.itensCardapio(req, res);
});
routes.get('/acompanhamento/:id', verificaToken, (req, res) => {
  acompanhamentoController.itemCardapio(req, res);
});
routes.post(
  '/acompanhamento/create',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    acompanhamentoController.create(req, res);
  },
);
routes.put(
  '/acompanhamento/update/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    acompanhamentoController.atualizarItem(req, res);
  },
);
routes.delete(
  '/acompanhamento/delete/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    acompanhamentoController.deletarItem(req, res);
  },
);

// Adicional
const adicionalController = new AdicionalController();
routes.get('/adicional/', (req, res) => {
  adicionalController.itensCardapio(req, res);
});
routes.get('/adicional/:id', verificaToken, (req, res) => {
  adicionalController.itemCardapio(req, res);
});
routes.post(
  '/adicional/create',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    adicionalController.create(req, res);
  },
);
routes.put(
  '/adicional/update/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    adicionalController.atualizarItem(req, res);
  },
);
routes.delete(
  '/adicional/delete/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    adicionalController.deletarItem(req, res);
  },
);

// Bebida
const bebidaController = new BebidaController();
routes.get('/bebida/', (req, res) => {
  bebidaController.itensCardapio(req, res);
});
routes.get('/bebida/:id', verificaToken, (req, res) => {
  bebidaController.itemCardapio(req, res);
});
routes.post(
  '/bebida/create',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    bebidaController.create(req, res);
  },
);
routes.put(
  '/bebida/update/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    bebidaController.atualizarItem(req, res);
  },
);
routes.delete(
  '/bebida/delete/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    bebidaController.deletarItem(req, res);
  },
);

// Sanduiche
const sanduicheController = new SanduicheController();
routes.get('/sanduiche/', (req, res) => {
  sanduicheController.itensCardapio(req, res);
});
routes.get('/sanduiche/:id', verificaToken, (req, res) => {
  sanduicheController.itemCardapio(req, res);
});
routes.post(
  '/sanduiche/create',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    sanduicheController.create(req, res);
  },
);
routes.put(
  '/sanduiche/update/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    sanduicheController.atualizarItem(req, res);
  },
);
routes.delete(
  '/sanduiche/delete/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    sanduicheController.deletarItem(req, res);
  },
);

// Sobremesa
const sobremesaController = new SobremesaController();
routes.get('/sobremesa/', (req, res) => {
  sobremesaController.itensCardapio(req, res);
});
routes.get('/sobremesa/:id', verificaToken, (req, res) => {
  sobremesaController.itemCardapio(req, res);
});
routes.post(
  '/sobremesa/create',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    sobremesaController.create(req, res);
  },
);
routes.put(
  '/sobremesa/update/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    sobremesaController.atualizarItem(req, res);
  },
);
routes.delete(
  '/sobremesa/delete/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    sobremesaController.deletarItem(req, res);
  },
);

// Pedido
const pedidoController = new PedidoController();
routes.get('/order', verificaToken, (req, res) => {
  pedidoController.getOrders(req, res);
});
routes.get('/order/find/:id', verificaToken, (req, res) => {
  pedidoController.getOrder(req, res);
});
routes.get(
  '/order/details/:id',
  [verificaToken, autorizaEntregador],
  (req, res) => {
    pedidoController.getOrderDetails(req, res);
  },
);
routes.get('/order/client/:id', [verificaToken], (req, res) => {
  pedidoController.getClientOrdersList(req, res);
});
routes.post('/order/create', verificaToken, (req, res) => {
  pedidoController.createOrder(req, res);
});
routes.put(
  '/order/update/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    pedidoController.updateOrder(req, res);
  },
);
routes.delete(
  '/order/delete/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    pedidoController.deleteOrder(req, res);
  },
);
routes.get('/order/to-do', [verificaToken, autorizaFuncionario], (req, res) => {
  pedidoController.getToDoOrders(req, res);
});
routes.post(
  '/order/start/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => {
    pedidoController.startOrder(req, res);
  },
);
routes.post(
  '/order/finishcook/:id',
  [verificaToken, autorizaFuncionario],
  (req, res) => pedidoController.finishCookOrder(req, res),
);
routes.put(
  '/order/track/:id',
  [verificaToken, autorizaEntregador],
  (req, res) => {
    pedidoController.updateTrack(req, res);
  },
);


// Cartao
const cartaoController = new CartaoController();
routes.get('/cartao/', verificaToken, (req, res) => {
  cartaoController.index(req, res);
});
routes.post('/cartao/create', verificaToken, (req, res) => {
  cartaoController.create(req, res);
});
routes.put('/cartao/update/:numero', verificaToken, (req, res) => {
  cartaoController.update(req, res);
});
routes.delete('/cartao/delete/:numero', verificaToken, (req, res) => {
  cartaoController.destroy(req, res);
});

module.exports = routes;
