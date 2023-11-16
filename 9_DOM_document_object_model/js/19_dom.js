//BOM nos permite manipular propiedades y eventos de la ventana del navegador como tal
//algunos metodos del BOM (browser object model ) video 30 [alert, confirm, prompt]{alertar avisis y confirmaciones}
//

//window.alert("Alerta");
//window.confirm("Confirmacio");
//window.prompt("aviso"); // agrega un input

// todo lo que cuelga de window no es necesario ponerle Window

const   $btnAbrir=document.getElementById("abrir-ventana"),
        $btnCerrar=document.getElementById("cerrar-ventana"),
        $btnImprimir=document.getElementById("imprimir-ventana");

let ventana;

        //asignamos un listener al evento click
$btnAbrir.addEventListener("click", e=>{
 ventana=window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", e=>{
    //window.close;
    //window.close(ventana);
    ventana.close();
});
$btnImprimir.addEventListener("click", e=>{
    window.print();
});


// EL BOM no es un estandar, asi que va var diferencias 
// para imprimir en pdf , lo podemos convinar con estilos de maquetacion cuando el usuario quiera imprimir
// midia,  @midiasream @midiaprint