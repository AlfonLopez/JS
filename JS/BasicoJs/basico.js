var nombre = "Juan";
function saludar(){
    window.alert("Hola " + nombre + " que tal?");
}

function texto(dato){
    window.alert(dato);
}
function declarar(){
    var nombre = "Maria";
    nombre.bold();
    window.alert(nombre.bold());
}
function escribir(){
    var texto = "En un lugar de la mancha";
    document.getElementById("mensaje").innerHTML = texto.bold();
}

function numero(){
    var edad = 20;
    window.alert(++ edad);
}

function leer(){
    window.alert(document.getElementById("noticia").innerHTML);
    window.alert(document.getElementById("caja").value);
}