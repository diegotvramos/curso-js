

export const PI = Math.PI;

export let usuario="jon";
//let usuario ="jon";
//export default let password="qwerty";// da error por que es una funcion expresada y no declarada(funcion normal)
//{const let no se puede exportar}
 
let password="qwerty";// delaracion
 //export default password;// carga esta informacion por defecto 

const hello=()=> console.log("hola"); // las funciones expresadas son las que se guardan en variable


// cuando se mande a llamar esa funcion SALUDAR se exporta automaticamente
// solo pude haber una exportacion POR DEFECTO en un archivo, por que marca error.
export default function saludar() {//funcion definidao llamada funcion declarada
    console.log("Hola Modulos +ES6");
}

// exportar por defecto una clase.

export class Saludar{
    constructor(){
        console.log("Hola Clases +ES6");
    }
}