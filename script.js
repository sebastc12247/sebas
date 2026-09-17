
// ================================
// ELEMENTOS
// ================================

const btnComenzar =
    document.getElementById("btnComenzar");

const contenido =
    document.getElementById("contenido");

const inicio =
    document.getElementById("inicio");

const musica =
    document.getElementById("musica");

const btnMusica =
    document.getElementById("btnMusica");

const petalos =
    document.getElementById("petalos");


// ================================
// BOTÓN COMENZAR
// ================================

btnComenzar.addEventListener("click", function () {

    // Ocultar pantalla inicial
    inicio.style.display = "none";

    // Mostrar contenido
    contenido.classList.remove("oculto");

    // VOLVER ARRIBA DE TODO
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    // Intentar iniciar música
    musica.play()
        .then(function () {
            console.log("Música iniciada");
        })
        .catch(function (error) {
            console.log(
                "No se pudo iniciar la música:",
                error
            );
        });

        then(function () {

            console.log("Música iniciada");

        })
        .catch(function (error) {

            console.log(
                "No se pudo iniciar la música:",
                error
            );

        });

});


// ================================
// BOTÓN DE MÚSICA
// ================================

btnMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        btnMusica.textContent =
            "⏸️ Pausar canción";

    } else {

        musica.pause();

        btnMusica.textContent =
            "▶️ Reproducir canción";

    }

});


// ================================
// CREAR PÉTALOS
// ================================

function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add("petalo");

    // Elegir flor
    if (Math.random() > 0.5) {

        petalo.textContent = "🌻";

    } else {

        petalo.textContent = "🌼";

    }


    // Posición horizontal
    petalo.style.left =
        Math.random() * 100 + "%";


    // Tamaño
    petalo.style.fontSize =
        (Math.random() * 15 + 18) + "px";


    // Velocidad
    petalo.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    petalos.appendChild(petalo);


    // Eliminar después de caer
    setTimeout(function () {

        petalo.remove();

    }, 10000);

}


// Crear pétalos constantemente
setInterval(
    crearPetalo,
    700
);

