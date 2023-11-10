
// hoy toca ver como interactuar con los estilos de nuestros elementos html

const $linkDOM= document.querySelector(".link-dom");// ojo, no es JQUERY $ALGO: hace referencia a una variable que guarda un elemento del DOM
console.log($linkDOM); // el atributo STYLE en la etiqueta html nos permite agregar estilos en linea a nuestra etiqueta que no es la forma mas obtima en html
console.log($linkDOM.style); // me devuelve un objeto, muestra un mapeo de todas las propiedades css validas usa lowerCamelCase(no se usa gion medio por que representaria una resta en JS))
// TODAS ESTAN VACIAS, exepto 3 atributos
//CSStyleDeclaration puso las propiedades que detecto que yo le puse valor en esa declaracion en linea

// al final los estilos tambien son atributos
console.log($linkDOM.getAttribute("style"));// es mas objetivo
// puedo acceder de forma mas especifica con lanotacion del punto
console.log($linkDOM.style.color); // en este caso solo usas minuscula
//la ventana tambien tiene una manera de mostrarnos las propiedades css conocidas como:(computeProterty) o propiedades dinamicas de CSS, es
// una parte de las web API'S  que tienen los navegadores
console.log(window.getComputedStyle($linkDOM));// devuelve un mapa, a cada propiedad le asigna un indice
// muestra el valor por defecto que el navegador le esta dando a esa etiqueta a de link dom, a nivel de propiedades CSS, ahora esta consola
// de propiedades computadas las tenemos en la parte de Elements
// y en la parte derecha se encuentra la pestaña de: STYLE y Properties(propiedades){es como la cadena de herencia de todo los propotipos 
// que estan utilizando en este caso el <a> link}

// Son 2 maneras diferentes de ver los estilos (uno desde el objeto windows, dos desde el mismo elemento, desde la propia etiqueta html)

//como acceder a una propiedad en particular con getComputedStyle


console.log(getComputedStyle($linkDOM).getPropertyValue("color"));// no es necesario poner WINDOW window.getComputedStyle($linkDOM)

//¿como establecemos valores?
$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block");// ocupa todo el espacio disponible
//tambien podemos acceder con la notacion del punto
$linkDOM.style.width="50%"
$linkDOM.style.textAlign="center"
//ahora le vamos a dar margenes laterales para que se centre la caja
$linkDOM.style.marginLeft="auto"
$linkDOM.style.marginRight="auto"
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem"


console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));




// un Rem equivale a 16px en el navegador, entonces está mapeando tal cual como interpreta tanto valores como propiedades
//el navegador


//Variables CSS (css-Custom Properties CSS)
//ya tengo las variables css, lo primero seria saber como yo podria acceder a esas propiedades CSS 
// de entrada debo saber en que selector se encuentran, ya sabemos que estan en la etiqueta Root html

const $html= document.documentElement, // como accedo a una etiqueta html
      $body  = document.body;// ????????????? es una practica que usan los desarrolladores para referirse a variables que almacenan una referencia en el DOM

      //Ahora me voy a crear una variable para cada (custom properties CSS) que he declarado en el selector Root
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), // accedo a las propiedades
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color") 
    // por que no tienen($) estas variables, por que estas son variables normales que solo almacenan color, pero no es una referencia al DOM

    console.log(varDarkColor, varYellowColor); // ya accedimos a las variables, entonces ya podemos visualizarlos


    //ahora simplemente vamos a aplicarselas, por que ya accedimos a las variables CSS
    $body.style.backgroundColor= varDarkColor;
    $body.style.color= varYellowColor;

    //¿COMO yo podria modificar alguna de las variables? 
    // ¿donde estan declaradas la variables CSS? En el root que es el HTML

    $html.style.setProperty("--dark-color","#252a37")
    varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");// con esto actualizamos el valor de la variable varDarkColor

    $body.style.setProperty("background-color",varDarkColor);// volvemos a aplicar 

    //Y asi es como podriamos interactuar con las variables css que su nombre correcoto es las CUSTOM-properties
    // con esto ya esan mas que listos para interactuar con el CSS de sus documentos HTML a traves de javaScript


