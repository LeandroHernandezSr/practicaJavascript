/*addEventListener("DOMContentLoaded", function () {
    document.getElementById('texto').addEventListener('keyup', presion);

    function presion() {
        let canti = document.getElementById('texto').value.length;
        let disponibles = 140 - parseInt(canti);
        document.getElementById('cantidad').innerHTML = disponibles;
    }
});*/

/*
addEventListener("DOMContentLoaded", function () {
    document.getElementById('checkbox1').addEventListener('change', cambiocheckbox);
    document.getElementById('radioa').addEventListener('change', cambioradio);
    document.getElementById('radiob').addEventListener('change', cambioradio);
    document.getElementById('radioc').addEventListener('change', cambioradio);
    document.getElementById('select1').addEventListener('change', cambioselect);
    document.getElementById('text1').addEventListener('change', cambiotext);
    document.getElementById('textarea1').addEventListener('change', cambiotextarea);

    function cambiocheckbox() {
        alert(document.getElementById('checkbox1').checked);
    }

    function cambioradio() {
        alert(document.getElementById('radioa').checked + ' ' +
            document.getElementById('radiob').checked + ' ' +
            document.getElementById('radioc').checked);
    }

    function cambioselect() {
        alert(document.getElementById('select1').value);
    }

    function cambiotext() {
        alert(document.getElementById('text1').value);
    }

    function cambiotextarea() {
        alert(document.getElementById('textarea1').value);
    }
});
*/

addEventListener("DOMContentLoaded", function () {
    document.getElementById('text1').addEventListener('focus', tomarfoco1);
    document.getElementById('text2').addEventListener('focus', tomarfoco2);
    document.getElementById('text1').addEventListener('blur', perderfoco1);
    document.getElementById('text2').addEventListener('blur', perderfoco2);

    function tomarfoco1() {
        document.getElementById('text1').style.color = '#ff0000';
    }

    function tomarfoco2() {
        document.getElementById('text2').style.color = '#ff0000';
    }

    function perderfoco1() {
        document.getElementById('text1').style.color = '#000000';
    }

    function perderfoco2() {
        document.getElementById('text2').style.color = '#000000';
    }
});

/*
  function presion(evt) {
            document.getElementById('resultado').innerHTML =
                document.getElementById('resultado').innerHTML + evt.target.value;
        }
La función presion tiene un parámetro llamado evt (podemos darle cualquier nombre) y el mismo es un objeto que tiene las siguientes propiedades:

target: Referencia del objeto que generó el evento (en nuestro ejemplo alguno de los 10 botones)
type: El nombre del evento (en nuestro caso click)
button: El botón del mouse presionado (0 = izquierdo, 1 = medio, 2 = derecho)
keyCode: El caracter del teclado presionado (en caso que corresponda)
shiftKey: true o false en caso de estar presionada esta tecla.
Como en este problema debemos ir concatenando el número presionado procedemos a obtener la referencia del div y asignarle el valor actual más la propiedad value del botón presionado:

            document.getElementById('resultado').innerHTML =
                document.getElementById('resultado').innerHTML + evt.target.value;

*/