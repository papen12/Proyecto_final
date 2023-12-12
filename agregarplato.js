document.getElementById("btn_enviar").addEventListener("click", function (event) {
    event.preventDefault();

    var id_chef = document.getElementById("id_chef").value;
    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;
    var imgLink = document.getElementById("imgLink").value;
    var recetaLink = document.getElementById("recetaLink").value;

    if (id_chef && nombre && password && imgLink && recetaLink) {
        var formContainer = document.getElementById("formContainer");

        var nuevoFormulario = document.createElement("form");

        var titulo = document.createElement("h4");
        titulo.textContent = "Chef ID: " + id_chef + " - Nombre: " + nombre;

        var infoPassword = document.createElement("p");
        infoPassword.textContent = "Contraseña: " + password;

        var linkImg = document.createElement("a");
        linkImg.href = imgLink;
        linkImg.target = "_blank";
        linkImg.textContent = imgLink;
        linkImg.style.color = "blue";
        linkImg.style.wordWrap = "break-word"; 
        var infoImgLink = document.createElement("p");
        infoImgLink.innerHTML = "Enlace de la Imagen del Plato: ";
        infoImgLink.appendChild(linkImg);

        var linkReceta = document.createElement("a");
        linkReceta.href = recetaLink;
        linkReceta.target = "_blank";
        linkReceta.textContent = recetaLink;
        linkReceta.style.color = "blue";
        linkReceta.style.wordWrap = "break-word"; 
        var infoRecetaLink = document.createElement("p");
        infoRecetaLink.innerHTML = "Enlace de la Receta: ";
        infoRecetaLink.appendChild(linkReceta);

        nuevoFormulario.appendChild(titulo);
        nuevoFormulario.appendChild(infoPassword);
        nuevoFormulario.appendChild(infoImgLink);
        nuevoFormulario.appendChild(infoRecetaLink);

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

        document.getElementById("id_chef").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("password").value = "";
        document.getElementById("imgLink").value = "";
        document.getElementById("recetaLink").value = "";
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
});
