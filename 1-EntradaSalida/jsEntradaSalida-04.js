/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// primero asigno la variable
 let nombre;

 // luego le doy unn valor a la variable con prompt para guardar el texto que se escribio en la ventana prompt
 nombre = prompt ("ingrese su nombre");

// copio el nombre que tengo guardo en la variable nombre dentro de la caja de texto embebida de la pagina html
document.getElementById("txtIdNombre").value = nombre;

 
	
}

