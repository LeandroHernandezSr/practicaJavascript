document.getElementById('formulario1').addEventListener('submit',inicio);


function inicio(evt){
    let clave1=document.getElementById('clave1').value;
    let clave2=document.getElementById('clave2').value;

    if(clave1 != clave2){
        alert("Las contraseñas no coinciden");
        evt.preventDefault();
    }
}