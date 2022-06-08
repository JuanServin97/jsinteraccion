//  querySelector
/*
const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
heading.textContent = "Nuevo Heading";
heading.classList.add('nueva-clase');
console.log(heading);


// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');
console.log(enlaces[0]);

//getElementById

const heading2 = document.getElementById('heading');
*/

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href  = "nuevo-enlace.html";

//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos

/* console.log(1);

window.addEventListener('load', function(){ // load espera a que el js y los archivos que dependel del html estén listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () { //solamente espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
});

console.log(5); */

/* window.onscroll = function(e){
    console.log("Scrolling...");
    console.log(e);
}; */

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');

/* btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault(); //Util para validar un formulario
    console.log("Enviando formulario");
}); */

// Evento de Submit


// Eventos de los inputs y textareas

const datos = {
    nombre : "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector('#nombre'); 
const email = document.querySelector('#email'); 
const mensaje = document.querySelector('#mensaje'); 
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El Evento submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validar el formulario
    const {nombre, email, mensaje} = datos;
    
    if(nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta("Todos los campos son obligatorios" , 'error');    
        return;
    }
        mostrarAlerta("Datos enviados correctamente");
    

    //Enviar el formulario

    console.log('Enviando Formulario');
});

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    
    //Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
