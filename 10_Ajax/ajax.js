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
            console.log(json);
            //$fetch.innerHTML=json;
            json.forEach((el)=> {
                const $li= document.createElement("li");
                $li.innerHTML=`${el.name}---${el.email}---${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment)
        })
        .catch((err)=>{
            console.log(err);
            let message= err.statusText||"Ocurrio un Error";
                $fetch.innerHTML=`Error ${err.status}. ${message}`
        }).finally(()=>{
            console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch");
        });     
})();