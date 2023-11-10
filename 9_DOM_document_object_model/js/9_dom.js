// recuerden que estamos viendo a como manipular el API del dom que es la manera de como js puede interactuar con el html
// y el día de hoy te voy a enseñar a crear elementos dimanicamente a traves de javaScript
// recuerda que un elemento es una etiqueta HTML
// hasta ahora ya hemos aprendido a manipular ya las etiquetas existentes en nuestro archivo html pero el dia de hoy vamos a empesar a crear
//nuestras propias etiquetas dinamicas

// vamos a crear una 6ta targeta

const $figure=document.createElement("figure"),
$img= document.createElement("img"),
$figcaption= document.createElement("figcaption"),
$figcaptionText= document.createTextNode("Animals"),
$cards=document.querySelector(".cards");

$figure2 = document.createElement("figure") // min 10

$img.setAttribute("src","images/zootecnia.jpg"); // vamos  aponerle un atributo a esa etiqueta
$img.setAttribute("width","200");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");// al nodo fiture en su lista de clases le agregamos la clase CARD

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img);// al nodo figura vamos a agregarle el nodo:IMG
$figure.appendChild($figcaption);
$cards.appendChild($figure); // agregar un hijo: agrega un nodo
 
// voy a usar la propiedad inerHTML para agregarle el contenido dinamicamente
//la desventaja es que esto al hacerlo como texto js no lo considera como un nodo pero finalmente estamos generando contenido dinamico

$figure2.innerHTML=`
    <img src="images/keanuReves.jpg" width="200" alt ="People">
    <figcaption> People </figcaption>
`
$figure2.classList.add("card");// agregamos la clase card para que tome los estilos
$cards.appendChild($figure2);
// esta es una manera de crear nodos uno po uno

// ¿por que figure?  por que vamos a crear una etiqueta html
//el dom tiene un metodo que se llama create ele    ment (crea elemeto del DOM)
//vamos a crearnos una variable que se llame IMG, Y de igual manera vamos a crar un elemento dinamicamente
// de tipo img; pues aca le puedes agregar la etiqueta que necesites crear (cualquier etiqueta valida de html)

//la figcaption no tiene atributos pero si tiene un nodo de texto. recuerda que tenemos en el DOM en la especificacion del DOM 
//existen 12 diferentes tipos de nodos uno de ellos son las etiquetas otros son los nodos de texto, entonces para el nodo de texto
//de la Figcaption necesitamos crear otro elemento de tipo texto, lo podriamos hacer con la propiedad textCoutend,
// ademas de eso necesito capturar el elemento padre donde voy a incertar justamente esa targeta.
//por el momento esas son las variables que yo  necesitaria o los elementos del dom.

// ahi dinamicamente ya estan creadas esas etiquetas sin envargo no estan incorporadas en el arbol del dom para eso yo necesito
// ircelas agregando

// ESTA es la manera correcta, si has trabajado con REACT.js vue.js , angular , sbelt, asi van creando internamente estos nodos
// cada vez que tu(ya sea en el template de vue.js o en js.x de react) vas creando tus etiquetas html, pues es así tras bambalinas este tipo de librerias
//van creando sus elementos



//que pasa si venimos de consultar una DB o una api y nos esta regresando un Json y tenemos varios elementos que 
//dinamicamente queremos agregar

const estaciones=["Primavera", "Verano", "Otoño", "Invierno"], 
    $ul =document.createElement("ul"); // he creado dimamicamente una etiqueta UL

document.write("<h3>Estaciones del año</h3>"); // no es buena practica utilizar el document. write

// escribe espues del script, lo que vamos a hacer es crear dinamicamente las list Item de esta UL(PRIMAVERA VERANO...)

//¿a que elemento padre vamos agregar esa ul?
//pues el body
document.body.appendChild($ul);
estaciones.forEach(el=>{// por cada elemento aga lo siguiente
    const $li=document.createElement("li");
    //podemos crear un nodo de texto, como lo hice en figcaptions o simplemente accedemos a :
    $li.textContent=el; //o pudimos usar createText NOde, tambien podemos usar la tecnica de INNERhtml
    $ul.appendChild($li);
    //con el appendChild le estamos agregando a la UL por cada elemento estamos haciendo una insercion 
    //al DOM y las inserciones al dom son una de las operaciones mas demandantes es como la problematica
    // en el dessarrollo fronted
    //esta es una tecnica correcta
});

const continentes=["Africa","America","Asia","Europa","Oseania"],
$ul2 = document.createElement("ul"); // va ser de tipo etiqueta ul 
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML=""; // inicializamos innerhtml como vacia 
continentes.forEach((el)=>($ul2.innerHTML+=`<li>${el}</li>`))

// imaginense renderizar la vista de varios elementos.
// anque estas usando iner.html, por cada recorido estas modificando el contenido html de ese elemento, entonces por cada iteracion del ciclo
// le estamos pegando ahi al DOM
// en lugar de estar pegandole al don en cada iteracion, lo que podemos hacer es crear fragmentos dinamicos, que es como una variable que se crea
// dinamicamente y a ese fragmento le podemos estar iterando, que está en la memoria y no directamente en el DOM
// y una ves que tengamos todo los elemento cargados en ese fragmento entonces solo hacemos una insercion al DOM con los miles de registros
// que nuestra peticion haya capturado y eso pues mejora el rendimiento.

//CON FRAGMENTO.

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"],
$ul3 = document.createElement("ul");

$fragment=document.createDocumentFragment();


//como son fragmentos del dom pues aca no podemos usar la tecnica del innerHTML, sino tendriamos que crear la tecnica de crear elementos, nodos
// con create element
months.forEach(el=>{
    $li=document.createElement("li");
    $li.textContent=el; // agregamos el mes
    $fragment.appendChild($li) // los fragmentos son uno de los 12 diferentes nodos en la especificacion del dom [elemento, textos, comentarios, fragmentos] 
})

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment); //a la ul3 le agregamos como hijo el fragmento
document.body.appendChild($ul3);
// es una manera mas optima para no pedirle tanta demanda de recursos al navegador del usuario que este interactuando con nuestra aplicacion 


