function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 18){


		alert("sos mayor de edad");


	}

	/* de esta manera tambien se puede y es el tiene mas sentido
    else
	{
		alert(" sos menor de edad");
	}

     */

	if( edad < 18){


    alert("sos menor de edad");

	}


	alert("Fin de la ejecucion");

}