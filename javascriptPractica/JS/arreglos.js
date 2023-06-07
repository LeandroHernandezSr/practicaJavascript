// Metodo pop() y push()
function CrearArreglo(){
    this.arreglo=new Array();

    this.addValor=function(valor){
        this.arreglo.push(valor);
    }

    this.deleteUltimoValor=function(){
        this.arreglo.pop();
    }

    this.addValorPrimero=function(valor){
        this.arreglo.unshift(valor);
    }

    this.deletePrimerValor=function(){
        this.arreglo.shift();
    }

    this.mostrarValores=function(){
        for(let f=0; f<this.arreglo.length;f++){
            document.write(this.arreglo[f]);
        }
    }

    this.deleteValor=function(valor){
        for(let f=0; f<this.arreglo.length;f++){
            if(this.arreglo[f]==valor){
                delete this.arreglo[f];
            }
        }
    }

    this.recorrerForIn=function(){
            document.write("<br>Recorrer con for in");
        for(let indice in this.arreglo){
            document.write("<br>"+"indice: "+indice);
            document.write(" valor: "+this.arreglo[indice]+"<br>")
        }
    }
}

let personas=new CrearArreglo();
personas.addValor("1");
personas.addValor("2");
personas.addValor("3");
personas.addValor("4");
personas.addValor("5");
personas.addValor("6");
personas.addValor("7");
personas.mostrarValores();
//Metodo unshift() y shift()
document.write("<br>Metodo unshift() y shift()<br>");
personas.deleteUltimoValor();
personas.addValorPrimero("Me cole por unshift");
personas.deleteUltimoValor();
personas.mostrarValores();
//Metodo delete
document.write("<br>Delete<br>");
personas.deleteValor("4");
personas.mostrarValores();
//Usar for in para recorrer
personas.recorrerForIn();