//PREGUNTA 2. Explique que es el DOM en JavaScript y mencione 5 ejemplos prácticos.
var nombre="Anabel";
var apellido_pat="Soto";
var apellido_mat="Loayza";
var nacionalidad="Peruana";
var ocupacion="Estudiante";

document.getElementById("nombre1").innerHTML=nombre;
document.getElementById("apellido_pat1").innerHTML=apellido_pat;
document.getElementById("apellido_mat1").innerHTML=apellido_mat;
document.getElementById("nacionalidad1").innerHTML=nacionalidad;
document.getElementById("ocupacion1").innerHTML=ocupacion;
// Finaliza el desarrollo de la pregunta 2

// PREGUNTA 3. Desarrolle 8 botones que al presionar muestre el texto como alerta.
// Ejemplo:Si tengo un botón 1 y lo presiono deberá mostrarme una alerta “presiono el 1”
function boton1(){
    alert("presionó el botón 1")
}
function boton2(){
    alert("presionó el botón 2")
}
function boton3(){
    alert("presionó el botón 3")
}
function boton4(){
    alert("presionó el botón 4")
}
function boton5(){
    alert("presionó el botón 5")
}
function boton6(){
    alert("presionó el botón 6")
}
function boton7(){
    alert("presionó el botón 7")
}
function boton8(){
    alert("presionó el botón 8")
}
//Finaliza el desarrollo de la pregunta 3

// caso 4.1 
function suma_precio(){
    var p1=document.getElementById("producto1").value;
    var p2=document.getElementById("producto2").value;
    var p3=document.getElementById("producto3").value;

    var total_product=document.getElementById("total_productos").value=parseFloat(p1)+parseFloat(p2)+parseFloat(p3);

    document.getElementById("total_productos").value=total_product;

var mensajito="";
if(total_product>=500){
    mensajito="tendrá un descuento de 20 soles : "
  }else {
    mensajito="No tiene descuento: "
}
    document.getElementById("mensaje").innerHTML=mensajito;
}

// fin del desarrolo del  caso 4.1 

// caso 4.2 Mostrar si un número ingresado es par o Impar: 
function par_impar(){
    var n1=document.getElementById("numero").value;
    mensajito="";

    if(n1%2==0){
        mensajito="El numero es Par: "+n1;
    }else{
        mensajito="el número es Impar: "+n1;
    }
    document.getElementById("mensaje").innerHTML=mensajito;
}
// finaliza el desarrolo del caso 4.2 

// 4.3 Mostrar por consola los números pares menores a 15: 
function pares(){
    var inicio=1;
    while(inicio<15){
        var resto=inicio%2;
        if(resto==0){
        console.log(inicio);
      } 
        inicio++;
      }
    }
// finaliza el desarrollo del caso 4.3

function donacion(){
    var donacion1=document.getElementById("monto_total").value;

if(donacion1>=100000){
    document.getElementById("centro_salud").value=parseFloat(donacion1)*0.3;
    document.getElementById("comedor").value=parseFloat(donacion1)*0.5;   
    document.getElementById("inversion_bolsa").value=parseFloat(donacion1)*0.20;
        }   
else{
    document.getElementById("centro_salud").value=parseFloat(donacion1)*0.25;
    document.getElementById("comedor").value=parseFloat(donacion1)*0.5;   
    document.getElementById("inversion_bolsa").value=parseFloat(donacion1)*0.25;
    }     
}

