const { Cartao } = require('../model/cartao');

class CartaoController {
    Model;

    constructor() {
        this.Model = Cartao;
    }

    async create(req, res) {
        const { numero, titular, cvc, validade, bandeira } = req.body;

        const cartao = this.Model({
            numero,
            titular, 
            cvc, 
            validade, 
            bandeira,
        });

        try {
        const cartaoSalvo =  await cartao.save();
    
        res.status(201).send(cartaoSalvo);
        } catch (err) {
            res.send({ erro: err.message });
        }
    }

    async destroy(req, res) {
        const { numero } = req.params;
    
        try {
        await this.Model.deleteOne({ numero });
    
        res.status(204).send();
        } catch (err) {
            res.send({ erro: err.message });
        }
    }
    
    async index(_req, res) {
        try {
        const result = await this.Model.find();
    
        res.send(result);
        } catch (err) {
            res.send({ err: err.message });
        }
    }
    
    async update(req, res) {
        const { numero } = req.params;
        const updateParams = req.body;
    
        try {
        const cartao = await this.Model.findOneAndUpdate(
            { numero },
            updateParams,
            {
            new: true,
            },
        );
    
        res.send(cartao);
        } catch (err) {
            res.send({ err: err.message });
        }
    }
}

module.exports = { CartaoController };