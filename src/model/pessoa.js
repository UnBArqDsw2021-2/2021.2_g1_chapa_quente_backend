const mongoose = require('mongoose');

const { Schema } = mongoose;

const pessoaSchema = new Schema(
  {
    nome: { required: true, type: String },
    telefone: { required: true, type: String },
    email: { required: true, unique: true, type: String },
    senha: { required: true, type: String },
    cpf: String,
  },
  { collection: 'pessoa' },
);

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = { Pessoa, pessoaSchema };
