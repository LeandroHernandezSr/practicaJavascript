//Plantillas de cadenas de caracteres

//let valor1=parseInt(prompt("Ingrese valor 1"));
//let valor2=parseInt(prompt("Ingrese valor 2"));
//document.write(`La suma de ${valor1} y ${valor2} es ${valor1+valor2}`);

//Llamada a funciones

function mayor(x,y){
    const mayor= x > y ? x : y;
    return mayor;
}

let valor1=parseInt(prompt("Ingrese valor 1"));
let valor2=parseInt(prompt("Ingrese valor 2"));

document.write(`El numero mayor de ${valor1} y ${valor2} es ${mayor(valor1,valor2)}`)

//Operador spread
//function sumar(x,y,z){
//    const total=x+y+z;
//    return total;
//
//const vet=[10,20,30];
//const resultado=sumar(...vet);
//document.write(resultado);

//Cadena de caracteres de multiples lineas
const dia1='Lunes';
const dia2='Martes';
const dia3='Miercoles';

const cadena=`<ol>
<li>${dia1}</li>
<li>${dia2}</li>
<li>${dia3}</li>
</ol>`;
document.write(cadena);