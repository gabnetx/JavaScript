'use strict'    //Modo estricto

var age = 18;
var name="Gabriel";
var imprime="";
/*
operadores relacionales
  >,<,>=,<=,==
 Operadores logicos
  AND: &&
  OR : ||
  NEGACION: !
  
*/

if(age >= 18){
  console.log(nombre + " tiene " + edad + "años, es mayor")
  
  if(age <= 33){ console.log('Todavia eres millenial'; }
  else if(age >= 70){ console.log('Ya eres anciano'; }
   else{ console.log(nombre + "Ya no eres millenial"); }
  
} else {
  console.log(nombre + " tiene " + edad + "años, es menor de edad");
}

switch(age){
  case 18:
    imprime="Mayoria de edad";
    break;
  case 25:
    imprime="Adulto";
    break;
  case 40:
    imprime="Andropausia";
    break;
  default: 
    imprime = "Neutral";
}
  
  console.log(imprime);
  
var year=2018;
if(year != 2017){ console.log ("El año no es 2017"); 
if(year >= 2000 && year <= 2020){ console.log ("Estamos en la era actual");}
  else {  console.log ("Estamos en la era post moderna"); }
