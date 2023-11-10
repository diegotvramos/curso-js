

//la etiqueta TEMPLATE es como un modelo a seguir en el cual tu estructuras el contenido html 
// que quieras mediante javascript se convierta en dinamico y es otra forma de interactuar con el dom
// en esta clase vamos hacer en conbinacion con los fragmentos del dom a utilizar la etiqueta template

// la etiqueta TEMPLATE no se visualiza.

const $cards=document.querySelector(".cards"),// creo una variable que apunte al selector: cards
        $template=document.getElementById("template-card").content,// no me interesa apuntar a la referencia del ID, sino a su contenido.
        $fragment=document.createDocumentFragment(),
        cardContent=[
            // este areglo simularia es peticion o consumo de datos.
            {
                title:"tecnologia",
                img:"images/allieee.jpg",
            },
            {
                title:"Animales",
                img:"images/Brian-TRACY.jpg",
            },
            {
                title:"Arquitectura",
                img:"images/hill.jpg",
            },
            {
                title:"gente",
                img:"images/izumi.JPG",
            },
            {
                title:"naturaleza",
                img:"images/jamesClear.jpeg",
            }
        ]
        // por cada elemento que trae cardContend

        cardContent.forEach(el=>{
            $template.querySelector("img").setAttribute("src", el.img);// toda esa estructura Html ya la tenemos en el template || detro del template quiero que encuentres una img
            $template.querySelector("img").setAttribute("alt", el.title);
            $template.querySelector("img").setAttribute("width", "200");
            $template.querySelector("figcaption").textContent=el.title; // vamos a buscar, yo sé que dentro del template hay una etiqueta figcaption
            // y en la propiedad texContent quiero que ponga el titulo de la targeta

            //tenemos un solo template en la etiqueta HTML, entonces si yo utilizara ese template para la 1er targeta, ya no estaria disponible para las demas
            // lo que debemos hacer es clonar dicho nodo(clonar estructura)
            let $clone = document.importNode($template, true); //TRUE: copiate todo FALSE: solo copearia la etiqueta de apertura y cierre
        
            $fragment.appendChild($clone);
        })

        $cards.appendChild($fragment);


        // LAS ETIQUETAS "<TEMPLATE>" NO SE RENDERIZAN EN EL DOM , por que para el objetivo que se creó la etiqueta "<template>"
        //es para un modelo a seguir , es como sifuera como una clase en poo y apartir de ella a generar objetos
        //a partir de un template modelo empesar a generar estructuras del dom dinamicamente 
