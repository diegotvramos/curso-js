



## Curso java Script


**[link](https://diegotvramos.github.io/curso-js/)**

si quieres saber mas de js puedes ir a la documetacion en este enlace

https://developer.mozilla.org/en-US/docs/Web/Events



## AJAX:Asynchronous JavaScript & XML

FUE CREADO POR MICROSOFT
para enviar o recibir informacion se puede usar json, xml

El atractivo de ajax está en la naturaleza asincrona lo que significa que se puede comunicar con el servidor intercambiar datos y actualizar la interfaz del usuario sin necesidad de recargar el navegador.
tenemos 3 metodos nativos para ajax los navegadores en ese entonces usaban XML HTTPREQUEST(es el objeto que describe Ajax) y en los ultimos años tenemos **API Fetch** es una manera moderna de hacer Ajax

**jquery**

es una libreria externa que ya está dado sus ultimos momentos, nos ofrecia varios metodos pero el mas importante era **.ajaxComplete.**
vamos a ver la libreria **Axios**

https://cdnjs.com/ <== es la cdn de las librerias de js?


 https://developer.mozilla.org/es/docs/Web/HTTP/Status 
**Códigos de estado de respuesta HTTP**
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- y errores de los servidores (500–599).

Los códigos de estado se definen en la sección 10 
son peticiones del protocolo HTTP es en el que tenemos internet
(verbos del procolo HTTP similar a CRUD)


#### accediendo a la api de Github
puedes acceder de esta manera al **jSON** de mi cuenta de git hub.
https://api.github.com/users/diegotvramos 

usa un formateador de json es decir usa una extencion de navegador llamada: _JSON FORMATTER_
### Metodos **nativos**
#### AJAX: OBJETO XMLHttpRequest
MUY IMPORTANTE.
recuerda trabajar con el protocolo HTTP, esto lo obtenemos usando el servidor local liveServer para que levante tu entorno en un servidor web  y no el protocolo FILE(es la ruta desde el disco duro) Ajax no va funcionar.

El DOM, Ajax, son  Apis interna de el javaScript de los navegadores
tambien vamos a tener Apis externas a servicios a plataformas a redes sociales entonces para traer datos de un servidor (simulacion de peticion a una base de datos o una api externa)

https://jsonplaceholder.typicode.com/ este servicio es una api falsa para hacer pruebas y prototipos

podemos consumir apis que estan publicas en internet pero tambien podemos consumir archivos json que tengamos localmente

_Onreadystatechange_ es su evento mas impotante
- paso 1 la instancia,
- paso 2 la asignacion del evento
- paso 3 abrir la peticion (establecer el metodo, URL de video)
- paso 4 enviar la peticion

el el metodo por el cual vamos a comunicarnos xht.open()


 https://developer.mozilla.org/es/docs/Web/HTTP/Status 
##### estados de peticion

la ruta 404 no existe 
![Esta es una imagen de ejemplo](/10_Ajax/404.JPG)

lo que nos interesa son los:
 2. Respuestas satisfactorias (200-299) Status(codigo del servidor)

 tu puedes crear tus propios archivos Json en el mundo laboral vas a tener que consumir (aplicaciones)apis que esten en el internet

#### AJAX: Api Fetch

_tras bambalinas usa OBJETO XMLHttpRequest _

> ``fetch("https://jsonplaceholder.typicode.com/users").then().catch().finally();``
>> ``fetch("", {method:"GET"})`` puede recibir un parametro de opciones
fetch trabaja con un mecanismo de promesas
se simplifica el codigo, para eso debemos entender las promesas entender el THEN, CATCH, FINALLY
PARA LA PROXIMA VE EL VIDEO DE Async- Await que es una manera de conbinar promesas con funciones asincronas que se esperan a la respuesta del servidor
esta es la 2da manera de trabajar peticiones asincronas Ajax con los navegadores web

##### AJAX: Api Fetch + Async-Await

el codigo se ve mas limpio
el objeto Error "Error" de js solo recibe mensajes textuales
los errores en JS no aceptan objetos
el "Throw" es como un retur que envia el flujo de la programacion al Catch.
if (!res.ok)throw new Error("Ocurrio un error al solicitar los Datos");
formamos un objeto

*** 
### librerias **externas**

#### Jquery.Ajax()

javaScript ya soporta toda esas caracteristicas que en un principio nos ayudaba  _Jquery_

#### Axios

esta basada en promesas que nos ayuda mucho a la hora de hacer peticiones Ajax

> console.log("Estamos en el Catch", err.response); 
está en la documentacion de Axios
https://github.com/axios/axios?tab=readme-ov-file#handling-errors 


#### Ajax: libreria Axios & Async-Await

al igual que fetch puede que te de cononflicto esto de tener codigo concateneado en (thens) entonces podemos hacer uso de funciones asincronas para mejorar la legibilidad

axios se ha vuelto un estandar.

¿por que repeti a nivel del DOM?
para que vean que el resultado lo podemos hacer con cualquiera de estas 5 mecanismos 
Axios lee peticiones apis publicas  como tambien de archivos locales

--- 

## APIs REST

### Introduccion de API REST: Introduccion

es la forma como se estan trabajando tanto las aplicaciones web como las aplicaciones nativas, es una nueva arquitectura.
MVC fue muy popular.

API.(aplication programing interface) api de geolicaciolacion , api para la camara web

dentro del mundo de las apis  tenemos apis nativas(el motor de js trae integrado para acceder al DOM la camara web, bateria, geolocalizacion) y apis externas(api de github. no es mas que una URL conocido como end points, api de fb).

Las APIS externas generalmente te dan una ducumentacion (rutas, endPoints) amazon tiene sus propias apis externas son externas por que no son nativas del navegador(DOM) LOS HACEN 3ras personas.

_¿que carajos es REST?_ 
un servicio Rest es un conjunto de restriccciones con las que podemos crear una arquitectura de software como los frameworks modernos eje: vue.js, react, angular,  hemos ido migrando del modelo vista controlador a un esquema de arquitectura basada en REST
**rest** se basa en el protocolo *HTTP*
caracteristicas para que un sistema se considere tipo *REST O RESTFULL* 

- la relacion cliente servidor _estan desacoplados al cliente no le interesa saber los detalles de como se implemento el lado del servidor que le esta devolviendo la respuesta en formato JSON o en formato XML y al servidor no le interesa como el cliente vaya a utilizar  esta informacion para pintarla en los datos_

- las Apis res son sin estado _cada peticion recibida por el servidor se va manejar de manera independiente lo que evita que mantenga seciones conectadas como para hacer varias peticiones al mismo tiempo_

- Cacheable _que debe haber un sistema de almacenamiento en cache para evitar repetitivas conecciones hacia un mismo recurso del servidor y esto pues va inpactar en el rendimiento de las aplicaciones por eso las aplicaciones basadas en esta arquitectura mas con todo estos frameworks reactivos aceleran mucho el tiempo de carga_

- Mantener una interfaz uniforme _una interfaz generica que permita la administracion entre la interaccion del cliente y el servidor,quiere decier que para cada peticion va existir una url unica y con las caracteristicas de como nosotros le vamos a enviar la informacion esto en el mundo de las APIs se le conoce como ENDPOINTS _

- Una API rest  bien diseñada debe tener un *sistema de capas* _que de lado del servidor debe haber varias capas a la hora de implementarla para estar previstos si mas adelante si ese desarrollo escala, para que la manera en que haya sido programada permita la escalabilidad, capas para monitorizar el rendimiento y la capa de seguridad_

entonces actualmente en el mundo del desarrolo web este va ser el modelo de arquitectura con el que vamos a estar trabajando

*¿las Apis de tipo rest son el nuevo CRUD?*

el crud son las operaciones que puedo hacer a una base de datos
*en un sistema MVC*
el controlador determina todo, (epoca de frameworks como laravel, codeigniter{bueno})
_todo pasaba por el controlador ej: base de datos, codigo html mesclado con php era donde teniamos vistas mescladas de codigo front end con codigo backend para generar dinamicamente las a plicaciones_

*las apiRest trabaja con el protocolo HTTP*

Operaciones CRUD	Peticiones REST

***

* INSERT	            POST
* SELECT	            GET
* UPDATE	            PUT
* DELETE	            DELETE

**ventajas de API REST**

como el cliente y el servidor estan desacoplados yo puedo decidir en que base de datos yo puedo trabajar si es SQL o no SQL si es java, si es node o es php si es pyton, si es rubic yo construyo mi API de tipo rest y lo unico que yo voy a hacer es exponer al cliente la informacion el formate JSON o XML que son 2 formatos de intercambio de informacion validados por lenguajes y tecnologias, pues me importa si el front que me está haciendo la peticion es un front en una aplicacion de android una aplicacion para IOS windows, web etc

_nosotros podemos tener diferentes fronts pero la parte del modelado de la base de datos y de la api me sirve para todos estos esenarios_ uber, fb, nosotros podemos ver desde un navegador web la interfaz de nuestro perfil; si tu estas en tu sistema operativo y te vas a la tienda de aplicaciones tambien puedes instalarte el cliente de estas aplicaciones entonces ahi ya seria el front de escritorio pero tambien te puedes ir a tu movil e instalar  la app nativa de ese servicio.  lo unico que cambia es el front(cliente) pero  los datos que se consumen estan centralizados en la misma api de tipo rest

*otro esquema  muy similar a la arquitectura tipo rest es GRAPHQL*
es otra opcion 

en videos usamos las apis falsa de PLACEHOLDER. pero no te permite insertar datos ni eliminarlos, pero hay un proyecto llamado JSON serve para aprender a realizar las peticiones

vamos a simular una API pero localmente para usar JSON_SERVE tienes que tener instalado node.js 

lo primero que vamos a hacer es probar la api falsa y para eso vamos a utilizar herramientas que son clientes para hacer pruebas de apis un cliente muy famoso es https://www.postman.com/ hay en version gratuita. 
Hay otro cliente de api: 
https://insomnia.rest/  lo descargamos (corre)


### API REST: JSON Server - API falsa local -

primero instalamos node. 
lo comprobamos poniendo el siguiente comando en la terminal. `nove -v`

y vamos a la pagina jsonplaceholder y despues vamos al enlace que dice json-server y

levantamos el servidor (Start JSON Server).

json-server --watch db.json

la base de datos(estructura de JSON) que hagamos debe incluir si o si un ID.

escriber 0_asse +{tab o tabulador} y lo va completando

> json-server --watch 0_assets/db.json

>json-server -w -p 5555  0_assets/db.json  [para que me levante el servicio en otro puerto]


http://localhost:3000

al entrar a este link nos muestra una interfaz web con los detalles de mi db.json

es muy importante que dejas corriendo la ejecucion de ese servidor.

para detener el servidor ejecutas en la terminal ctrl+c

![ctrl +c para detener](/0_assets/img_server.JPG)

CLI USAGE
json-server [options] <source>

Options:  

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| --config, -c                  | Path to config file                                         | [default: "json-server.json"] |
| --port, -p                    | Set port                                                    | [default: 3000] |
| --host, -H                    | Set host                                                    | [default: "localhost"] |
| --watch, -w                   | Watch file(s)                                               | [boolean] |
| --routes, -r                  | Path to routes file                                         | |
| --middlewares, -m             | Paths to middleware files                                   | [array] |
| --static, -s                  | Set static files directory                                  | |
| --read-only, --ro             | Allow only GET requests                                     | [boolean] |
| --no-cors, --nc               | Disable Cross-Origin Resource Sharing                       | [boolean] |
| --no-gzip, --ng               | Disable GZIP Content-Encoding                               | [boolean] |
| --snapshots, -S               | Set snapshots directory                                     | [default: "."] |
| --delay, -d                   | Add delay to responses (ms)                                 | |
| --id, -i                      | Set database id property (e.g. _id)                         | [default: "id"] |
| --foreignKeySuffix, --fks             | Set foreign key suffix, (e.g. _id as in post_id)    | [default: "Id"] |
| --quiet, -q                   | Suppress log messages from output                           | [boolean] |
| --help, -h                    | Show help                                                   | [boolean] |
| --version, -v                 | Show version number                                         | [boolean] |


Examples:
* json-server db.json
* json-server file.js
* json-server http://example.com/db.json

https://github.com/typicode/json-server

### API REST: Consumo de datos con cliente REST -

![metodo post](/0_assets/insomnia_post.JPG)

lo ideal es que vayas creando carpetas por proyecto

json serve tiene la capacidad de sobreescribir todo los cambios que hagamos en ese archivo JSON que es como nuestra base de datos

para ver los cambios debes de presionar en la peticion(Request) despues enviar presionando el boton (Send)

*Recomendacion:*

Cuando van a empesar con un proyecto y que ese proyecto lo van a trabajar mediante una arquitectura de tipo API rest no es ideal tirar 
  
lineas de codigo con js, react, vue lo primero es agarar un software como _insomnia o postman_ y primero ver que te salgan las 
  
peticiones que estas mandado los datos correctos, por que depurar esto mientras estamos haciendo codigo se puede volver caotico. 

cuando empieces a interactuar con diferentes apis eje: apis para obtener informacion, parcelas de pago con la api de algun comercio

electronico, o la api de un sitio hecho en word press. este software de insomina es muy util, tiene una session para autentificacion los querys son parametros que puedes pasar por la URL todas esas opciones las vas a usar dependiendo de las reglas que tenga la api con la que tu vayas a estar trabajando


**CRUD API REST AJAX**

no es ideal estar insertando al DOM por cada elemento que venga de la API o de la base de datos o de un areglo.
lo ideal es guardar en un fragmento y luego al final luego que el fragmento esté lleno insertar ese fragmento al dom

### API REST: CRUD con AJAX (1/2)

primero levamtamos el servidor(json-server --watch 0_assets/db.json)

insomnnia es un cliente de tipo rest, en una peticion _post_ el cuerpo era en formato JSON, cada peticion que nosotros hagamos a un servidor a travez de ajax va tener el cuerpo y cabezera (asi como un documento html)

como la API de Jserver está esperando codigo en formato JSON sí nosotros no le especificamos, el valor por defecto es texto plano *hay que especificar el tipo de contenido que vamos a enviar*

ese id lo voy almacenar en el boton en un data atribut que se va llamar_id_
![codigo generado dinamicamente](/0_assets/codigo%20generado%20dinamicamente.JPG) 

los data Attributs hace que tu te traigas varios valores en un boton por ejemplo
estoy utilizado la tecnica de los templates que es una tecnica bastante eficiente lo hubieran hecho con INNER.html

### API REST: CRUD con AJAX (2/2)

le puse al boton EDIT como DATA attributs tanto el ID  comoel NAME COMO LA CONSTELACION PUES VAMOS HACER LO que justamente voy a extraer esos DATA- ATRIBUTS del boton y se los voy aponer a los elementos del formulario

el proceso de la peticion ajax es de estos 4 o 5 pasos.

>-  la instancia del objeto.
>-  la programacion, y el sistener.
>-  la apertura.
>-  las cabezeras.
>-  y el envio de la peticion como tal.

pero nos evitamos estar generando por cada peticion del crud dota la anterior operacion gracias al encapsularlo en la funcion AJAX

NO OLVIDES LEVANTAR EL SERVIDOR. EL SERVER JSON

### API REST: CRUD con Fetch (1/2)

```js
  //programacion que va afectar al DOM.
  json.forEach((el) => {
  // dentro del template busca el selector con la clase NAME y en su propiedad TEXTCONTENT pon el .NOMBRE.
  $template.querySelector(".name").textContent=el.nombre;
```



  >- primero hacemos la lectura y la visualizacion de los datos obtenidos de la API.
  >- creacion
  >- actualizacion (Editar)
  >- eliminacion.

  en cada peticion un TRY CATCH
  no seas flojo y captura el error

### API REST: CRUD con Axios: (1/2)

llamamos a la libreria.

https://github.com/axios/axios 

### API REST: CRUD con Axios: (2/2)

posiblemente tengan problemas de agregar y editar con el JSON-SERVER  -  AXIOS , si les pasa el error posiblemente sea porque en el headers les falta poner el "Content-Type"  si observan bien en la clase el "Type" esta en minúscula. _Las cabezeras es mejor copiarlas de INSOMNIA._

>- POST- AGREGAR- UPDATE
>- 


para un mejor manejo de la memoria, usaremos la _Delegacion de eventos_ por que yo no sé cuantos botones tengo.

```js

 // yo se que el objeto que origino el evento, si es el formulario trae un input ID quiero que 
  //revises ese valor si es vacio, hacemos un create.
  if (!e.target.id.value)

  // con esto le estmos poniendo un ID al boton hidden.
   $form.id.value=e.target.dataset.id
```


les cuento que en un proyecto donde la app  la iban a estar usando VIA web pero en ipads viejos, FETCH NO FUNCIONABA. y use AXIOS  Y FUNCIONÓ BIEN sin saturarnos

nunca digan no a las cosas, mas bien evaluen y despues decidad 😉

--- 

## Single Page Applications (SPA)

### Introducción a las Single Page Applications
