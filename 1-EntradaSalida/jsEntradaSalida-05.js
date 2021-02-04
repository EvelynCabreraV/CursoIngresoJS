/*
Evelyn Denisse Cabrera Vidal

Ejercicio 05

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	let edad;

nombre = document.getElementById("txtIdNombre").value;

edad = document.getElementById("txtIdEdad").value;

alert("Usted se llama " +nombre + " y tiene " +edad + " años");

// hay otra manera de hacerlo
//alert(`Usted se llama ${nombre} y tiene ${edad} años`);
//a esto " `` "  se llama back tick
}

/*
Evelyn Denisse Cabrera Vidal

Ejercicio 05 bis

bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"

*/
function mostrar() //acordate de poner esto 
{
	let nombre;
	let apellido;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;

	apellido = prompt("ingrese su apellido"); 

	edad = document.getElementById("txtIdEdad").value;
	
	alert(apellido + " ,Usted se llama y tiene " + edad +" años");

}

// " { } " es un conjunto   



