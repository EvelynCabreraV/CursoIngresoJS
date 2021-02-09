function mostrar()
{
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <= 17){
    alert("sos un adolescente");
	}

	alert("termina la operacion");

}

/* Hay otra forma de hacerlo, es este caso se llama es añidados

    if(edad >= 13){

		if(edad <= 17){

			alert("sos adolescente");
		}


	}

   Y hay otra forma negandolo 


    if ( !(edad <= 13 || edad >= 17)  ){

		
	}
*/