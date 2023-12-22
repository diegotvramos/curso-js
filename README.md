<h1>Curso java Script</h1>

si quieres saber mas de js puedes ir a la documetacion en este enlace

https://developer.mozilla.org/en-US/docs/Web/Events



<h2>AJAX:Asynchronous JavaScript & XML</h2>
FUE CREADO POR MICROSOFT
para enviar o recibir informacion se puede usar json, xml

El atractivo de ajax está en la naturaleza asincrona lo que significa que se puede comunicar con el servidor intercambiar datos y actualizar la interfaz del usuario sin necesidad de recargar el navegador
tenemos 3 metodos nativos para ajax los navegadores en ese entonces usaban XML HTTPREQUEST(es el objeto que describe Ajax) y en los ultimos años tenemos ** API Fetch** es una manera moderna de hacer Ajax
*** jquery ***
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


<h4> accediendo a la api de Github</h4>
puedes acceder de esta manera al **jSON** de mi cuenta de git hub.
https://api.github.com/users/diegotvramos 

usa un formateador de json es decir usa una extencion de navegador llamada: _JSON FORMATTER_
<h3>Metodos **nativos**</h3>
<h4>AJAX: OBJETO XMLHttpRequest</h4>
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
<h5>estados de peticion</h5>

la ruta 404 no existe 
![Esta es una imagen de ejemplo](/10_Ajax/404.JPG)

lo que nos interesa son los:
 2. Respuestas satisfactorias (200-299) Status(codigo del servidor)

 tu puedes crear tus propios archivos Json en el mundo laboral vas a tener que consumir (aplicaciones)apis que esten en el internet

<h4>AJAX: Api Fetch</h4>

_tras bambalinas usa OBJETO XMLHttpRequest _

> fetch("https://jsonplaceholder.typicode.com/users").then().catch().finally();
>> fetch("", {method:"GET"}) puede recibir un parametro de opciones
fetch trabaja con un mecanismo de promesas
se simplifica el codigo, para eso debemos entender las promesas entender el THEN, CATCH, FINALLY
PARA LA PROXIMA VE EL VIDEO DE Async- Await que es una manera de conbinar promesas con funciones asincronas que se esperan a la respuesta del servidor
esta es la 2da manera de trabajar peticiones asincronas Ajax con los navegadores web

<h5>AJAX: Api Fetch + Async-Await</h5>

el codigo se ve mas limpio
el objeto Error "Error" de js solo recibe mensajes textuales
los errores en JS no aceptan objetos
el "Throw" es como un retur que envia el flujo de la programacion al Catch.
if (!res.ok)throw new Error("Ocurrio un error al solicitar los Datos");
formamos un objeto
<hr>
<h3>librerias **externas**</h3>

<h4>Jquery.Ajax()</h4>

javaScript ya soporta toda esas caracteristicas que en un principio nos ayudaba  _Jquery_

<h4>Axios</h4>

esta basada en promesas que nos ayuda mucho a la hora de hacer peticiones Ajax

> console.log("Estamos en el Catch", err.response); 
está en la documentacion de Axios
https://github.com/axios/axios?tab=readme-ov-file#handling-errors 


<h4>Ajax: libreria Axios & Async-Await</h4>

al igual que fetch puede que te de cononflicto esto de tener codigo concateneado en (thens) entonces podemos hacer uso de funciones asincronas para mejorar la legibilidad

axios se ha vuelto un estandar.

¿por que repeti a nivel del DOM?
para que vean que el resultado lo podemos hacer con cualquiera de estas 5 mecanismos 
Axios lee peticiones apis publicas  como tambien de archivos locales

<h2>APIs REST</h2>

<h3>Introduccion de API REST: Introduccion</h3>

es la forma como se estan trabajando tanto las aplicaciones web como las aplicaciones nativas, es una nueva arquitectura.
MVC fue muy popular.

API.(aplication programing interface) api de geolicaciolacion , api para la camara web

