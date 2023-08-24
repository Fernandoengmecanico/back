const {conexaoBanco} = require("../../banco/conexaoDB");

 exports.adicionarumfuncionario = (req,res)=>{
    
    
    
    conexaoBanco.run("insert into funcionario(NOME,TELEFONE,EMAIL,CARGO,VALOR_HORA,DATA_CONTRATACAO,ID_ENDERECO)VALUES(?,?,?,?,?,?,?)",[req.body.nome,req.body.TELEFONE,req.body.EMAIL,req.body.CARGO,req.body.VALOR_HORA,req.body.DATA_CONTRATACAO,req.body.ID_ENDERECO] ,(err)=>{
        if(err){
            console.log(err)
        }
        res.status(201).send("Deu tudo certo")
    })
 }
