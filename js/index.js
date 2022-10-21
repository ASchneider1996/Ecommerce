// Buscador de Contenido //

//  Ejecutando Funciones //

// Declaracion de Variables //
let main2 = Libreria.getElementById("main-2");
let finder = Libreria.getElementById("finder"); 
let finderBox = Libreria.getElementById("finder-box"); 

// Reset del contenido en el buscador //
Libreria.getElementById("finder").addEventListener("click", resetFinder); 

function resetFinder() {
    finder.value = ""; 
    
    if(finder.value === "") {
        finderBox.style.display = "none";
    }
}

// Filtrado de Busqueda  //
Libreria.getElementById("finder").addEventListener("keyup", buscadorInterno); 

function buscadorInterno() {
    filter = finder.value.toUpperCase(); 
    li = finderBox.getElementsByTagName("li"); 


// Recorriendo los elementos de la lista //
for(i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText; 

    if(textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ""; 
        finderBox.style.display = "block";

        if(finder.value === "") {
            finderBox.style.display = "none";
        }

    } else {
        li[i].style.display = "none"; 
    }
}
}

// Validando formulario de contacto //
let contactForm = Libreria.getElementById("contact-form").addEventListener("click", function(e) { 
    e.preventDefault(); 
});

function dataValidation() {

    let contactForm = Libreria.getElementById("contact-form"); 
    let name = Libreria.getElementById("input-name").value; 
    let msg = Libreria.getElementById("textarea").value; 

    // Regex
    let nameRegex = /([A-Za-z]{0,40}\w+)/g; 
    let nameResult = nameRegex.test(name); 

    let msgRegex = /([A-Za-z0-9]{0,120}\w+)/g; 
    let msgResult = msgRegex.test(msg); 

    if(nameResult == false) {
        alert('Debe ingresar un nombre');
        return false;
    }
    else if(msgResult == false) {
        alert('Debe escribir un mensaje'); 
        return false; 
    }
    else {
        contactForm.submit(alert("Mensaje enviado!"));
        contactForm.reset();
    }
}