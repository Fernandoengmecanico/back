const { listarTodasCategorias } = require("./listarTodascategorias");
const { listarUmaCategoria } = require("./listarUmaCategoria");
const { listarendereco } = require("./listarendereco");
const {listarfuncionario} = require("./listarfuncionario");
const {adicionarumfuncionario} = require("./adicionarumfuncionario");
module.exports = {
    listarTodasCategorias:listarTodasCategorias,
    listarUmaCategoria:listarUmaCategoria,
    listarendereco:listarendereco,
    listarfuncionario:listarfuncionario,
    adicionarumfuncionario:adicionarumfuncionario
}