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

