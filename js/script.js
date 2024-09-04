import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");
console.log(enlaces)

// Agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        })

        //Agregar la clase active al elemento actual
        this.classList.add("active");

        //Obtener el contenido correspondiente segun enlace
        let contenido = obtenerContenido(this.textContent);

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;

    });
}

)

// Funcion para traer el contenido de ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    };
    return contenido[enlace]
}