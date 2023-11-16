//una de las razones por las que fue creado js fue por la interaccion

//los EVENTOS son aquel mecanismo para controlar las acciones del usario y definir ciertos comportamientos del documento.
//que suceda en cierto momento o cumpla algunas condiciones, las funciones que se ejecutan en un momento es lo que se 
//conose como iventhandler(manejadores de eventos o escuchadores)


//hay 3 maneras de definir los eventos en js visita la pagina MDN tiene que comenzar con ON ON ON


//****************************** PRIMERA FORMA:COMO ATRIBUTO DEL HTML */
function holaMundo() {// esta funcion es la que se va a convertir en el manejador de eventos en el even handler
    alert("Hola mundo") // cuando una funcion se convierte en un manejador de eventos es decir una funcion que se ejecuta en un
    //evento nosotros podemos acceder a un objeto especial que es el evento en Si.
    console.log(event);
}

/* SEGUNDA FORMA: COMO UN MANEJADOR DE EVENTOS (forma mas correcta) */

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick=holaMundo; // cuando tu defines un evento como si fuera semantico simplemente igualas el evento semantico al nombre de la 
//funcion pero sin parentesis.// los parentesis significan que en el momento que carguen en el navegador se va ejecutar.

//este onclik es como agregarle un metodo al prototipo del modelo de evento.

$eventoSemantico.onclick=function (e) { // puede ser funcion anonima o arrow function. [ojo, solo puedes ejecutar la ultima funcion ]
    alert("Hola Mundo Manejador de Eventos Semanticos")
    console.log(e);
    console.log(event);
}

//toda funcion  que se convierte en un majejador de eventos es decir una funcion que se ejecuta en un evento NO puede recibir parametros
// el uncico parametro que recibe es el evento en si; "event": ya es una palabra recervada

/*QUE PASA SI TU TIENES LA NECESIDAD DE DEFINIR DIFERENTES FUNCIONES A UN MISMO ELEMENTO PUES PARA ESOTENEMOS: */
//MANEJADORES MULTIPLES, (manejador, escuchador etc)

const $eventoMultiple = document.getElementById("evento-multiple");

//eventoMultiple: se refiere a ejecutar varias funciones que se hayan definido en diferentes manejadores
$eventoMultiple.addEventListener("click",holaMundo) //los parentesis hacen que se ejecute inmediatamente.

$eventoMultiple.addEventListener("click", (e)=>{
    alert("Hola Mundo Manejador de Eventos Multiples")
    console.log(e);
    console.log(e.type);
    console.log(e.target); // el objeto que lo origina <booton>
    console.log(event);
}) 
