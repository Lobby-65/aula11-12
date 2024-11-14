const express = require("express");
const produtoRota = require("./rotas/produtos")
const logger = require("./utils/logger")
const logMid = require("./middleware/log.mid")
const ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.json())

app.use(logMid)


app.use('/static', express.static('public'))


app.use("/api/produtos", produtoRota)

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  logger.info(`Iniciando no ambiente ${process.env.NODE_ENV}`)
  logger.info('Servidor pronto na porta 8080')
})