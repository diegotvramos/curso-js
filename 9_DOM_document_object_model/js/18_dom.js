

/*
BOM( browser object model)
no es mas que una serie de metodos  y objetos que cuelgan directamente de window (ventana del navegador)

*/
window.addEventListener("resize",e=>{
    console.clear();
    console.log("*************** Evento Resize ****************");
    console.log(window.innerWidth); //tamaño de ancho
    console.log(window.innerHeight); //altura
    console.log(window.outerWidth); //
    console.log(window.outerHeight);//tamaño de nuestro navegaor
    console.log(e);// imprimimos el vevento, par que vean que es un evento Resize de la ventana
});
//cada ves que se redimencione la pantalla seria interesante ver la impresion en pantall


//Control de el desplazamiento Scroll
window.addEventListener("scroll", e=>{
    console.clear();
    console.log("*************** Evento Scroll ****************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

/*Dentro de tu pantalla tambien podemos identificar en que coordenada de tu pantalla
    empieza a dibujarse la ventana de tu navegador para eso podemos hacer uso de las propiedades
    screamx
*/

window.addEventListener("load", e=>{
    
    console.log("*************** Evento Load ****************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

// $(window).load(funcion); //jquery
// $(document).ready(funcion);
// $(window).on("load",funcion);


document.addEventListener("DOMContentLoaded",e=>{
    
    console.log("*************** Evento DOMContentLoaded ****************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

//es una buena practica cuando el DOM este listo es mucho mas eficiente trabajar con:
//Evento DOMContentLoaded que con Evento Load sobre todo cuando estemos haciendo peticiones asincronas
//por que  el DOMContentLoaded es disparado cuando el documento html a sido cargado y parciado
// ojo DOMContentLoaded , no va esperar a que carguen las hojas de estilo las imagenes las subdramas 
//o los scripts para que empieze a funcionar en cambio el vento Load se dispara hasta que haya cargado
// todo(las hojas de estilo a que carguen los scripts ) 
// y uno de los errores frecuentes es usar LOAD para inicializar cargas de tu sitio
//en este tiempo consumimos apis para pintar las interfazes visuales, pues justamente es las peticiones
//asincronas (recuerda:las peticiones a sincronas pausan el parseo del DOM ) entonces todo lo que necesites
//cargar al momento siempre va ser una mejor opcion hacerlo desde el Evento DOMContentLoaded 