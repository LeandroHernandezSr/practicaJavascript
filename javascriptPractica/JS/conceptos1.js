//Variables
var saludo1="Hola"
let saludo2="Hola"

const constante="Mundo!"

alert(saludo1+" "+constante);

// Entrada por teclado
let entrada=prompt("Ingrese algun texto")
alert(entrada)

// Document Write
document.write(entrada)

//Operaciones

let valor1
let valor2
let como_cadena
let como_numero

valor1=prompt("Ingrese valor 1");
valor2=prompt("Ingrese valor 2");
como_cadena=valor1+valor2
como_numero=parseInt(valor1)+parseInt(valor2);

document.write("<br>Como cadena: "+como_cadena);
document.write("<br>Como enteros: "+como_numero);

//Condicionales simples 

let edad
edad=prompt("Ingrese edad")
if(edad>=18){
    alert("Es mayor, puede pasar");
}else{
    alert("No es mayor, no puede pasar");
}


// Condicionales Segunda parte

let nombre
nombre=prompt("Ingrese nombre")
if(nombre=="Leandro"){
    alert("Sos un capo");
}else if(nombre=="Walter"){
    alert("Hola Walter");
}else{
    alert("Hola "+nombre+"!");
}

//Operadores logicos en estructuras condicionales

let cargo

cargo=prompt("Ingrese su cargo en la empresa")
if(cargo=="Jefe" || cargo=="Gerente"){
    alert("Usted puede pasar a la reunion");
}else{
    alert("No puede pasar");
}

let nota1
let nota2

nota1=prompt("Ingrese la nota de matematica")
nota2=prompt("Ingrese la nota de literatura")
if(nota1>=6 && nota2>=6){
    alert("Pasa de año!");
}else{
    alert("No pasa de año");
}


//Estructura switch

let color
color=prompt("Ingrese eleccion entre rojo,verde o azul")
switch(color){
    case "rojo":
        alert("Has elegido el color rojo");
        break
    case "verde":
        alert("Has elegido el color verde");
        break
    case "azul":
        alert("Has elegido el color azul");
        break
    default:
        alert("No ha elegido color");
        break            
}

//Estructura repetitiva While
let ingreso=5
while (ingreso!=5) {
    ingreso=parseInt(prompt("Ingrese el numero 5!"))
}

//Estructura repetitiva do-While

let ingreso2=5
do {
    ingreso2=parseInt(prompt("Ingrese el numero 5! Porfi"))
} while (ingreso2!=5);

//Estructura for

for(let f=1; f<5 ;f++){
    alert(f);
}

//Funciones

function holaMundo(){
    alert("Hola mundo!");
}

holaMundo();

//Funciones con parametros

function hola(nombre){
    alert("Hola "+nombre+"!");
}

hola("Leandro");

//Funciones que retorna un valor 

function convertidorIngles(numero){
    let valor
    switch(numero){
        case 1:
            valor="One"
            break;
        case 2:
            valor="Two"
            break;
        case 3:
            valor="Three"
            break;
        case 4:
            valor="Four"
            break;
        case 5:
            valor="Five"
            break;            
        default:
            valor="Ingrese un valor del 1 al 5"
            break;    
    }
    return valor;
}

alert(convertidorIngles(parseInt(2)));

//Date

let fecha=new Date();

document.write('Hoy es ');
document.write(fecha.getDate() + '/');
document.write((fecha.getMonth() + 1) + '/');
document.write(fecha.getFullYear());
