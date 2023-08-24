const router = require("express").Router();
const controller = require("../controllers/categorias/_categoriasControllerIndex");

router.get("/listarfuncionario", controller.listarfuncionario);

module.exports = router;