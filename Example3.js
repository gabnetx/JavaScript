'use strict'

var num=100;
for (var i=0; i<=num; i++){
  console.log ("Numero: "+i);
  debugger;
  //Agregar el "watch" sobre las variables num y i
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
