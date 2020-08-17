//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

//configurar nunjucks (template engine)
const nunkjucks = require('nunjucks')
nunkjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e Configuração do Servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)