**dentro del mundo de las apis  tenemos apis nativas(el motor de js trae integrado para acceder al DOM la camara web, bateria, geolocalizacion) y apis externas(api de github. no es mas que una URL conocido como end points, api de fb).

<p>
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
<br>
INSERT	            POST
SELECT	            GET
UPDATE	            PUT
DELETE	            DELETE

*ventajas de API REST* 
como el cliente y el servidor estan desacoplados yo puedo decidir en que base de datos yo puedo trabajar si es SQL o no SQL si es java, si es node o es php si es pyton, si es rubic yo construyo mi API de tipo rest y lo unico que yo voy a hacer es exponer al cliente la informacion el formate JSON o XML que son 2 formatos de intercambio de informacion validados por lenguajes y tecnologias, pues me importa si el front que me está haciendo la peticion es un front en una aplicacion de android una aplicacion para IOS windows, web etc

_nosotros podemos tener diferentes fronts pero la parte del modelado de la base de datos y de la api me sirve para todos estos esenarios_ uber, fb, nosotros podemos ver desde un navegador web la interfaz de nuestro perfil; si tu estas en tu sistema operativo y te vas a la tienda de aplicaciones tambien puedes instalarte el cliente de estas aplicaciones entonces ahi ya seria el front de escritorio pero tambien te puedes ir a tu movil e instalar  la app nativa de ese servicio.  lo unico que cambia es el front(cliente) pero  los datos que se consumen estan centralizados en la misma api de tipo rest

*otro esquema  muy similar a la arquitectura tipo rest es GRAPHQL*
es otra opcion 

en videos usamos las apis falsa de PLACEHOLDER. pero no te permite insertar datos ni eliminarlos, pero hay un proyecto llamado JSON serve para aprender a realizar las peticiones

vamos a simular una API pero localmente para usar JSON_SERVE tienes que tener instalado node.js 

lo primero que vamos a hacer es probar la api falsa y para eso vamos a utilizar herramientas que son clientes para hacer pruebas de apis un cliente muy famoso es https://www.postman.com/ hay en version gratuita. 
Hay otro cliente de api: 
https://insomnia.rest/  lo descargamos [CORE]
</p>

<h3>API REST: JSON Server - API falsa local -</h3>

primero instalamos node. 
lo comprobamos poniendo el siguiente comando en la terminal. `nove -v`

y vamos a la pagina jsonplaceholder y despues vamos al enlace que dice json-server y 
https://github.com/typicode/json-server 

la base de datos(estructura de JSON) que hagamos debe incluir si o si un ID.

escriber 0_asse +{tab o tabulador} y lo va completando

json-server --watch 0_assets/db.json


http://localhost:3000

al entrar a este link nos muestra una interfaz web con los detalles de mi db.json

es muy importante que dejas corriendo la ejecucion de ese servidor.

para detener el servidor ejecutas en la terminal ctrl+c

![ctrl +c para detener](/0_assets/img_server.JPG)

CLI USAGE
json-server [options] <source>

Options:
  --config, -c       Path to config file           [default: "json-server.json"]
  --port, -p         Set port                                    [default: 3000]
  --host, -H         Set host                             [default: "localhost"]
  --watch, -w        Watch file(s)                                     [boolean]
  --routes, -r       Path to routes file
  --middlewares, -m  Paths to middleware files                           [array]
  --static, -s       Set static files directory
  --read-only, --ro  Allow only GET requests                           [boolean]
  --no-cors, --nc    Disable Cross-Origin Resource Sharing             [boolean]
  --no-gzip, --ng    Disable GZIP Content-Encoding                     [boolean]
  --snapshots, -S    Set snapshots directory                      [default: "."]
  --delay, -d        Add delay to responses (ms)
  --id, -i           Set database id property (e.g. _id)         [default: "id"]
  --foreignKeySuffix, --fks  Set foreign key suffix, (e.g. _id as in post_id)
                                                                 [default: "Id"]
  --quiet, -q        Suppress log messages from output                 [boolean]
  --help, -h         Show help                                         [boolean]
  --version, -v      Show version number                               [boolean]

Examples:
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

https://github.com/typicode/json-server