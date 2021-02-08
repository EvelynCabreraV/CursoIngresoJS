/*
Evelyn Denisse Cabrera Vidal 
Ejercicio 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
let nombre;

nombre = document.getElementById("txtIdNombre").value;
// Hay otra manera de hacerlo que es nombre="txtIdNombre".value 
alert (nombre);

}
//Si el ID no existe, te salta null, porque no existe el ID




