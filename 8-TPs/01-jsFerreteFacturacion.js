/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let PrecioUno;
    let PrecioDos;
    let PrecioTres;
    let sumar;

    PrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumar = PrecioUno + PrecioDos + PrecioTres;

    alert("la suma es $" + sumar);

	
}
function Promedio () 
{
    let PrecioUno;
    let PrecioDos;
    let PrecioTres;
    let sumar;
    let promedio;

    PrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumar = PrecioUno + PrecioDos + PrecioTres;

    promedio = sumar / 3

    alert("El promedio es $" + promedio);
}
function PrecioFinal () 
{
	let PrecioUno;
    let PrecioDos;
    let PrecioTres;
    let sumar;
    let precioFinal;
    const IVA = 21;

    PrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    PrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    PrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumar = PrecioUno + PrecioDos + PrecioTres;

    precioFinal = sumar + sumar * IVA / 100;

    precioFinal = precioFinal.toFixed(2);
    //esto transforma a la variable, agregandole las decimales en este caso 2

    alert("El precio final $" + precioFinal);
}