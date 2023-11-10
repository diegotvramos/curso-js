

    // hoy vamos a ver como interactuar tanto el contenido textual como el contenido html de un elemento. es decir 
    // de un selector o una etiqueta html

    // capturamos en una variable la referencia de ese elemento

    const $whatIsDOM = document.getElementById("que-es"); // ¿como puedo modificar contenido de este selector  y reemplazarlo por el texto de abajo?
    let text=`
        <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
        API para documentos HTML y XML.
        </p>
        <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
        </p>
        <p>
            <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
        </p>
    `;

    // bueno tenemos varias propiedades: la primera.
    //$whatIsDOM.innerText=text;// se creo para Explorer||sirven para agregar contenido textual a un elemento.
    //¿por que me muestra las etiquetas <br>? por que el template string (``) me esta mapeando todo el texto
    // InnerText no esta reconociendo las etiquetas html

    //ESTA sí forma parte del estandar
    $whatIsDOM.textContent =text; // quitó toda las tabulaciones y lo indentó, pero no esta reconociendo las etiquetas HTML
    // si tu quieres que el contenido se renderise como codigo html, usamos:
    $whatIsDOM.innerHTML=text;
    //¿cuando usar innerHTML y cuando usar textContent?
    //eje: el chat de youtube bloquea esto: <img src="https://www.tiktok.com/@diegotvramos"> porque seguramente todo el texto introducido 
    // en ese input esta validado para que no se inyecten ningun tipo de codigo HTML sin envargo hay chats que si permiten eje chat de soporte
    // si lo acepta estan usando InnerHTML
    //SI envian chat con etiquetas ej. parrafo <p>  y se los pone con interogacion, significa que lo estan imprimiendo en la interfaz con 
    //TextContent, 
    //no es que uno sea mas util que el otro
    // si solo necesitar utilizar texto uss TEXTCONTENT Y cuando necesites insertar solo codigo html usas INNERHTML

    $whatIsDOM.outerHTML=text; // arregla lo que semanticamente esta mal un parrafo dentro de otro parafo no esta bien.