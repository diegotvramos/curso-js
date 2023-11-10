

//solo vimos hasta el momento como agregar elementos que creamos dinamicamente pra eso usamos el metodo appchild(agrega el elemento al final)
// sin envargo hay otros Metodos para agregar los elementos dinamicos

// *********OLD STYLE***********  <- metodo antiguo

const   $cards=document.querySelector(".cards"), //creamos a una variable
        $newCard=document.createElement("figure"),
        $cloneCards= $cards.cloneNode(true)// voy a colnar toda la seccion de targetas | si pones False va clonar solo la etiqueta.


$newCard.innerHTML=`
    <img src="images/zootecnia.jpg" alt="Any" width="200">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card"); // para que la etiqueta figure tenga la classe Card 

// imaginate que yo solo quiero reemplazar un elemento, aveces va ver la necesidad de remplazar un nodo

//hay un metodo que nos permite remplazar

//$cards.replaceChild($newCard, $cards.children[2])  //nodo de referencia padre($cards) || vamos a usar DOM TRAVERSING

// jhay un metodo que nos permite insertar antes de un nodo que tomemos como referencia

//$cards.insertBefore($newCard,$cards.firstElementChild) // recuerda {element no chile, por que el el primer nodo hijo es un texto llamado indentacion}

//tambien hay un metodo para Eliminar.
//$cards.removeChild($cards.lastElementChild) //podemos usar las propiedades del dom traversing


// asi como vimos como clonar el Template(importNode).
//el Dom tiene un metodo que nos permite clonar(cloneNode)

document.body.appendChild($cloneCards);// genera 2 secciones igualitas


// estos metodos son de antaño, con el avanze de JS tenemos nuevos metodos  


