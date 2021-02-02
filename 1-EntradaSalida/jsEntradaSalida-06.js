/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
let n1;
let n2;
let resultado;

n1 = document.getElementById("txtIdNumeroUno").value;

n1 = parseInt(n1);

n2 = document.getElementById("txtIdNumeroDos").value;

n2 = parseInt(n2);

resultado= n1 + n2;

alert ("la suma es " +resultado);



// Casting es covertir un dato numerico en otro dato numerico 
// ParseInt es covertir que no es numero en un dato numerico
}

