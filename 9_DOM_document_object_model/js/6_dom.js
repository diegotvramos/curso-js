// la mayoria de los atributos html son de una palabra
// y accedemos de la notacion del punto .lang .href .id .src

//.Class, recuerda que Class es un palabra recervada en los lenguajes de programacion para crear clases
//podemos acceder a la cadena de texto atraves de la propiedad ClassName, o podemos acceder a un objeto especial
// que nos va devolver un objeto del navegador llamado DomTokenList, donde es como si fuera un arreglo
//donde en cada posicion nos va devolver cada una de las clases que tenga el elemento en cuestion


const $card= document.querySelector(".card")// me voy a traer la primera targeta 
console.log($card);//¿como puedo acceder al valor del atributo class?
console.log($card.className);// solo me devuelve la cadena te texto que tiene el atributo class
console.log($card.classList);
// las clases un poco mas complejas que los otros atributos
// por eso para ClassList tenemos una serie de metodos que nos van a ayudar 
// * a evaluar si un elemento si un elemento tiene una clase en particular

console.log($card.classList.contains("rotate-45"));// mi targeta numero uno tiene la clase:Rotate-45?
//¿como yo podria agregarle esa clase?
$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);

//tambien podemos quitar una clase
$card.classList.remove("rotate-45");
//hay un metodo que funciona como un switch(interruptor). entre Add y Remove en ingles se llama toogle
//si el elemento tiene la clase se la quita pero si no la tiene se la agrega

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
// esta de moda en las interfaces de los sitios y aplicaciones en la cual tenemos el tipico boton de modo(oscuro, claro) Dark mode
// asignar al vento click de ese icono y estar haciendo un toogle entre las clases

// ¿que pasa si tuvieramos la necesidad de reemplazar una clase en particular por otra?
$card.classList.toggle("rotate-45");//se lo quita
$card.classList.toggle("rotate-45");//se lo pone
$card.classList.replace("rotate-45","rotate-135");//el primer parametro es a clase a remplazar y el segungo parametro es la nueva clase 

//todos estos metodos: add, remove, toggle
//replace contains NO
// pero si tu tienes la necesidad de agregar quitar o intercambiar varias clases al mismo tiempo, lo puedes hacer así:

$card.classList.add("opacity-80","sepia") // puedes agregar varias clases a la vez, solo tienes que separarlos por comas.
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia") 
