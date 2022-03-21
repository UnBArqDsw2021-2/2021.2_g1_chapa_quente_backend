const { Cliente } = require("../model/cliente")
const { Entregador } = require("../model/entregador")
const { Funcionario } = require("../model/funcionario")

const pessoaFactory = {
    createPessoa (tipo, email) {
        switch(tipo){
            case 'Cliente':
                return Cliente.findOne({ email })
            case 'Funcionario':
                return Funcionario.findOne({ email })
            case 'Entregador':
                return Entregador.findOne({ email })
            default:
                return null
        }
    }
}

module.exports = { pessoaFactory }