/*let valor=prompt("Ingrese un numero");
let reg=new RegExp('[0-9]');

if(reg.test(valor)){
    alert("Se ingreso un numero");
}else{
    alert("No se ingreso un numero");
}*/

document.getElementById('formulario').addEventListener('submit',expresionRegular);

function expresionRegular(evt){
    document.getElementById('contador').innerHTML="putoxd";
    evt.preventDefault();
}

