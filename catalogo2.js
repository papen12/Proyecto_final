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
        } else {
            window.location.href = "http://127.0.0.1:5501/catalogo%20compras.html";
        }
    } catch (excepcion) {
        alert(excepcion);
    }
}
