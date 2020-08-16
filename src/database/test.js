const Database = require('./db')

Database.then((db) => {
    //inserir os dados
    proffy = {
        name:"Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"32988887777", 
        bio:"Entusiasta das melhores tecnologia de química avançada.<br><br>Apaixonado por explodir coisas no laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram uma das minhas explosões.",         
    }

    classValue = {
        subject:"Química", 
        cost:"20",
        //o proffy id virá pelo banco de dados 
    }

    classSchedule = [
        //class_id virá pelo bd após cadastrarmos a class
        {
            weekday: 1, 
            time_from: 720, 
            time_to:1220
        },
        {
            weekday:1, 
            time_from:520, 
            time_to:1220
        }
    ]

    //consultar os dados inseridos
})