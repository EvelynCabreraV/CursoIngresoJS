function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

	/*if(!(edad < 18 || estadoCivil != "Soltero"))*/ 
	 //Se traduece a no quiero menores de edad o a gente que esta soltero, como ambos son verdadero (true) va a ejecutarse el bloque
    if (estadoCivil == "Soltero" && edad >= 18) {

        alert("Es soltero y no es menor.");

	}
 
	
}//FIN DE LA FUNCIÓN