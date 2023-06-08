//IsNaN
let x = 10;
/*if(isNaN(parseInt(x))){
    alert("Es un numero");
}else{
    alert("No es un numero");
}*/


//setInterval,clearInterval,setTimeout y clearTimeout
addEventListener('DOMContentLoaded', function () {
    let reloj;
    reloj = setInterval(procesar, 1000);
    document.getElementById('boton1').addEventListener('click', presionBoton);

    function procesar() {
        let nro = parseInt(document.getElementById('cronometro').innerHTML);
        nro++;
        document.getElementById('cronometro').innerHTML = nro;
    }

    function presionBoton() {
        if (document.getElementById('boton1').value == 'detener') {
            clearInterval(reloj);
            document.getElementById('boton1').value = 'continuar';
        } else {
            reloj = setInterval(procesar, 1000);
            document.getElementById('boton1').value = 'detener';
        }
    }
});


// Operador condicional ?

let numero1=parseInt(prompt("Ingrese primer valor"));
let numero2=parseInt(prompt("Ingrese segundo valor"));
let mayor;
numero1 > numero2 ? mayor=numero1 : mayor=numero2; 

alert("El numero mayor es: "+mayor);