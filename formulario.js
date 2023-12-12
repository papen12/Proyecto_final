function validarCorreo(correo) {
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
function ingresar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var pass = document.getElementById('pass').value;
    var ciudad = document.getElementById('seleccion');
    var ciudadSeleccionada = ciudad.options[ciudad.selectedIndex].value;
    
    try {
        if (nombre === '' || apellido === '' || correo === '' || pass === '' || ciudadSeleccionada === '') {
            throw "Dejaste algún o algunos campos vacíos";
        } else if (!validarCorreo(correo)) {
            throw "La dirección de correo electrónico no es válida";
        } else {
            window.location.href = "https://papen12.github.io/Proyecto_final/ordenes.html";
        }
    } catch (excepcion) {
        alert(excepcion);
    }
}
