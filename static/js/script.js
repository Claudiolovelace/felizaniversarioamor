/* =========================
   MENSAJES DEL JARDÍN
========================= */

function mostrarMensaje(nombre, mensaje) {

    const ventana = document.getElementById("ventanaMensaje");

    const titulo = document.getElementById("tituloMensaje");

    const texto = document.getElementById("textoMensaje");

    const flor = document.getElementById("florMensaje");


    const flores = {
        "Rosa": "🌹",
        "Tulipán": "🌷",
        "Girasol": "🌻",
        "Margarita": "🌼",
        "Hibisco": "🌺",
        "Lavanda": "🪻",
        "Loto": "🪷",
        "Flor de cerezo": "🌸",
        "Para ti": "💐"
    };


    flor.textContent = flores[nombre] || "🌸";

    titulo.textContent = nombre;

    texto.textContent = mensaje;

    ventana.classList.add("mostrar");
}


function cerrarMensaje() {

    const ventana =
        document.getElementById("ventanaMensaje");

    ventana.classList.remove("mostrar");
}


function florEspecial() {

    const ventana =
        document.getElementById("ventanaMensaje");

    const titulo =
        document.getElementById("tituloMensaje");

    const texto =
        document.getElementById("textoMensaje");

    const flor =
        document.getElementById("florMensaje");


    flor.textContent = "💐";

    titulo.textContent = "La última flor";

    texto.textContent =
        "Si pudiera regalarte todas las flores del mundo, todavía sentiría que son pocas para agradecerte por estos tres años. Esta última flor es para ti, porque tú eres la persona que hace especial toda esta historia. Te amo. 💜";


    ventana.classList.add("mostrar");
}
/* =========================
   RECUERDOS
========================= */

function abrirRecuerdo(titulo, descripcion, imagen) {

    const ventana =
        document.getElementById("ventanaRecuerdo");

    const tituloElemento =
        document.getElementById("tituloRecuerdo");

    const descripcionElemento =
        document.getElementById("descripcionRecuerdo");

    const imagenElemento =
        document.getElementById("imagenRecuerdo");


    tituloElemento.textContent = titulo;

    descripcionElemento.textContent = descripcion;

    imagenElemento.src =
        "/static/img/" + imagen;


    ventana.classList.add("mostrar");
}


function cerrarRecuerdo() {

    const ventana =
        document.getElementById("ventanaRecuerdo");

    ventana.classList.remove("mostrar");
}
/* =========================================
   NUESTRA CANCIÓN
========================================= */

function reproducirCancion() {

    const musica = document.getElementById("musica");

    if (musica) {
        musica.play();
    }

}

function pausarCancion() {

    const musica = document.getElementById("musica");

    if (musica) {
        musica.pause();
    }

}
/* =========================================
   SORPRESA
========================================= */

function abrirSorpresa() {

    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("cartaSorpresa");
    const final = document.getElementById("finalSorpresa");

    sobre.classList.add("abierto");

    setTimeout(function () {

        carta.classList.add("mostrar");

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 700);


    setTimeout(function () {

        final.classList.add("mostrar");

    }, 2500);

}
/* =========================================
   PARA TI
========================================= */

function mostrarContinuacion() {

    const continuacion =
        document.getElementById("continuacionCarta");

    const boton =
        document.querySelector(".boton-carta");

    if (continuacion) {

        continuacion.classList.add("mostrar");

        boton.style.display = "none";

        setTimeout(function () {

            continuacion.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    }

}
function reproducirCancion() {
    const musica = document.getElementById("musica");

    if (musica) {
        musica.play();
    }
}

function pausarCancion() {
    const musica = document.getElementById("musica");

    if (musica) {
        musica.pause();
    }
}