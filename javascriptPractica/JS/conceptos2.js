// Arrays
/*
function cargar(sueldo){
    for(let f=0; f<sueldo.length; f++){
        let v=prompt("Ingrese sueldo");
        sueldo[f]=parseInt(v);
    }
}

function calcularTotal(sueldos){
    let total=0
    for(let f=0; f<sueldos.length; f++){
        total=total+sueldos[f];
    }
    document.write("<br>"+"Listado de sueldos")
    for(let f=0;f<sueldos.length; f++){
        document.write("<br>"+sueldos[f])
    }
    document.write("<br>"+"El monto total es: "+total);
}

let sueldos=new Array(5);

cargar(sueldos)
calcularTotal(sueldos)
*/

function solicitarFecha(mes,dia){
    let numero=parseInt(prompt("Ingrese numero del mes entre 1 y 12"))
    document.write("El mes es: "+mes[numero-1]+" y la cantidad de dias es: "+dia[numero-1])
}

/*
let meses=new Array(12);
meses[0]="Enero";
meses[1]="Febrero";
meses[2]="Marzo";
meses[3]="Abril";
meses[4]="Mayo";
meses[5]="Junio";
meses[6]="Julio";
meses[7]="Agosto";
meses[8]="Septiembre";
meses[9]="Octubre";
meses[10]="Noviembre";
meses[11]="Diciembre";

let dias=new Array(12);
dias[0] = 31;
dias[1] = 28;
dias[2] = 31;
dias[3] = 30;
dias[4] = 31;
dias[5] = 30;
dias[6] = 31;
dias[7] = 31;
dias[8] = 30;
dias[9] = 31;
dias[10] = 30;
dias[11] = 31;
*/

//Sintaxis mas concisa para agregarles valor a los arreglos
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

solicitarFecha(meses,dias)