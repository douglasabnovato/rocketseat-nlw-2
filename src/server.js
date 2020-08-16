
//Dados
const proffys = [
    { 
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"32988887777", 
        bio:"Entusiasta das melhores tecnologia de química avançada.<br><br>Apaixonado por explodir coisas no laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram uma das minhas explosões.", 
        subject:"Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    { 
        name:"Mayk Brito", 
        avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp:"32988887777", 
        bio:"Entusiasta das melhores tecnologia de química avançada.<br><br>Apaixonado por explodir coisas no laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram uma das minhas explosões.", 
        subject:"Química", 
        cost:"20", 
        weekday:[4], 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

//Funcionalidades
function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays } )
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

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