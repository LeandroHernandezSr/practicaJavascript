/*
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    this.depositar=depositar;
    this.extraer=extraer;
}

function depositar(dinero){
    this.saldo=this.saldo+dinero;
}

function extraer(dinero){
    this.saldo=this.saldo-dinero;
}

//Definir un objeto de la clase
let cliente1;
cliente1=new Cliente('Leandro',3000);
//Utilizacion del objeto con sus metodos de clase
document.write('Nombre del cliente:'+cliente1.nombre+'<br>');
document.write('Saldo actual:'+cliente1.saldo+"<br>");
cliente1.depositar(1300);
document.write('Saldo actual despues del deposito:'+cliente1.saldo+"<br>");
cliente1.extraer(500);
document.write('Saldo actual despues de la extraccion:'+cliente1.saldo+"<br>");


//Utilizacion de varias clases

//Clase numero quiniela

function numeroQuiniela(nombre){
    this.nombre=nombre;
    this.cargaNumero=function(){
        this.numero=parseInt(prompt("Que numero de quiniela quiere "+this.nombre+"?"));
    }
    this.verificoSiGano=function(num){
        if(this.numero==num){
            return true;
        }else{
            return false;
        }
    }
}

//Clase bolillero
function bolillero(){
    this.numero=-1;
    this.sortear=function(){
        this.numero=parseInt(Math.random()*10)+1;
    }
}

//Bloque principal

let persona1;
persona1=new numeroQuiniela('Leandro');
persona1.cargaNumero();
let bolillero1;
bolillero1=new bolillero();
bolillero1.sortear();
document.write('Numero sorteado:' + bolillero1.numero + '<br>'); 
document.write(persona1.nombre + ' eligió ' + persona1.numero + '<br>');
if (persona1.verificoSiGano(bolillero1.numero)) {
    document.write(persona1.nombre + ' ha ganado <br>');
}else{
    document.write("No gano");
}

*/
//Otra practica

function Estudiante(){
    this.nombre="";
    this.apellido="";
    this.matricula="";
    this.cargarNombre=function(){
        this.nombre=prompt("Ingresa tu nombre");
    }
    this.cargarApellido=function(){
        this.apellido=prompt("Ingresa tu apellido");
    }
    this.cargarMatricula=function(){
        this.matricula=parseInt(prompt("Ingresa tu numero de matricula"));
    }
}

let estudiante1
estudiante1=new Estudiante();
estudiante1.cargarNombre();
estudiante1.cargarApellido();
estudiante1.cargarMatricula();
document.write("El nombre del estudiante es: "+estudiante1.nombre+"<br>");
document.write("El apellido del estudiante es: "+estudiante1.apellido+"<br>");
document.write("La matricula del estudiante es: "+estudiante1.matricula);


//Problema 

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}

function Empresa(){
    this.verificoEdad=function(ed){
        if(ed<60){
            return true;
        }else{
            return false;
        }
    }
}

let adulto
adulto=new Persona("Leandro",59);

let parmalat
parmalat=new Empresa();
if(parmalat.verificoEdad(adulto.edad)){
    document.write("La persona "+adulto.nombre+" esta habilitada para trabajar");
}else{
    document.write("La persona "+adulto.nombre+" no esta habilitada para trabajar");
}

//Objetos en arreglos
function Hipervinculo(direccion, titulo) {
    this.direccion = direccion;
    this.titulo = titulo;
    this.retornarhipervinculo = function() {
        let cadena;
        cadena = '<a href=' + this.direccion + '>' + this.titulo + '</a>';
        return cadena;
    }
}

let vector = new Array(3);
vector[0] = new Hipervinculo('https://www.google.com', 'google');
vector[1] = new Hipervinculo('https://www.msn.com', 'msn');
vector[2] = new Hipervinculo('https://www.yahoo.com', 'yahoo');
for (let f = 0; f < vector.length; f++) {
    document.write(vector[f].titulo);
    document.write('<br>');
}

//Problema de objetos en arreglo

function AlmacenPersona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}

let vectorPersona=new Array(2);
vectorPersona=[new AlmacenPersona("Leandro",24),new AlmacenPersona("Kirstin",21)];
let personaMayor=0
for(let f=0; f<vectorPersona.length;f++){
    if(vectorPersona[f].edad>vectorPersona[personaMayor].edad){
        personaMayor=f;
    }
}
document.write("La persona mas grande es: "+vectorPersona[personaMayor].nombre);


//Objetos literales
let personaje={
    nombre:"Leandro",
    apellido:"Hernandez",
    imprimir:function(){
        document.write("Nombre: "+this.nombre);
        document.write("Apellido: "+this.apellido)
    }
}

personaje.imprimir();

//Problema objetos literales
let participante={
    nombre:function(nombre){
        this.nombre=nombre
    },
    puntos:function(puntos){
        this.puntos=puntos
    },
    imprimir:function(){
        document.write("Nombre jugador: "+this.nombre+"<br>");
        document.write("Puntos: "+this.puntos);
    },
    verificoSiGano:function(){
        if(this.puntos>1000){
            document.write("El jugador supero los 1000 puntos, gana"+"<br>")
        }else{
            document.write("El jugador no supero los 1000 puntos, no gana"+"<br>")
        }
    }
}

participante.nombre("Leandro");
participante.puntos(2000);
participante.imprimir();
participante.verificoSiGano();


function Alumno(){
    this.nombre="";
    this.apellido="";
    this.cedula="";
    this.materias=Array();

    cargarDatos=function(nombre,apellido,cedula){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cedula=cedula;
    }

    cargarMateria=function(materia){
        this.materias.push(materia);
    }

    

}
