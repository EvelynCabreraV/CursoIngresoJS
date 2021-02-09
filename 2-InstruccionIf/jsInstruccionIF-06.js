function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){


		alert("sos mayor de edad");
	}

	else{

		if( edad >=13 && edad <= 17)
		{
         
			alert("sos un adolescente");


		}
        
		else{

            
			if(edad < 13) {


				alert("sos un niño");
			}

        
		}

	}
	
    alert("fin de la operacion");

}

//FIN DE LA FUNCIÓN