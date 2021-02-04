/*
Evelyn Denisse Cabrera Vidal

Ejercicio 09

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let nuevoSueldo;
	let aumento;
	// para  calcular nuevo sueldo deberia sumarle al sueldo original el aumento 
	// para obtener el porcentaje de un valor se hace lo siguiente; se multiplica el valor por el porcentaje y se divide por 100
	
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;
    
	// para reducir el 10 / 100 se puede poner 0.10 ya que es una constante, aunque tambien se puede reducir mas 0.1 , ya que el 0 de la derecha es irrelevante
	//y se puede reducir aun mas, .1, ya que el 0 de la izquierda tambien es irrelevante

	nuevoSueldo = sueldo + aumento;
	
	document.getElementById("txtIdResultado").value = nuevoSueldo;
	
	
	 
}
