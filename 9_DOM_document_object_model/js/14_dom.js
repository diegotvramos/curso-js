

// hay 3 formas de poder declarar un evento (elemento html, manejador semantico, y manejador multiple)
//¿que pasa cuando necesitamos pasar parametros a la funcion manejadora del evento?
//Recuerda, una funcion que se ejecuta en un evento se conoce como el event handler(manejador de eventos)
//!cualquier funcion que se ejecute en un evento solo puede recibir como parametro el evento en SI.
// no le puedes pasar mas parametros a una funcion manejadora de eventos
//¿que pasa cuando una funcion se ejecute en un evento? pasarle parametros por que necesitas trabajar esos parametros.
// es como engañar un poquito al DOM del navegador


function holaMundo() {// esta funcion es la que se va a convertir en el manejador de eventos en el even handler
    alert("Hola mundo") 
    console.log(event);   
}

function saludar(nombre="Desconocid@") {
    alert(`Hola ${nombre} -`); //${event}
    // con esto les compruebo que toda funcion que vaya a ser manejadora de eventos no puede recibir otro parametro
    // que no sea el evento en si
    console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover")


$eventoMultiple.addEventListener("click",holaMundo) 
$eventoMultiple.addEventListener("click", (e)=>{
    alert("Hola Mundo Manejador de Eventos Multiples")
    console.log(e);
    console.log(e.type);
    console.log(e.target); 
    console.log(event);
}) 
$eventoMultiple.addEventListener("click",()=>{//SOLUCION
    saludar();
    saludar("diego");
}) // con esto la Arrow function pasa a ser la manejadora de eventos

//funcion expresada. (todo esto para guardar en otra parte el codigo)
const removerDobleClick = (e) =>{
    alert(`removiendo el evento de tipo ${e.type}`)
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true; // es un atributo Html
}

// nos va pedir el evento a remover y la funcion manejadora asociada a ese evento
$eventoRemover.addEventListener("dblclick", removerDobleClick);

//cuando quieran remover una funcion manejadora esa funcion debe estar previamente guardada no puede ser una arrow function 
//un funcion anonima.

//siempre puedes mandar a llamar el evento nativamente con la palabra EVENT.

