// voy a crerar una funcion Anomima autoejecutable para evitar sobreescrituras

// vamos a encapsular nuestro codigo


//Creamos una funcion anonima autoejecutable
(()=>{
    const xhr = new XMLHttpRequest(), // este es el objeto Ajax 
            $xhr = document.getElementById("xhr"),

            // toda las variables que empiezan con "$" hace referencia al DOM
            // usamos el fragmento para no estar insertando al DOM por cada elemento
            $fragment=document.createDocumentFragment();

            //console.log(xhr);

            // asignamos un evento
            //xhr.addEventListener
           // xhr.onreadystatechange = 

           // se lanza cuando detecta cualquier cambio de estado, ya sea abortos, errores, 
           //todo los demas eventos que tiene AJAX reciden en el "readystatechange" 
           xhr.addEventListener("readystatechange",(e)=>{
            if (xhr.readyState!==4)return;

            //console.log(xhr);
            if (xhr.status>=200&&xhr.status<300) {
                
                // console.log("éxito ");
                // console.log(xhr.responseText);
                //$xhr.innerHTML=xhr.responseText;

                let json =JSON.parse(xhr.responseText); // con convierte a arreglo
               //console.log(json);

                json.forEach((el)=> {
                    const $li= document.createElement("li");
                    $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                    $fragment.appendChild($li);
                });

                $xhr.appendChild($fragment); // solo una insersion al DOM mejora el rendimiento

            }else{
                console.log("Error ");
                let message=xhr.statusText|| "Ocurrio un error";
                $xhr.innerHTML=`Error ${xhr.status}: ${message}`;

            }
            
            //console.log("Este mensaje cargará de cualquier forma");
           })//forma mas estandarizada en los ultimos años

           xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //verbo http en este caso GET
           //xhr.open("GET", "../0_assets/users.json"); // local
           

           xhr.send();
})();


//api FETCH
(()=>{
    const $fetch = document.getElementById("fetch"),
            $fragment=document.createDocumentFragment();

        
        //fetch("https://jsonplaceholder.typicode.com/users")
        fetch("../0_assets/users.json")// local
        // lo podemos combertir a texto(si estamos recibiendo codigo html, o xml) o imagen en data uri.
        //     // //res.blob(); [.json, .blob .text]
        .then((res)=>(res.ok?res.json():Promise.reject(res)))//operador ternario.
        .then((json)=>{
           // console.log(json);
            //$fetch.innerHTML=json;
            json.forEach((el)=> {
                const $li= document.createElement("li");
                $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment)
        })
        .catch((err)=>{
            //console.log(err);
            let message= err.statusText||"Ocurrio un Error";
                $fetch.innerHTML=`Error ${err.status}. ${message}`
        }).finally(()=>{
            //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch");
        });     
})();


// estamos usando variables similares, y para que no entren en conflicto  y tampoco generar modulos y tener todo en un solo archivo
// estamos utilizando funciones anonimas autoejecutables.
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
            $fragment=document.createDocumentFragment();
            //creamos una funcion asincrona
    async function getData() {
        try {
            // antes de que ejecute la siguiente linea de codigo espere. AWAIT
            let res= await fetch("https://jsonplaceholder.typicode.com/users"),
                json=await res.json();//espera antes de ejecutar la siguiente linea y comvierte en formato json la peticion.

           // console.log(res, json);


            // el objeto Error "Error" de js solo recibe mensajes textuales
            // los errores en JS no aceptan objetos
            // el "Throw" es como un retur que envia el flujo de la programacion al Catch.

            //if (!res.ok)throw new Error("Ocurrio un error al solicitar los Datos");

            //formamos un objeto
            if (!res.ok) throw {status:res.status, statusText:res.statusText}

            json.forEach((el)=> {
                const $li= document.createElement("li");
                $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);


        } catch (err) {
            //console.log(err);

            let message= err.statusText||"Ocurrio un Error";
                $fetchAsync.innerHTML=`Error ${err.status}. ${message}`


        }finally{// si necesito ejecutar algo independientemente del resultado
            //console.log("Esto se ejecutará independientemente de try... catch");
        }
        
    }

    getData()
    
})(); // no olvides poner el punto y coma al final de una funcion anoníma.

(() => {
    const $axios = document.getElementById("axios"),
            $fragment=document.createDocumentFragment();

    axios        
    .get("https://jsonplaceholder.typicode.com/user")
    .then((res)=>{
        console.log(res);
        let json=res.data;
        json.forEach((el)=> {
            const $li= document.createElement("li");
            $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch((err)=>{
        console.log(err.response);
        let message= err.response.statusText||"Ocurrio un Error";
                $axios.innerHTML=`Error ${err.response.status}. ${message}`
    })
    .finally(()=>{
        console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch");
    });
})();