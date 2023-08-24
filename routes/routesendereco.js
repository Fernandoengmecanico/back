const router = require("express").Router();
const controller = require("../controllers/categorias/_categoriasControllerIndex");

router.get("/listarendereco", controller.listarendereco);


module.exports = router;