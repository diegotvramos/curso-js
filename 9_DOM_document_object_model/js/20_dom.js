
/*
    estubimos viendo tanto eventos, propiedades, metodos del BRAUSER, OBJECT, MODEL 
    que se sentra en las caracteristicas y propiedades que como tal tiene el objeto window 
    que es el objeto global el objeto de la ventana de nuestro navegador

    el dia de hoy te voy a mostrar 3 objetos que son muy importantes que asi como el DOCUMENT cuelgan
    directamente de window todo lo que cuelga de window no es necesario ponerle window. algo

    vas a usar LOG  por ejemplo grandes librerias para el manejo de rutas en aplicaciones dinamicas como
    VUE router como React rauter como page JS PUES basicamente estan construidos con los 2 primeros objetos

    ** url
    ** y el objeto historial
*/

//url mejor conocido como el objeto LOCATION. 

// console.log("****************************Objeto URL (location)****************************");
// console.log(location);


// // en la consola pones: location.reload()   <===== se recarga la pagina.
// // ejemplo de las propiedades mas importantes

// console.log(location.origin); // ruta
// console.log(location.protocol);// protocolo http
// console.log(location.host);// dominio- ip
// console.log(location.hostname);
// console.log(location.port);// puerto por el que escucha liveservic
// console.log(location.href);
// console.log(location.hash);// detecta el valor de la url despues de un hash(#) o tambien detecta paso de parametros jon=36
// console.log(location.search);
// console.log(location.pathname);// archivo al que estoy consultando

// console.log("****************************Objeto Historial (history)****************************");
// console.log(history); //cuelga de window. el historial el numero hace referencia a cuantas paginas puedo acceder hacia atras o hacia delante
// //guarda el almacenamiento del historial en el que me encuentro

// // en la consola: history.back(1) history.forward(1)
// //history.go(-1) // hace el mismo funcionamiento que el forward y back nada mas que manejas numeros positivos
// //paa paginas hacia adelante y numeros negativos para paginas hacia atras
// console.log(history.length);

console.log("****************************Objeto Navegador (navigator)****************************");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes); // aplicaciones que soporta eje pw, pdf, doc
console.log(navigator.onLine);// has perdido la coneccion a internet :()
console.log(navigator.serviceWorker); // es una API QUE nos ayuda a hacer progresive web app es decir a convertir un simple sitio web en una aplicacion instalable
// si quieres combertir un sito web en progresive web app
console.log(navigator.storage); // api de almacenamiento
console.log(navigator.usb);
console.log(navigator.userAgent);



