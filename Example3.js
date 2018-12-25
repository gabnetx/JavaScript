'use strict'

var num=100;
for (var i=0; i<=num; i++){
  console.log ("Numero: "+i);
  //debugger;
  //En Chrome Agregar el "watch" sobre las variables num y i
  //En IE agregar inspeccion sobre las variables num e i
}

//Tablas de multiplicar
for (var c=1;c <= 10; c++){
	document.write("<h2>Tabla del "+c+"</h2>");
	for(var t=1; t<=10; t++){
		document.write(c + " X " + t + "=" + (c*t) + "<br/>");
	}
}

var year=2018;

while(year <= 2051){
	console.log("Estamos en el año "+year);
	year++;
}

year = 25
do {
	console.log("Esta se ejecuta al menos una vez");
	year= 20;
} while ( year != 20)
