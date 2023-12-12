var cont=0;
var total=0;
var seleccionadas=[];
/* function agregar(id,nombre,precio){
    cont++
    $("#span1").text(cont);
    var fila = "<tr><td>"+cont+"</td><td>"+nombre+"</td><td>"+precio+"</td></tr>"
    $("#tabla").append(fila);
    total+=precio;
}
 */

/* $("#btnpizza").click(function (e) { 
    
    var nombre= $("#nombre").text();
    var precio= $("#precio").text();
    console.log(nombre,precio)
    agregar(0,nombre,precio)
}); */

function actualizarTotal() {
    total = 0;
    $('#tabla tbody tr').each(function () {
        total += parseFloat($(this).find('td:last').text());
    });
    $('#total').text(total.toFixed(2));
}

function ordenarNumeros() {
    $('#tabla tbody tr').each(function (index) {
        $(this).find('td:first').text(index + 1);
    });
}


function seleccionar(id_fila) {
    var index = seleccionadas.indexOf(id_fila);
    if (index !== -1) {
        $("#" + id_fila).removeClass("seleccionada");
        seleccionadas.splice(index, 1);
    } else {
        $("#" + id_fila).addClass("seleccionada");
        seleccionadas.push(id_fila);
    }
}

function eliminar() {
    for (let i = 0; i < seleccionadas.length; i++) {
        $("#" + seleccionadas[i]).fadeOut(500, function() {
            $(this).remove();
            ordenarNumeros();
            actualizarTotal();
        });
    }
    cont -= seleccionadas.length;
    seleccionadas = [];
    $("#span1").text(cont);
}


$("#btnElim").click(function (e) {
    eliminar();
    habilitarBotones(); 
});

/btnppiza/ 
function agregar(id,nombre,precio){
    cont++
    $("#span1").text(cont);
    var fila = '<tr id="fila'+cont+'" class="selected" onclick=seleccionar(this.id)  ><td>'+cont+"</td><td>"+nombre+"</td><td>"+precio+"</td></tr>"
    $("#tabla tbody").append(fila);

    total+=precio;
    actualizarTotal();
    limite(cont);
}

$("#panqueques").click(function (e) { 
    var nombre= $("#nombre2").text();
    var precio= $("#precio2").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#desame").click(function (e) { 
    var nombre= $("#nombre1").text();
    var precio= $("#precio1").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#waffles").click(function (e) { 
    var nombre= $("#nombre3").text();
    var precio= $("#precio3").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#crois").click(function (e) { 
    var nombre= $("#nombre4").text();
    var precio= $("#precio4").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#descom").click(function (e) { 
    var nombre= $("#nombre5").text();
    var precio= $("#precio5").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#huevtoc").click(function (e) { 
    var nombre= $("#nombre6").text();
    var precio= $("#precio6").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#cafeame").click(function (e) { 
    var nombre= $("#nombre7").text();
    var precio= $("#precio7").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

$("#choc").click(function (e) { 
    var nombre= $("#nombre8").text();
    var precio= $("#precio8").text();
    console.log(nombre,precio)
    agregar(cont,nombre,precio)
});

function deshabilitarBotones() {
    $(".btn_ordenar").prop("disabled", true).animate({ opacity: 0.5 }, 500);
}

function habilitarBotones() {
    $(".btn_ordenar").prop("disabled", false).animate({ opacity: 1 }, 500);
}



$("#pedido").on('change', function () {
    var tipoPedido = $(this).val();
    if (tipoPedido === 'Ejecutivo') {
        
        habilitarBotones();
        return;
    }

   
    limite();
});


function limite() {
    
    if ($("#pedido").val() !== 'Ejecutivo' && cont == 25) {
        alert("¡Límite de órdenes alcanzado!");
        deshabilitarBotones();
    }
}




/**/