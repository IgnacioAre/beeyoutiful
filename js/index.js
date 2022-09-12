let url = $(location).attr('href').split('/');
const urlCompleta = url[0]+"//"+url[2]+"/";
let cantidadAux = 0;

function format_number(num) {
    var num_parts = num.toString().split(","); num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");return num_parts.join(",");
}

$(document).ready(()=>{

    let nombreCliente = $('#nombreCliente');
    let nombreAdmin = $('#nombreAdmin');

    let c_id = $('#c_id');
    let a_id = $('#a_id');

    if(a_id.val() != 0){

        $.ajax({
            url: urlCompleta + 'php/administrador/listar.php',
            type: 'POST',
            data: {'a_id':a_id.val()},
            dataType: 'json',
            success: function (res) {
                nombreAdmin.text(res.value['nombre']);
            }
        });

        obtenerNotificacionesAjax();

    }else if(c_id.val() != 0){

        $.ajax({
            url: urlCompleta + 'php/cliente/listar.php',
            type: 'POST',
            data: {'c_id':c_id.val()},
            dataType: 'json',
            success: function (res) {
                nombreCliente.text(res.value['nombre']);
            }
        });
    }
        

});

setInterval(()=>{
    obtenerNotificacionesAjax();
},10000);


function obtenerNotificacionesAjax(){

    let listaNotificaciones = $('#listaNotificaciones');


    $.ajax({
        url: urlCompleta + 'php/reserva/getAllNotificaciones.php',
        dataType: 'json',
        success: function (res) {
            if(res['status'] == 200){

                if(cantidadAux != res['value'].length){
                    $('#campanaNotificacion').find('span').text(res['value'].length);

                    let lista = '';
    
                    res.value.forEach((e)=>{
                        lista += `
                        <tr>
                            <td>${e['cliente']}</td>
                            <td>${e['fechaEntrada']}</td>
                            <td>${e['fechaSalida']}</td>
                            <td>${e['tipoInmueble'].mayusPrimerLetra()}</td>
                            <td><a href="${urlCompleta+'admin/reserva/'+e['ci_id']}" class="btn btn-primary">Ver</a></td>
                        </tr>
                        `;
                    });
    
                    listaNotificaciones.find('tbody').html(lista);
                    $('#footerNotificaciones').prepend('<p class="text-danger me-3">Tienes '+res['value'].length+' reservas sin confirmar.</p>');
                    cantidadAux = res['value'].length;
                }

            }else{
                $('#campanaNotificacion').find('span').css('opacity','0');
            }
        }
    });
}

Object.defineProperty(String.prototype, 'mayusPrimerLetra', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    writable: true, // Asi, puede sobreescribirse más tarde
    configurable: true // Asi, puede borrarse más tarde
});