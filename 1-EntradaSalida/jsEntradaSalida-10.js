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
