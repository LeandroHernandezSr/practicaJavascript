//Plantillas de cadenas de caracteres

//let valor1=parseInt(prompt("Ingrese valor 1"));
//let valor2=parseInt(prompt("Ingrese valor 2"));
//document.write(`La suma de ${valor1} y ${valor2} es ${valor1+valor2}`);

//Llamada a funciones
/*
function mayor(x,y){
    const mayor= x > y ? x : y;
    return mayor;
}

let valor1=parseInt(prompt("Ingrese valor 1"));
let valor2=parseInt(prompt("Ingrese valor 2"));

document.write(`El numero mayor de ${valor1} y ${valor2} es ${mayor(valor1,valor2)}`)
*/
//Operador spread
//function sumar(x,y,z){
//    const total=x+y+z;
//    return total;
//
//const vet=[10,20,30];
//const resultado=sumar(...vet);
//document.write(resultado);

//Cadena de caracteres de multiples lineas
/*
const dia1='Lunes';
const dia2='Martes';
const dia3='Miercoles';

const cadena=`<ol>
<li>${dia1}</li>
<li>${dia2}</li>
<li>${dia3}</li>
</ol>`;
document.write(cadena);
*/



//Funciones con parametros Rest
/*
El concepto de parámetros Rest se logra antecediendo tres puntos al nombre del parámetro (el parámetro es un objeto de la clase Array con todas sus funcionalidades):
*/
/*
function sumar(...vector){
    let suma=0;
    for (let x = 0; x < vector.length; x++)
                suma += vector[x];
    return suma;
}

document.write(sumar(10,10,10,50));
document.write('hola')

function enteros(...vector) {
    vector.sort();
    for (let x = 0; x < vector.length; x++) {
        document.write(vector[x]);
    }
}

enteros(5, 4, 3, 2, 1);

*/


//Arrow functions
/*Como es una función anónima si queremos guardar una referencia a la misma se la debemos asignar a una constante o variable. Indicamos entre paréntesis los parámetros de la función luego la flecha => y finalmente entre llaves el algoritmo propiamente de la función.*/

const mayor = (x, y) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
};

//Problema 1
//Ordenar un vector de enteros mediante el metodo sort, pasar una arrow function

const vec = [100, 22, 17, 50, 3];
vec.sort((x, y) => {
    if (x > y) {
        return 1;
    } else {
        return -1;
    }
})


//Funciones flecha con un único parámetro.
//Cuando una función flecha tiene un parámetro no es necesario encerrarlo entre paréntesis:
const vec2 = [100, 32, 17, 50, 30];
vec2.forEach(elemento => {
    document.write(elemento + ' ');
})
//Funciones flecha de una única línea.
//Podemos definir funciones flecha de una única línea, en dichas situaciones no es necesario encerrar entre llaves el algoritmo.
const doble = x => x * 2;
document.write("<br>");
document.write(doble(10));

//Nombres de metodos abreviados
//Con ES6 disponemos una nueva sintaxis para definir nombres de métodos abreviados cuando definimos objetos literales. Veamos la sintaxis anterior con JavaScript:
const operacion = {
    valor1: 10,
    valor2: 7,
    sumar() {
        return this.valor1 + this.valor2;
    },
    restar() {
        return this.valor1 - this.valor2;
    }
}

//Problema

const vector1 = [100, 22, 17, 50, 3, 78];
const pares = vector1.filter(elemento => elemento % 2 == 0);

document.write("Pares");
document.write('<br>');
document.write(pares);

//Funciones flecha sin parámetros.
/*Una función flecha que no tiene parámetros debemos disponer en forma obligatoria los paréntesis abiertos y cerrados previos a la flecha*/
window.addEventListener(
    'DOMContentLoaded',
    setTimeout(() => alert('pasó 3 segundos desde que se cargó la página'), 3000),
    false);