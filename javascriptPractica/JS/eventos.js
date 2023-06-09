//Eventos LOAD y DOMContentLoaded

/*document.addEventListener('DOMContentLoaded', function () {
    //Evento MouseOver y MouseOut

    document.getElementById('recuadro1').addEventListener('mouseover', entrada);
    document.getElementById('recuadro1').addEventListener('mouseout', salida);

    function entrada() {
        document.getElementById('recuadro1').style.borderRadius = '30px';
    }

    function salida() {
        document.getElementById('recuadro1').style.borderRadius = '0px';
    }
});
*/


//window.addEventListener('DOMContentLoaded', mouse);

//Evento de Mousemove

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('recuadro1').addEventListener('mousemove', mover);

    function mover() {
        let x = parseInt(document.getElementById('cantidad').innerHTML);
        x++;
        document.getElementById('cantidad').innerHTML = x;
    }
});



function inicio() {
    document.getElementById("formulario1").addEventListener('submit', validar);
}

function validar(evt) {
    let usu = document.getElementById("usuario").value;
    let cla = document.getElementById("clave").value;
    if (usu.length == 0 || cla.length == 0) {
        alert('El nombre de usuario o clave está vacío');
        evt.preventDefault();
    }
}

//Eventos Click y DbClick

function inicio() {
    document.getElementById('click').addEventListener('click', click);
    document.getElementById('dobleClick').addEventListener('dblclick', dbclick);
}

function click() {
    alert('Le diste click');
}

function dbclick() {
    alert('Le diste doble click');
}

//Evento MouseUp y MouseDown

function mouse() {
    document.getElementById('mouseUp-down').addEventListener('mouseup', mouseUp);
    document.getElementById('mouseUp-down').addEventListener('mousedown', mouseDown);
}


function mouseUp() {
    //.InnerHTML modifica el contenido
    document.getElementById('mouseUp-down').innerHTML = "Estas presionando el mouse";
}

function mouseDown() {
    //.InnerHTML modifica el contenido
    document.getElementById('mouseUp-down').innerHTML = "Dejaste de presionar el mouse";
}

//Evento MouseOver y MouseOut

document.getElementById('recuadro1').addEventListener('mouseover', entrada);
document.getElementById('recuadro1').addEventListener('mouseout', salida);

function entrada() {
    document.getElementById('recuadro1').style.borderRadius = '30px';
}

function salida() {
    document.getElementById('recuadro1').style.borderRadius = '0px';
}


