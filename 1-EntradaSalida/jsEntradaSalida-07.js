/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	let n1;
	let n2;
    let resultado;
	
    n1 =parseInt(document.getElementById("txtIdNumeroUno").value);

    n2 =parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado = n1 + n2;

    alert (" la suma es " + resultado);


}

function restar()
{
	let n1;
	let n2;
    let resultado;

	n1 =parseInt(document.getElementById("txtIdNumeroUno").value);

	n2 =parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = n1 - n2;

	alert ("el resto es " + resultado);

 	

}

function multiplicar()
{ 
    let n1;
	let n2;
    let resultado;

	n1 =parseInt(document.getElementById("txtIdNumeroUno").value);

    n2 =parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = n1 * n2;

	alert ("el multiplicacion es " + resultado);


	
}

function dividir()
{
	let n1;
	let n2;
    let resultado;

	n1 =parseInt(document.getElementById("txtIdNumeroUno").value);

    n2 =parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = n1 / n2;

	alert ("el cociente es " + resultado);
}

// hay que tener en cuenta de pedir un espacio de memoria si o si