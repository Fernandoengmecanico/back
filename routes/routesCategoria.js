const router = require("express").Router();
const controller = require("../controllers/categorias/_categoriasControllerIndex");

router.get("/ListarTodasCategorias", controller.listarTodasCategorias);
router.get("/ListarUmaCategoria", controller.listarUmaCategoria);

module.exports = router;

 //Material icon