const express = require('express')
const server = express()
const routes = require("./routes")


// USANDO TEMPLATE ENGINE
server.set('view engine', 'ejs')

// HABILITANDO ARQUIVOS ESTÁTICOS
server.use(express.static("public"))

// USANDO O REQ.BODY
server.use(express.urlencoded({ extended: true }));

// ROTAS
server.use(routes)


server.listen(3000, () => console.log("Server running on port 3000"))


