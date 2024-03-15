//ejercicios creacion de variable
//Una variable global de tipo var para mostrar el alcance global
var global = "Global";
//Variable local
let local = "Local";
//variable constante
const constante = "Constante";
let Num = 8;
let Decimal= 12.45;
let String = "texto";
let Bool = true;
let Array = ["carpintero", "luis", "gallardo", "empireo"];
let Objeto = { edad:34, nombre: "gallardo", curso: "no estudio"};
let Indefinida; 
let Nula = null;
function sumar() {
return 11 + 2;
};

console.log( sumar() );

console.log("variables:\nNum: " + Num + " \nDecimal: " + Decimal + "\nString: " + String + "\nBool: " + Bool + "\nArray: " + Array + "\nObjeto: " + JSON.stringify(Objeto) + "\nIndefinida: " + Indefinida + "\nNula: " + Nula + "\nResultado de funcion: " + sumar());
console.log("variables: Global: " + global + "- Local: " + local + "- Constante:" + constante)