/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
let NumeroUno;
let NumeroDos;
let resultado;

NumeroUno = document.getElementById("txtIdNumeroUno").value;

NumeroUno = parseInt(NumeroUno);

NumeroDos = document.getElementById("txtIdNumeroDos").value;

NumeroDos = parseInt(NumeroDos);

resultado = NumeroUno + NumeroDos;

alert ("la suma es " +resultado);



// Casting es covertir un dato numerico en otro dato numerico 
// ParseInt es covertir que no es numero en un dato numerico
}

