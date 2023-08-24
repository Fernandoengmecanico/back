const {conexaoBanco} = require("../../banco/conexaoDB");

 exports.listarfuncionario = (req,res)=>{
    conexaoBanco.all("SELECT * FROM FUNCIONARIO ", (err,rows)=>{
        res.send(rows)
    })
 }
