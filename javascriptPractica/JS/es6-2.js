//Declaracion de clases
class Cliente {
    //Constructor
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    //Atributos se acceden con la palabra clave 'this'
    depositar(dinero) {
        this.saldo = this.saldo + dinero;
    }

    extraer(dinero) {
        this.saldo = this.saldo - dinero;
    }
}

/*
Crear un objeto de la clase

const cliente1=new Cliente('Leandro',1500);
cliente1.depositar(200);
cliente1.extraer(50);
*/


class Menu {
    constructor() {
        this.url = [];
        this.descripcion = [];
    }

    insertarEnlace(urlEnlace, descripcionEnlace) {
        this.url.push(urlEnlace);
        this.descripcion.push(descripcionEnlace);
    }

    mostrar(elemento) {
        let cadena = '<div>';
        for (let x = 0; x < this.url.length; x++) {
            cadena += `[<a href="${this.url[x]}">${this.descripcion[x]}</a>]`;
        }
        cadena += '</div>';
        document.getElementById(elemento).innerHTML = cadena;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menu = new Menu();
    menu.insertarEnlace("https://www.example.com", "Enlace de ejemplo");
    menu.insertarEnlace("https://www.example.com", "Enlace de ejemplo");
    menu.insertarEnlace("https://www.example.com", "Enlace de ejemplo");
    menu.mostrar("menuid");
});

//Herencia
class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    imprimir(){
        document.write(`Nombre: ${this.nombre}`);
        document.write(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona{
    
}