

// una vez que un evento se origina tiene una propagacion a lo largo del DOM
// Por lo general esa propagacion se da dando del elemento mas interno al mas externo(cocumento)

//vamos a crear una variable del DOM que me capture esas 3 divs

// el flujo de eventos se propaga del mas interno al mas externo

const $divsEventos=document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}


console.log($divsEventos); // node list

$divsEventos.forEach(div => {
    //Fase  de burbuja
    // div.addEventListener("click",flujoEventos,false);
    //div.addEventListener("click",flujoEventos,false);
    //fase de captura
    //div.addEventListener("click",flujoEventos,true); // si no esta especificado como TRUE se entiende que es burbuja
    div.addEventListener("click", flujoEventos,{
        //capture:false,
        capture:true,
        once:true //¿que pasa si tu tienes la necesidad de que un evento se jejecute una sola vez?
    });
});





// si quisiera el modelo contrario que es la face captura van del elemento mas externo al alemeto mas interno.

// en la practica, yo pocas vees he usado la face de captura

// cuando tu estructura tiene muchos elementos en el DOM, hay comprobaciones, que dicen que  en este tipo de elementos concatenados
// donde tenemos el mismo elemento asociado al elemento abuelo nieto , que se tenga que propagar el evento.
//en estructuras complejas del dom es mas obtima por que no te consume memoria.
// esta face de captura y burbuja la podemos omitir. si tu delegas a un lemento padre mas externo
 // y esto va ayudar al rendimiento de la memoria

 // en los ultimos años en el 3rer parametro tambien podemos especificar adicionalmente frue, false


 //EN QUE CONSISTE LA PROPAGACION DE EVENTOS.
 //FACE POR DEFECTO:BURBUJA
 //LA FACE DE CAPTURA: DEL ELEMENTO MAS EXTERIOR AL MAS INTERIOR. 
 //anbos estan relacionados al 3er parametro de la la funcion addEventListener.
