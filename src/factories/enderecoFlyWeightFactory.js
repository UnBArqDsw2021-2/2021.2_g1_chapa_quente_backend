const { EnderecoFlyWeight } = require('../model/enderecoFlyWeight');

const enderecoFlyWeightFactory = {
  async create(bairro, cidade) {
    const achouEndereco = await EnderecoFlyWeight.findOne({ bairro, cidade });
    if (!achouEndereco) {
      const enderecoFlyWeight = new EnderecoFlyWeight({ bairro, cidade });
      const flyWeightSalvo = await enderecoFlyWeight.save();
      return flyWeightSalvo;
    }
    return achouEndereco;
  },
};

module.exports = enderecoFlyWeightFactory;
