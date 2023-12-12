document.getElementById("btn_comentar").addEventListener("click", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var comentario = document.getElementById("comentario").value;

    if (nombre && correo && comentario) {
        if (validarCorreo(correo)) { 
            var formContainer = document.getElementById("formContainer");

            var nuevoFormulario = document.createElement("form");

            var titulo = document.createElement("h4");
            titulo.textContent = "Usuario: " + nombre;

            var infoCorreo = document.createElement("p");
            infoCorreo.textContent = "Correo: " + correo;

            var infoComentario = document.createElement("p");
            infoComentario.textContent = "Comentario: " + comentario;

            infoComentario.style.wordWrap = "break-word";
            infoComentario.style.overflowWrap = "break-word";

            nuevoFormulario.appendChild(titulo);
            nuevoFormulario.appendChild(infoCorreo); 
            nuevoFormulario.appendChild(infoComentario);

            nuevoFormulario.style.backgroundColor = "#f8f9fa";
            nuevoFormulario.style.padding = "20px";
            nuevoFormulario.style.margin = "auto";
            nuevoFormulario.style.width = "50%";
            nuevoFormulario.style.marginTop = "50px";

            var mediaQuery = window.matchMedia("(max-width: 600px)");

            if (mediaQuery.matches) {
                nuevoFormulario.style.fontSize = "12px";
            }

            formContainer.appendChild(nuevoFormulario);

            document.getElementById("nombre").value = "";
            document.getElementById("correo").value = ""; 
            document.getElementById("comentario").value = "";
        } else {
            alert("La dirección de correo electrónico no es válida");
        }
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
});

function validarCorreo(correo) {
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
