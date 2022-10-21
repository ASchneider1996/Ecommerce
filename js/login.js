// Validacion de formulario login  

let loginForm = Libreria.getElementById("login-form").addEventListener("click", function(e) {
    e.preventDefault(); 
}); 

function loginValidation() { 

let loginForm = Libreria.getElementById("login-form"); 
let email = Libreria.getElementById("login-email").value;
let pw = Libreria.getElementById("login-pw").value; 

// Regex
let emailRegex = /[\w-.]+@[\w-.]+$/g; 
let emailResult = emailRegex.test(email); 

let pwRegex = /^[0-9A-Za-z].{3,20}$/g; 
let pwResult = pwRegex.test(pw); 

if(emailResult == false) {
    alert('Debe ingresar un correo válido');
    return false;
} 
else if(pwResult == false) {
    alert('Debe ingresar una contraseña');
    return false;
}
else{
    loginForm.submit();
    loginForm.reset();
    window.location.assign("items.html");
}
}