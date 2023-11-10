
// let texto="hola, soy tu amigo y docente digital Kenay, yo se que tú puedes gerrero"
//     const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//     hablar(texto);


console.log("*******Elementos del Documento*******");

console.log(document); //console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);// repersenta la <etiqueta> html
console.log(document.doctype);
console.log(document.characterSet);// podemos acceder al juego de caracteres que tiene nuestro documento
console.log(document.title);
console.log(document.links); //[devuelve una coleccion de elementos(NODOS) HTML] no son areglos y por lo tanto
// no comparten todo los metodos de lo areglos, ej: si quiero aplicarle un MAP a esta coleccion de html.
// no podria, primeramente tendria que guardar esa coleccion en un arreglo y ahora si se puede hacer map
//foreacha(metodo que tiene un areglo),esto si comprate con los arreglos HTMLCOLLECTION (NO SON ARREGLOS)

//Podemos capturar las imagagenes
console.log(document.images); // inspeccionear una pagina web, en la parte de consola poner: >document.images
console.log(document.forms); // podemos acceder a una coleccion de formularios que tiene la pagina.
console.log(document.styleSheets);// accedemos a una colecion que representa a las hojas de estilo que tiene enlazada el documento.
console.log(document.scripts); // aparece 2 <script>  por que tenemos la extencion LIVE Servise, el servidor de tiempo real inyecta un script

//vamos a meterla a un 
setTimeout(() => {
    console.log(document.getSelection().toString());// cuando nosotros seleccionamos algo, tambien lo podemos mapear en javaScript
}, 2000);

document.write("<h2>Hola mundo desde el DOM</h2>");


//nosotros ya podemos empesar a interactuar con algunos de los elementos, y atributos y caracteristicas de html con estos metodos.
// <> elemento: etiqueta html
