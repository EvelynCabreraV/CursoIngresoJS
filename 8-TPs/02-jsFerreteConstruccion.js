/* Evelyn Denisse Cabrera Vidal

TP Ejercicio 02

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    let largo;
    let ancho;
    let perimetro;
    let alambre;
    //El alambre puede ser una const por ser fija
    //const CANT_ALAMBRE = 3;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    //Estaria bueno que sea Float, debido a los centimetros

    perimetro = 2 * (largo + ancho);
    
    alambre = perimetro * 3; 
    //y se puede cambiar el tres por la const CANT_ALAMBRE;

    alert("se debe comprar  " + alambre + " metros de alambre");
}
function Circulo () 
{
    let perimetro;
    let radio;
    let alambre;
    const PI = 3.14;
    //el valor de una constante no debe estar en una diferente linea, sino que debe estar estan en la misma linea en la que declare la constante 
    
    radio = parseInt(document.getElementById("txtIdRadio").value);

    preimetro = 2 *  PI * radio;

    alambre = perimetro * 3;
    
    alert("se debe comprar " + alambre + " metros de alambre");
	
}
function Materiales () 
{
	
    let largo;
    let ancho;
    let area; 
    let cemento; 
    let cal;
    //Hay otra amnera de hacerlo y con const 
    //Se puede la constante con el cemento y el cal, ya que son valores fijos
    //const CEMENTO_X_METRO = 2;
    //const CAL_X_METRO = 3;
    //siempre tiene que estar en mayus el nombre de la constante


    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3;
    //se hace la regla de tres simple; area m2 * el cemento/ el cal dividod 1m2  

    alert("Para un contrapiso de " + area  + "m2 , se necesita comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");


}