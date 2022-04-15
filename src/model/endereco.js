const mongoose = require('mongoose');
const enderecoFlyWeightFactory = require('../factories/enderecoFlyWeightFactory');

const schema = new mongoose.Schema(
  {
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
    complemento: {
      type: String,
      required: false,
    },
    enderecoBaseId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { collection: 'Endereco' },
);

const Model = mongoose.model('Endereco', schema);

class Endereco {
  enderecoFlyWeight;

  rua;

  numero;

  complemento;

  constructor(rua, numero, complemento) {
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
  }

  async setFlyWeight(bairro, cidade) {
    this.enderecoFlyWeight = await enderecoFlyWeightFactory.create(
      bairro,
      cidade,
    );
  }

  save() {
    const endereco = new Model({
      rua: this.rua,
      numero: this.numero,
      complemento: this.complemento,
      enderecoBaseId: this.enderecoFlyWeight.id,
    });
    return endereco.save();
  }
}

module.exports = Endereco;
