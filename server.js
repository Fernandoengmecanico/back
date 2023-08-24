const express =  require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORTA;
/*
app.use("/", (req, res) => {
  console.log("entrei");
  res.sendStatus(404)
});
*/
app.use(require("./routes/_routesIndex"));

 app.listen(port, () => {
   console.log(`Sevidor rodando em: http://localhost:${port}`)
});