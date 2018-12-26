'use strict'

//funciones
function doThings( uno, dos,tres){
	console.log("Dentro de la funcion");
	console.log("Parametros Recibidos:" + uno +"," + dos);
	return "String de regreso"
}

function listThings( uno, dos, ...resto){
	console.log(resto);
}

var things = ["Pelota","Bat"];

doThings(12,28,true);
listThings(12,28,"true","HI",23.90);//["true","HI",23.9]
listThings( ...things,"lapiz");		//["lapiz"]


//funciones anonimas, sin nombre
var nombre = function(nombre){ return "El nombre es " + nombre; }
console.log( nombre("Gabo") );

// Con callBack
function suma (num1,num2,sumaYmuestra, sumaAlCuadrado){
	var result = num1 + num2;
	sumaYmuestra(result);
	sumaAlCuadrado(result*result);

	return sumaAlCuadrado;
}

suma (12,3,
	function(dato){
		console.log("La suma es:",dato)
	},
	function(dato){
		console.log("La suma al cuadrado es:",dato)	
	});


//funcion flecha que es sustituir la palabra function por la flecha
suma (12,3,	dato => {
		console.log("La suma es:",dato)
	},
	dato => {
		console.log("La suma al cuadrado es:",dato)	
	});

// Para procesamiento de textos

function hiFive(texto){
	console.log (texto);
	console.log ("= T R A N S F O R M E R =");
	console.log ( texto.toUpperCase() );
	console.log ( texto.toLowerCase() );
	console.log ( texto.toString() );
	if(texto != null || texto != undefined ){
		console.log ( texto.length );	
	}
	console.log ( ["1","2","3"].length );
	console.log ( "HOLA ".concat("- Mundo") );
	console.log ( texto.indexOf("CAR") );
	console.log ( texto.lastIndexOf("CAR") );
	console.log ( texto.search("CAR") );
	console.log ( texto.match("CAR") );
	console.log ( texto.match("/CAR/g") );
	console.log ( texto.substr(texto.lastIndexOf("CAR"), texto.length ) );
	console.log ( texto.startsWith("CAR") );
	console.log ( texto.endsWith("CAR") );
	console.log ( texto.includes("CAR") );

	console.log ( texto.replace("CAR","Car") );
	console.log ( texto.slice(30));
	console.log ( texto.split("CAR"));
	console.log ( texto.trim());
}

var texto=" -Este CARro suena raro que una CARreta- ";
hiFive(texto);

//Plantillas

var apellidos="Jhones";
var plantilla = `
	<h2>Datos del cliente</h2><b>Apellidos:</b> ${apellidos}
`;
document.write(plantilla);