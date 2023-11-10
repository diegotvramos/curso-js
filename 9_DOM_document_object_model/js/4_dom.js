

// hoy veremos como interactuar con los tritubos de nuestras etiquetas HTML{type, name, href, src, charset} son atributos
// que tienen las etiquetas HTML

//A partir de HTML5 el estandar nos permite crear nuestros propios atributos
//tenemos 2 maneras de mandar a llamar los atributos, tambien de establecerles valores[1ra notacion del punto.]

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
// quiero obtener el HREF de el enlace <a> pues tiene una classe llamada:link-dom,
// entonces lo vamos a capturar por su selector 
console.log(document.querySelector(".link-dom").href);// tetector toda la ruta del life serve y me la esta trayendo
console.log(document.querySelector(".link-dom").getAttribute("href"));// trae solamente el valor que estaba escrito en el atributo href de ese enlace

//¿Como puedo establecer un nuevo valor a los atributos?

document.documentElement.lang="es"; // con esto el valor del atributo ya cambio aunque en el html no cambio nada. {notacion del punto}
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX"); //GET: recibe nombre del atributo, SET: recibe nombre del atributo, y el nombre del nuevo valor
console.log(document.documentElement.lang); 

//comanzamos a guardar en variables nuestros elementos del DOM, podemos usar: const o let

const linkDOM= document. querySelector(".link-dom");// jon: prefiere declarar toda variables para guardar todo los elementos del dom como CONST(constantes)
//usamos const para arreglos y objetos. porque {no acccedemos a valor en si, sino a una referencia [se mantiene siendo un objeto o arreglo]}
// no importa si yo con JS le agrego estilos, le cambio atributos; va seguir siendo ese mismo elemento del DOM a lo largo de mi aplicacion

//por eso declaro mis variables para elementos de dom en CONST(constantes)

//algunos desarrolladores, ($) es para distingir entre variables de tu apk y la otra refiere a tus variables de html
const $linkDOM= document. querySelector(".link-dom");// ojo, no es JQUERY $ALGO: hace referencia a una variable que guarda un elemento del DOM

//le puedo establecer valores que no tengan
$linkDOM.setAttribute("target","_blank")// para que no se recargue en la misma pestaña, sino que se abra otra
$linkDOM.setAttribute("rel","noopener")//para evitar que sea insegura, o evitar cierto tipo de haqueo vamos a agregarle este atributo
// rel, noopener, que no hay dependencia entre la ventana que estamos abriendo y la ventana origen, esto es parte de las buenas practicas
$linkDOM.setAttribute("href","https://youtube.com/diegotvramos")// vean que ya estamos modificando esos atributos
//tambien podemos quitar elementos, y tambien podemos validar si un tributo existe o no en un elemnto 

//mi variable linkDOM.hasAttributee tiene el atributo "rel"? ya sabemos que en el codigo original HTML estatico no hay pero gracias a el dom ya 
// se lo agregamos 
console.log($linkDOM.hasAttribute("rel"));
// me lanza un true
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));


//Si tenemos un SET y un GET tambien vamos a tener un REMOVE.
// hasta aca los elementos normalitos de html


//****************************************************************************************** */

// pero que pasa si tu quieres trabajar con los data atributes que nos da el estandar HTML5
//Data-Attributes
// vamos a tener la notacion del punto (.) y podemos hacer el uso de (GET O SET atribute.)

console.log($linkDOM.getAttribute("data-description"));// vamos a obtener el atributo data-description 
console.log($linkDOM.dataset);// obtenemos lo mismo pero con la notacion del punto(.). // cada data atribute lo va guardando en una propiedad de ese mapa.

//¿como yo podria modificar el data attribute? lo puedo hacer con setAttribute o la notacion del punto. 
console.log($linkDOM.dataset.description);// con la notacion del punto
//¿Como podemos establecer nuevos valores ?
$linkDOM.setAttribute("data-description","modelo de objeto del documento")// "nombre", "valor"
console.log($linkDOM.dataset.description);
// la notacion del punto
linkDOM.dataset.description ="Susctibete a mi canal y comparte"
console.log($linkDOM.dataset.description);

// hay esta la manera de tanto interactuar como de modificar, leer, evaluar si existen o no, tanto los atributos normales de html
// o como los nuevos Data-Attribute que tenemos a partir del estandar html5

// digamos que si quisiera validar que tuviera el data-id
console.log($linkDOM.hasAttribute("data-id")); //devuelve True
//tambien se lo podria eliminar
$linkDOM.removeAttribute("data-id");// con esto borramos el data-id
console.log($linkDOM.hasAttribute("data-id"));


//todos estos metodos validos para nuestros atributos normalitos tambien son validos para los data attributes