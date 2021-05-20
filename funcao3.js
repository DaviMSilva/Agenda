//desabilita o botão no início


function addNewContact(){
    
   
    //Permitir a manipulação do Submit
    event.preventDefault();

    var cpLocal = $("input[name=ilocal]").val()
    var cpNome = $("input[name=inome]").val()
    var cpEmail = $("input[name=iemail]").val()
    var cpFone = $("input[name=ifone]").val()   
    
    while(cpEmail =='' && cpFone==''){
        alert('preencha pelo menos um campo email ou fone');
        return;
    }
    
    

    //criar um novo elemento
    let itemContact = document.createElement("li")
    itemContact.innerText=cpNome + "\n" + cpFone + "-" + cpEmail + "-" + cpLocal

    let btnRemove = document.createElement("button")
    btnRemove.type = "button"
    btnRemove.innerText = "Remover"
    btnRemove.style.display="inline-block"
    btnRemove.setAttribute("onclick","removeContact(this)")


    
    //add o button ao li
    itemContact.appendChild(btnRemove)

    //add o li ao ul
    document.querySelector("ul#listContact").appendChild(itemContact)
    
    
    //limpeza do form
    $('#form').each (function(){
        this.reset();
    }); 
}

function removeContact(btn){
    let elem = btn.parentNode
    document.querySelector("ul#listContact").removeChild(elem)
}


$(document).ready(function(){
    $('.phone').mask('(00) 00000-0000');
});



