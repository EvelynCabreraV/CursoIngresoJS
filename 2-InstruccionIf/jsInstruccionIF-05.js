function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(!( edad >= 13 && edad <= 17)){


		alert("no sos un adolescente");

	}

	else{

		alert("sos un adolescente");
	}
	
	alert("fin de la operacion");

}//FIN DE LA FUNCIÓN