/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let importe; 
let importeNuevo;
let descuento; 

//parseFloat se utiliza para convertir un dato de tipo cadena y pasarlo a decimales 
importe = parseFloat(document.getElementById("txtIdImporte").value);

descuento = importe * 25 / 100;

importeNuevo = importe - descuento;
	
document.getElementById("txtIdResultado").value = importeNuevo;
	


}

/* Eveleyn Denisse Cabrera Vidal

Curso A

Ejercicio 02

villegas octavio

2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , 
el importe y tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"*/

function sumar()
{

    let nombre;
    let importe;
    let descuento;
    let porcentajeDescuento;
    let importeFinal;
   
    nombre = prompt("ingrese la descripcion");
    importe = prompt("Ingrese el importe");
    porcentajeDescuento = prompt("ingrese el descuento");
    
    importe = document.getElementById(txtIdImporte).value;
    
    importe = parseFloat(importe);
    porcentajeDescuento= parseInt(porcentajeDescuento);

    descuento = importe * descuento / 100;

    importeFinal = importe - descuento;

	alert("usted compro un " + nombre + " con " + descuento + "% de descuento, el precio final es $" + importeFinal);




}