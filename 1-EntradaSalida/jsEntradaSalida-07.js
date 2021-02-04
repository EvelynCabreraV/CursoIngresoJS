/*
Evelyn Denisse Cabrera Vidal

ejercicio 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	let NumeroUno;
	let NumeroDos;
    let resultado;
	
    NumeroUno =parseInt(document.getElementById("txtIdNumeroUno").value);

    NumeroDos =parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = NumeroUno + NumeroDos;

    alert (" la suma es " + resultado);


}

function restar()
{
	let NumeroUno;
	let NumeroDos;
    let resultado;

	NumeroUno =parseInt(document.getElementById("txtIdNumeroUno").value);

	NumeroDos =parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = NumeroUno - NumeroDos;

	alert ("el resto es " + resultado);

 	

}

function multiplicar()
{ 
    let NumeroUno;
	let NumeroDos;
    let resultado;

	NumeroUno =parseInt(document.getElementById("txtIdNumeroUno").value);

	NumeroDos =parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = NumeroUno * NumeroDos;

	alert ("el multiplicacion es " + resultado);


	
}

function dividir()
{
	let NumeroUno;
	let NumeroDos;
    let resultado;

	NumeroUno =parseInt(document.getElementById("txtIdNumeroUno").value);

    NumeroDos =parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = NumeroUno / NumeroDos;

	alert ("el cociente es " + resultado);
}

// hay que tener en cuenta de pedir un espacio de memoria si o si