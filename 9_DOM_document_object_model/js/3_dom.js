

//una etiqueta html para JS es un elemnto
// <h1>: elemento
//nodo
// dom es una API que tiene js en los navegadores para interpretar archivos html y xml 
// https://developer.mozilla.org/es/docs/Web/API/Node/nodeType 
//nos va interesar los nodos de tipo Elemento y los nodos de tipo Texto

//DEVUELVEN COLECCIONES
console.log(document.getElementsByTagName("li")); // forma antigua de traer todo los elemento que pornombre de etiqueta LI (ES UNA COLECCION NO ES UN ARREGLO)
console.log(document.getElementsByClassName("card"));//otra manera de capturar los elementos, por nombre de clase !! encontre 5 figuras con la clase CARD
console.log(document.getElementsByName("nombre"));// metodo que nos permite acceder atraves del nombre de atributo.
// recuerda que en los elementos del formulario es importante ponerle el atributo Name por que cuando tu procesas un formulario, 
 // y la envias al lado del servidor gracias a ese atributo name, el lenguaje al lado del servidor
 //lo detecta como una variable de tipo(post o guet) 




 //DEVUELVEN NODELIST

 console.log(document.getElementById("menu")); // los identificadores son unicos no(s)  #(no pones) devuelve el codigo html de dicho elemento

//********************** los 3 primeros metodos han sido reemplazados por: */
console.log(document.querySelector("#menu"));//recibe como parametro un selector valido [id, class, etiqueta html] que no sean seudo clases o seudo elementos
// es mas lento, por que hace una validacion de que tipo de selector ingresado
console.log(document.querySelector("a"));// tambien trae el primer selector del tipo especificado que haya encontrado en el documento html
console.log(document.querySelectorAll("a"));// para que traiga todo los selectores aumentas un (ALL) NODELIST!= LISTA(arreglo)!=coeccion
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(el=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
// PARA UN ELEMENTO ENPARTICULAR
console.log(document.querySelectorAll(".card")[2]);
// TAMBIEN acepta selectores descendientes
console.log(document.querySelector("#menu li"));// trae solo la primera
console.log(document.querySelectorAll("#menu li"));

//estos metodos los vamos a estar utilizando bastante  getElementById, querySelector, querySelectorAll
