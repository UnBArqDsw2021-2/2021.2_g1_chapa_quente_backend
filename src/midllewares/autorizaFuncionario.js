const autorizaFuncionario = (req, res, next) => {
  try {
    if (req.tipo !== 'Funcionario') {
        throw new Error('Você não tem autorização para acessar esse recurso!');
    }
    next();
  } catch (err) {
    res.status(401).send({ erro: err.message});
  }
};

module.exports = autorizaFuncionario;