const {conexaoBanco} = require("../../banco/conexaoDB");

 exports.listarUmaCategoria = (req,res)=>{
    conexaoBanco.all("SELECT * FROM CATEGORIA WHERE ID = 1", (err,rows)=>{
        res.send(rows)
    })
 }