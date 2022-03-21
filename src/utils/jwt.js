const jsonwebtoken = require('jsonwebtoken');

const secret = process.env.SECRET || 'mySecret';

module.exports = {
  sign: payload => jsonwebtoken.sign(payload, secret, { expiresIn: 86400 }),
  validate: token => jsonwebtoken.verify(token, secret),
};
