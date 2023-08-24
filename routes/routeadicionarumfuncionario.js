const router = require("express").Router();
const controller = require("../controllers/categorias/_categoriasControllerIndex");

router.post("/funciadicionado", controller.adicionarumfuncionario);

module.exports = router;