function realizarAccion() {
    var selectedOption = document.getElementById("seleccion").value;
    if (selectedOption === "Administrador") {
        window.location.href = "http://127.0.0.1:5501/pag%20negocio.html";
    } else if (!selectedOption) {
        alert("Por favor, selecciona un cargo.");
    } else {
        alert("Cargo no reconocido");
    }
}
