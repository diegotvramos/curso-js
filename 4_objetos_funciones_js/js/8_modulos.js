
import saludar, {Saludar,PI,usuario} from "./8_constantes.js";// (./) busca a partir de la carpeta donde estoy o (..../) [saludar, ]
//import { sumar, restar } from ".,,/8_aritmetica.js";
//import { aritmetica } from "./8_aritmetica.js";
import { aritmetica as calculos} from "./8_aritmetica.js";// vamos a poner un ALIAS.

console.log("archivos modulos.js");

console.log(PI,usuario);
//console.log(sumar(3.4));

//console.log(aritmetica.sumar(3,4));

console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));

saludar(); //[se autocompleto en import]

const saludo = new Saludar();
saludo; // no es necesario meterlo a un console.log  por que al instanciar el constructor lanza un console. log
console.log(saludo);

//destructuracion
//import React, {component} from 'React';

