const {conexaoBanco} = require("../../banco/conexaoDB");

 exports.listarendereco = (req,res)=>{
    conexaoBanco.all("SELECT * FROM ENDERECO", (err,rows)=>{
        res.send(rows)
    })
 }
