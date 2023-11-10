

// con el lanzamiento de las nuevas versiondes de JS hay nuevos metodos para insertar donde nosotros queramos

// .insertAdjacent...
// .insertAdjacentElement(position, el) =====> hace referenia a un HTML 
// .insertAdjacentHTML(position,html) =====> hace referencia a codigo html
// .insertAdjacentText(position,text) =====> al texto contenido html

// //posiciones:
// beforebegin(hermano anterior)
// afterbegin(primer hijo) // vendria a ser como un innerHTML   
// beforeend(ultimo hijo) // vendria a ser como n text contend
// afterend(hermano siguiente)

// Lo que vamos a hacer es incertar una nueva targeta (como elemento html)

const   $cards=document.querySelector(".cards"), //creamos a una variable
        $newCard=document.createElement("figure");

        //$newCard.innerHTML=`
        let $contenCard=`
        <img src="images/zootecnia.jpg" alt="Any" width="200">
        <figcaption></figcaption>
    `;

    $newCard.classList.add("card"); 


    //$cards.insertAdjacentElement("beforebegin", $newCard) // targetas lo voy a tomar como referencias y lo voy a insertar como hermano anterior
    //{HERMANO ANATERIOR, QUE TOMO COMO REFERENCIA}
    $newCard.insertAdjacentHTML("beforeend", $contenCard)
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
    //$cards.insertAdjacentElement("afterbegin", $newCard) // adicina como primer hijo 
    //s$cards.insertAdjacentElement("afterend", $newCard)
    // con solo cambiar el nombre de la posicion(esta en la documentacion)


    //jquery =====> los mismos metodos que teniamos en jquery ya lo tenemos nativamente

    //$cards.prepend($newCard);// =====> hijo primero
    //$cards.before($newCard);// hermano anterior l
    //$cards.append($newCard);
    //$cards.after($newCard);// se inserto como hermano posterior 

    // vean todo el abanico de opciones que tememos para insertar elementos al dom
    // vean por que jquery ya no tiene sentido aprenderlo hoy en 2020

    //js se mantiene actualizado, y se estandarizan entre ellos por eso ya no se necesita jquery, muchas empreseas aun en sus tripas sigue usndo jquery como: wordpress, jumla, bootstrap



