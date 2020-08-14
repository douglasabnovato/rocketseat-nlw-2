// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField(){ 
    // Duplicar os campos - que campo ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar.
    fields.forEach(function(field){
        //pegar o field do momento e limpa-o.
        field.value = "";
    })

    // Colocar na página - onde ?
    document.querySelector('#schedule-items').appendChild(fields)

}   