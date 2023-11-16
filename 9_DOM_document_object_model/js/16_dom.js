
/*
    hoy veremos como detener la propagacion, por que va ver casos donde tu no quieras que tu evento se propague
    hacia los elementos hijos o padres dependiendo de la fase que estés trabajando (burbuja o captura)
    para que solamente se ejecute una sola ves la programacion de tu funcion manejadora.
    Y tambien hay ciertos elementos del DOM que tienen eventos por Default.
    eje:el boton Submit sin necesidad que nosotros programemeos con JS el formulario a la hora que tu precionas
    un imput de tipo Submit el formulario se procesa, otro ejemplo: cuando nosotros estamos controlando el Scroll
    de las barras de desplasamiento ya sea con las flechas del cursor o con las teclas de arriba y abajo.
    pues ese es es el comportamiento por default que tienen esas teclas, la ruedita y las teclas de iz der
    otro ejemplo: el comportamiento que tienen los enlaces, te va llevar al contenido que tenga ese anchor (en su propiedad href)

    Mandas un Formulario en lugar de que se procese de manera convencional tu lo que vas hacer con JS es solicitar una 
    peticion asincrona via Ajax esa peticion Ajax, va y consulta una API consulta una DB, y cuando este lista la 
    respuesta, te va responder entonces ahi debemos desactivar el comportamiento de que el formulario se procece 
    de forma automática.

    ¿como podemos prevenir esas acciones por defecto que tengan nuestros elementos del DOM?
*/


const $divsEventos=document.querySelectorAll(".eventos-flujo div"),
        $linkEventos=document.querySelector(".eventos-flujo a"); // donde estan las divs traeme el primer enlace.

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();  //metodo que para la propagacion.
}


console.log($divsEventos); // node list

$divsEventos.forEach(div => {
   
    //div.addEventListener("click",flujoEventos,true); // si no esta especificado como TRUE se entiende que es burbuja
    div.addEventListener("click", flujoEventos,{ //, true desde dondes esta ejecutandose la propagacion es en uno
        //capture:false,
        // capture:true,
        // once:true //¿que pasa si tu tienes la necesidad de que un evento se jejecute una sola vez?

    });    
});

$linkEventos.addEventListener("click", e =>{
    alert("Hola soy tu amigo y docente digital... diego");
    e.preventDefault(); // cancela la acction que tenga por defecto el elementokk
    e.stopPropagation();
})
