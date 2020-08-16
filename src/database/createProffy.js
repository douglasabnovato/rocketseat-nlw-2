module.exports = function(db, { proffyValue, classValue, classScheduleValue }){
    //inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        ); 
    `)   

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUE (
                ${classValue.subject},
                ${classValue.cost},
                ${classValue.proffy_id}
            );
    `)

    const class_id = insertedProffy.lastID

    //inserir dados na tabela class_schedule
    

}