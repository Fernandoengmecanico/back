const router = require("express").Router();
const rotaPadrao = "/fernandoCaixa/";

 router.use(rotaPadrao + "Categorias", require("./routesCategoria"));
 router.use(rotaPadrao + "endereco", require("./routesendereco"));
 router.use(rotaPadrao + "funcionarios",require("./routefuncionario"));
 router.use(rotaPadrao + "novofuncio",require("./routeadicionarumfuncionario"));
router.use("/", (req, res) => {
    console.log(req.method, req.url, req.body, req.ip);
    res.sendStatus(404);
})
  
 module.exports = router;