const jwt = require('../utils/jwt');

const verificaToken = (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');

    if (!token) res.status(401).send('Token não Fornecido!');
    const payload = jwt.validate(token);

    req.pessoaId = payload.id;
    next();
  } catch (err) {
    res.status(401).send({ erro: 'Token Inválido' });
  }
};

module.exports = verificaToken;
