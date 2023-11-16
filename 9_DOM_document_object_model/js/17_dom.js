

/*
    ya vimos la declaracion de los eventos, como remover, como pasar parametros, como detener flujo de propagacion,

    hoy  te voy a enseñar un concepto muy importante, de hecho, librerias como react, frameworks como vue y angular,
    internamente asi es como manejan el esquema de los eventos y esto optimisa mucho a nivel de recursos de memoria
    tus aplicacionde dejs que es la Delegacion de Eventos.

    ai es como yo esquemo el modelo de mis eventos yo genero un listener global para el document, si, tengo que activar
    clicks submits, blurf, focus, todo los eventos asignados se los pego al document y apartir de ahi nada mas detecto
    cual es el nodo que me interesa que active el evento y desencadeno la programacion que en lugar de tener, 
    30 o 1000 listeners generados al evento click tengo un solo listener generado al document y simplemente detecto
    cual es elemento que va desencadenar ese evento

    detalle importante de la delegacion de eventos: tambien vamos a evitar la propagacion!

*/


function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}


document.addEventListener("click",(e)=>{
    console.log("Click en ",e.target); // el evento click ya esta asignado al document.
    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }
    if (e.target.matches(".eventos-flujo a")) { // el metodo .Matches va validar a true cuando preciones el selector .eventos-flujo
        alert("Hola soy tu amigo y docente digital... diego");
        e.preventDefault(); // cancela la acction que tenga por defecto el elementokk
    }
});

console.log(window.document);

/*
    el StopPropagation, como el Document tiene asignado al click y es el document es el nodo raiz,
    pues ya no hay un elemento padre despues de él entonces vean que ya no es necesario el manejo del stopPropagation

    WINDOW es el contexto global, todo lo que esta en window, no es necesaro ponerle window ,
    el document tamiben cuelga de window

    por que si tu generas listeners normalitos a elementos que no existen en el dom pues te va marcar error en la consola
    por que no puede asignar un listener a un elemento que no carga


    esta es la forma mas optima de trabajar con los eventos en js
*/


