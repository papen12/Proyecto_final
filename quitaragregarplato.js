document.getElementById("btn_enviar").addEventListener("click", function (event) {
    event.preventDefault();

    var id_chef = document.getElementById("id_chef").value;
    var nombre = document.getElementById("nombre").value;
    var id_plato = document.getElementById("id_plato").value;
    var razon = document.getElementById("razon").value;

    if (id_chef && nombre && id_plato && razon) {
        var formContainer = document.getElementById("formContainer");

        var nuevoFormulario = document.createElement("form");

        var titulo = document.createElement("h4");
        titulo.textContent = `Chef ID: ${id_chef} - Nombre: ${nombre}`;

        var areaTexto = document.createElement("textarea");
        areaTexto.rows = 4;
        areaTexto.cols = 50;
        areaTexto.textContent = razon;
        areaTexto.readOnly = true;

       
        areaTexto.style.overflow = "auto";
        areaTexto.style.resize = "none";
        areaTexto.style.maxHeight = "200px"; 

        nuevoFormulario.appendChild(titulo);
        nuevoFormulario.appendChild(areaTexto);

        nuevoFormulario.classList.add("nuevo-formulario");

        
        nuevoFormulario.style.backgroundColor = "#f8f9fa";  
        nuevoFormulario.style.padding = "20px";  
        nuevoFormulario.style.margin = "auto";  
        nuevoFormulario.style.width = "80%";  
        nuevoFormulario.style.marginTop = "50px";  

        
        areaTexto.style.width = "100%";  
        areaTexto.style.boxSizing = "border-box";  

        formContainer.appendChild(nuevoFormulario);

       
        document.getElementById("id_chef").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("id_plato").value = "";
        document.getElementById("razon").value = "";
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
});
