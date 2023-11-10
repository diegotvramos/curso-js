

    //no es mas que una serie de propiedades el API del Dom Para poder recorer los elementos 
    // o tomando con referencia un nodo porder recorer diferentes elementos

    //todo estos metodos son para los elementos
    // hay diferentes tipos de nodos, hay 12 tipos de nodos, (consultar en Mozzilla dev...) 
    // nodos de elementos(etiquetas html), nodos de texto, donos de comentarios, nodos de fragmentos
    //vamos a usar las propiedades que te sirven para recorer los elementos.
    //en mi codigo de html hay saltos de linea, eso para el DOM es un tipo de nodo, pero ami no me va interesar capturarlo
    // estre DOM Traversing es enfocado a los elementos(etiquetas html)

    // por ejemplo: si ya quisieras capturar comentarios html que dejees en tu documento, pues esos tendrias que accederolos
    // con los metodos para los nodoss

    const $cards= document.querySelector(".cards")
    console.log($cards);

    // que pasa si yo quisiera hacer referencia a sus hijos
    console.log($cards.children);//hace referencia a los hijos etiquetas
    // si quiero accder a un hijo en particular
        //console.log($cards.childNodes); // hece referencia a los nodos hijos la lista de nodos son 12 || el text que muestra representa al salto de linea

    console.log($cards.children[2]);
    // quien es el padre de cads, pues está directamente en el body
    console.log($cards.parentElement);// retorna el elemento padre,  || node= nodo
    // puedo obtener el primero y el ultimo elemento hijo
    //console.log($cards.firstChild); // el primer nodo seria el espacio(tabulacion) no muestra la figura :(
    console.log($cards.firstElementChild);
    //¿Como puedo detectar el ultimo elemento hijo?
    console.log($cards.lastChild);
    console.log($cards.lastElementChild);
    // tambien lo podemos hacer hacia afuera. sue hermano anterior seria el enlace y su hermano posterior seria la etiqueta <script>
    // tambien existe el mentodo sin la palabra ELEMENT que hace referencia a los nodos

    console.log($cards.previousSibling);//hermano anteriro || muestra: TEXT por que es el espacio de indentacion entre el enlace<a> y la <section>
    console.log($cards.previousElementSibling);
    console.log($cards.nextElementSibling);

    // metodo nuevo
    console.log($cards.closest("body"));//busca el ancestro ¿cual es el body mas cercano?
    console.log($cards.children[3].closest("section")); // ¿cual es la etiqueta <section> ancestro mas sercana...?



    // Y HACI DE SENSILLO ES RECORER EL ELEMENTO DOM  LO QUE SE CONOSE COMO DOM TRAVERSING

