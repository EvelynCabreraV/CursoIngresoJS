function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	//Si queremos marcar a un menor seria: if(!(edad >= 18)){}    esto pasa porque tiene el signo ! que niega, o sea en este caso seria "NO quiero a los mayores de 18" .
	// Al reves seria if(!(edad < 18)); seria traducido a que "no quiero a los menores a 19", con un <= seria "No quiero a los menores de 18" porque estoy incluyendo el 18 con el =
	// a la ejecucion.
	if(edad >= 18 ){


		alert("Sos mayor de edad");



	}

	alert("fin de la operacion");
	

}//FIN DE LA FUNCIÓN