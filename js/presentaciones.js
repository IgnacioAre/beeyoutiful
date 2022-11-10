
let menu_principal = $('#menu_principal');

$(document).on("scroll", function(){
    //Obtengo el valor del scroll en el documento
    var desplazamientoActual = $(document).scrollTop();

    console.log(desplazamientoActual);

    //Menu superior opciones

    if(desplazamientoActual >= 40){

        menu_principal.find('div').eq(0).css('opacity','0');
        menu_principal.find('div').eq(1).css('opacity','0');

    }else{


        menu_principal.find('div').eq(0).css('opacity','1');
        menu_principal.find('div').eq(1).css('opacity','1');

    }
    

});