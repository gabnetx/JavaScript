'use strict'

var resultado = confirm("¿Estas seguro?");
console.log(resultado);

resultado = parseInt (prompt("¿Cual es tu edad?",18));
while (isNaN(resultado)){
  resultado = parseInt (prompt("¿Cual es tu edad?",18));
}

console.log( typeof resultado);

