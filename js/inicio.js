let menu_principal = $('#menu_principal');
const panal = $('.panal');
let imgLimon = $('.imgLimon');
const intro =  document.querySelector('#intro');
const contenedor_uno =  document.querySelector('#contenedor_uno');
const video = document.querySelector('video');
const text = $('.tituloIntro');

let rama_vainilla = $('#rama_vainilla');
let flor_vainilla = $('#flor_vainilla');

const bee = $('#img_bee');
const you = $('#img_you');
const tiful = $('#img_tiful');


if($(window).width() > 780){

    const controller = new ScrollMagic.Controller();


    //Animación video inicial

    const scene = new ScrollMagic.Scene({
        triggerElement: intro,
        duration: 5000,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller);


    let aceleracion = 0.1;
    let scrollPos = 0;
    let delay = 0;
    let scrollText = 0;

    scene.on('update', e => {
        scrollPos = e.scrollPos / 1000;

        scrollText = (scrollPos / 2);

        if(scrollText <= 6){
            if(scrollText <= 4){

                if(scrollText <= 1){
                    if(scrollText >= 0 && scrollText <= 1){
                        bee.css('opacity',scrollText);
                    }

                    you.css('opacity',0);

                }else if(scrollText >= 1 && scrollText <= 2){

                    bee.css('opacity',1);

                    if((scrollText / 2) >= 0 && (scrollText/2) <= 1){
                        you.css('opacity',(scrollText/2));
                    }

                    tiful.css('opacity',0);

                }else if(scrollText >= 2 && scrollText <= 3){

                    bee.css('opacity',1);
                    you.css('opacity',1);

                    if((scrollText / 3) >= 0 && (scrollText / 3) <= 1){
                        tiful.css('opacity',(scrollText / 3));
                    }

                }else{
                    bee.css('opacity',1);
                    you.css('opacity',1);
                    tiful.css('opacity',1);
                }

                bee.css('margin-top',scrollText * 50);
                you.css('margin-top',scrollText * 90);
                tiful.css('margin-top',scrollText * 130);

            }else{ 
                bee.css('opacity',1);
                you.css('opacity',1);
                tiful.css('opacity',1);
                bee.css('margin-top',scrollText * 50);
                you.css('margin-top',scrollText * 90);
                tiful.css('margin-top',scrollText * 130);
            }
        }

    });


    setInterval(()=>{
        delay += (scrollPos - delay) * aceleracion;
        video.currentTime = scrollPos;
    }, 99.9);

//End animación video

}



let img_uno = $('#img_uno');
let contenedor_texto_uno = $('#contenedor_texto_uno');
let mask = $('.mask');
let texto_dos = $('.texto_dos');
let contenedorPropiedades = $('#contenedorPropiedades');
let contentTextosHidden = $('.contentTextosHidden');


$(document).on("scroll", function(){
    
    //Obtengo el valor del scroll en el documento
    var desplazamientoActual = $(document).scrollTop();

    console.log(desplazamientoActual);

    //Animación imagen_uno y textos

    if($(window).width() < 780){
    
        if(desplazamientoActual >= 500 && desplazamientoActual <= 1660){
            contenedor_texto_uno.find('span').addClass('showUp');
        }else{
            contenedor_texto_uno.find('span').removeClass('showUp');
        }

    }else{

        if(desplazamientoActual >= 5200 && desplazamientoActual <= 6200){
            img_uno.addClass('showUp');
        }else{
            img_uno.removeClass('showUp');
        }
    
        if(desplazamientoActual >= 5800 && desplazamientoActual <= 6200){
            img_uno.addClass('shadowFade');
        }else{
            img_uno.removeClass('shadowFade');
        }
    
    
        if(desplazamientoActual >= 5500 && desplazamientoActual <= 6600){
            contenedor_texto_uno.find('span').addClass('showUp');
        }else{
            contenedor_texto_uno.find('span').removeClass('showUp');
        }
    }


    //Texto Hidden


    if($(window).width() < 780){

        if(desplazamientoActual > 1700 && desplazamientoActual < 5600){

            let desplazamiento_mask_uno = (-1100 + ((desplazamientoActual / 10) * 6));
            let desplazamiento_mask_dos = (-1400 + ((desplazamientoActual / 10) * 6));
            let desplazamiento_mask_tres = (-1700 + ((desplazamientoActual / 10) * 6));

            mask.eq(0).css('transform',`translate(${((desplazamiento_mask_uno >= 0 && desplazamiento_mask_uno)?desplazamiento_mask_uno:0)}px,0px)`);
            contentTextosHidden.eq(0).css('transform',`translate(0px,-${(-150 + ((desplazamientoActual / 10) * 0.8))}px)`);

            mask.eq(1).css('transform',`translate(${((desplazamiento_mask_dos >= 0)?desplazamiento_mask_dos:0)}px,0px)`);
            contentTextosHidden.eq(1).css('transform',`translate(0px,-${(-200 + ((desplazamientoActual / 10) * 0.8))}px)`);

            mask.eq(2).css('transform',`translate(${((desplazamiento_mask_tres >= 0)?desplazamiento_mask_tres:0)}px,0px)`);
            contentTextosHidden.eq(2).css('transform',`translate(0px,-${(-250 + ((desplazamientoActual / 10) * 0.8))}px)`);
        }

    }else{

        if(desplazamientoActual > 5500 && desplazamientoActual < 13900){

            let desplazamiento_mask_uno = (-1800 + ((desplazamientoActual / 10) * 3));
            let desplazamiento_mask_dos = (-2200 + ((desplazamientoActual / 10) * 2.8));
            let desplazamiento_mask_tres = (-2600 + ((desplazamientoActual / 10) * 2.6));

            mask.eq(0).css('transform',`translate(${((desplazamiento_mask_uno >= 0 && desplazamiento_mask_uno)?desplazamiento_mask_uno:0)}px,0px)`);
            contentTextosHidden.eq(0).css('transform',`translate(0px,-${(-550 + ((desplazamientoActual / 10) * 0.8))}px)`);

            mask.eq(1).css('transform',`translate(${((desplazamiento_mask_dos >= 0)?desplazamiento_mask_dos:0)}px,0px)`);
            contentTextosHidden.eq(1).css('transform',`translate(0px,-${(-600 + ((desplazamientoActual / 10) * 0.8))}px)`);

            mask.eq(2).css('transform',`translate(${((desplazamiento_mask_tres >= 0)?desplazamiento_mask_tres:0)}px,0px)`);
            contentTextosHidden.eq(2).css('transform',`translate(0px,-${(-650 + ((desplazamientoActual / 10) * 0.8))}px)`);
        }

    }
    

    //Menu superior opciones

    if($(window).width() < 780){

        if(desplazamientoActual >= 60){

            menu_principal.find('div').eq(0).css('opacity','0');
            menu_principal.find('div').eq(1).css('opacity','0');
            menu_principal.find('.beeyoutiful_circle').css('opacity','0');


        }else{

            menu_principal.find('div').eq(0).css('opacity','1');
            menu_principal.find('div').eq(1).css('opacity','1');
            menu_principal.find('.beeyoutiful_circle').css('opacity','1');

        }

        if(desplazamientoActual >= 700){
            menu_principal.find('div').eq(0).fadeOut();
            menu_principal.find('div').eq(1).fadeOut();
        }else{
            menu_principal.find('div').eq(0).fadeIn();
            menu_principal.find('div').eq(1).fadeIn();
        }

    }else{

        if(desplazamientoActual >= 5500){

            menu_principal.find('div').eq(0).css('opacity','0');
            menu_principal.find('div').eq(1).css('opacity','0');
            menu_principal.find('.beeyoutiful_circle').css('opacity','0');


        }else{

            menu_principal.find('div').eq(0).css('opacity','1');
            menu_principal.find('div').eq(1).css('opacity','1');
            menu_principal.find('.beeyoutiful_circle').css('opacity','1');

        }

        if(desplazamientoActual >= 6300){
            menu_principal.find('div').eq(0).fadeOut();
            menu_principal.find('div').eq(1).fadeOut();
        }else{
            menu_principal.find('div').eq(0).fadeIn();
            menu_principal.find('div').eq(1).fadeIn();
        }

    }

    let contenedor_dos = $('#contenedor_dos');

    if($(window).width() < 780){
        if(desplazamientoActual > 3500){
            contentTextosHidden.fadeOut('fast');
        }else{
            contentTextosHidden.fadeIn('fast');
        }

        if(desplazamientoActual > 3450){
            contenedor_dos.css('background-color','#e7c341');
        }else{
            contenedor_dos.css('background-color','#f8dad0');
        }
    }else{
        if(desplazamientoActual > 13900){
            contentTextosHidden.fadeOut('fast');
        }else{
            contentTextosHidden.fadeIn('fast');
        }

        if(desplazamientoActual > 14200){
            contenedor_dos.css('background-color','#e7c341');
        }else{
            contenedor_dos.css('background-color','#f8dad0');
        }
    }


    let titulo_contenedor_tres = $('#titulo_contenedor_tres')
    
    if($(window).width() < 780){

        let propiedades_opacity_tres = (-5.8 + (desplazamientoActual / 1000));

        let matrix_uno = (-6.5 + ((desplazamientoActual / 1000) * 1.8));
        let matrix_dos = ((-3.5 + ((desplazamientoActual / 1000) * 1.3)) > 0)?(-3.5 + ((desplazamientoActual / 1000) * 1.3)):0;
        let matrix_tres = (-3.5 + ((desplazamientoActual / 1000) * 1.2));
        let matrix_cuatro = (3.5 - ((desplazamientoActual / 1000) * 1.4));
        let matrix_cinco = (-3.5 + ((desplazamientoActual / 1000) * 1.2));
        let matrix_seis = (100 - (desplazamientoActual / 100));

        if(desplazamientoActual >= 5200){
            matrix_uno = ((9.5 - ((desplazamientoActual / 1000) * 1.3)) > 1) ? (9.5 - ((desplazamientoActual / 1000) * 1.3)) : 1;
            matrix_dos = ((9 - ((desplazamientoActual / 1000) * 1.3)) > 1) ? (9 - ((desplazamientoActual / 1000) * 1.3)) : 1;
        }

        if(desplazamientoActual > 3500 && desplazamientoActual < 10000){
            titulo_contenedor_tres.css('transform',`matrix3d(${((matrix_uno <= 2.5) ? matrix_uno : 2.5)}, 0, 0, 0, 0, ${((matrix_dos <= 2.2) ? matrix_dos : 2.2)}, ${((matrix_tres <= 0) ? matrix_tres : 0)}, 0, 0, ${((matrix_cuatro >= 0) ? matrix_cuatro : 0)}, ${((matrix_cinco <= 1) ? matrix_cinco : 1)}, 0, 0, ${((matrix_seis >= 0.2) ? matrix_seis : 0.2)}, 0, 1)`);
        }

        if(desplazamientoActual > 5800  && desplazamientoActual <= 7400){
            contenedorPropiedades.css('opacity',`${((propiedades_opacity_tres <= 1) ? propiedades_opacity_tres : 1)}`);
        }

        if(desplazamientoActual > 7400){
            contenedorPropiedades.fadeOut('slow');
        }else{
            contenedorPropiedades.fadeIn('slow');
        }

    }else{

        let propiedades_opacity_tres = (-19.5 + (desplazamientoActual / 1000));
        let panal_scale = (-18.5 + (desplazamientoActual / 1000));

        let matrix_uno = (-12 + (desplazamientoActual / 1000));
        let matrix_dos = ((-17.8 + (desplazamientoActual / 800)) > 0)?(-17.8 + (desplazamientoActual / 800)):0;
        let matrix_tres = (-11.8 + (desplazamientoActual / 1200));
        let matrix_cuatro = (11.8 - (desplazamientoActual / 1200));
        let matrix_cinco = (-13.2 + (desplazamientoActual / 1000));
        let matrix_seis = (240 - (desplazamientoActual / 100));

        if(desplazamientoActual >= 16000){
            matrix_uno = ((19 - (desplazamientoActual / 1000)) > 1) ? (19 - (desplazamientoActual / 1000)) : 1;
            matrix_dos = ((19 - (desplazamientoActual / 1000)) > 1) ? (19 - (desplazamientoActual / 1000)) : 1;
        }

        if(desplazamientoActual > 13000 && desplazamientoActual < 30000){
            titulo_contenedor_tres.css('transform',`matrix3d(${((matrix_uno <= 2.5) ? matrix_uno : 2.5)}, 0, 0, 0, 0, ${((matrix_dos <= 2.2) ? matrix_dos : 2.2)}, ${((matrix_tres <= 0) ? matrix_tres : 0)}, 0, 0, ${((matrix_cuatro >= 0) ? matrix_cuatro : 0)}, ${((matrix_cinco <= 1) ? matrix_cinco : 1)}, 0, 0, ${((matrix_seis >= 0.2) ? matrix_seis : 0.2)}, 0, 1)`);
        }

        if(desplazamientoActual > 17000 && desplazamientoActual < 18500){
            panal.eq(0).css('transform','scale(0)');
            panal.eq(1).css('transform','scale(0)');
            panal.eq(2).css('transform','scale(0)');
            contenedorPropiedades.css('opacity','0');
        }

        if(desplazamientoActual > 18500 && desplazamientoActual < 25000){
            panal.eq(0).css('transform',`scale(${((panal_scale <= 1)?panal_scale:1)})`);
            panal.eq(1).css('transform',`scale(${((panal_scale <= 1)?panal_scale:1)})`);
            panal.eq(2).css('transform',`scale(${((panal_scale <= 1)?panal_scale:1)})`);
        }    

        if(desplazamientoActual > 22000){
            panal.eq(0).fadeOut('slow');
            panal.eq(1).fadeOut('slow');
            panal.eq(2).fadeOut('slow');
        }else{
            panal.eq(0).fadeIn('slow');
            panal.eq(1).fadeIn('slow');
            panal.eq(2).fadeIn('slow');
        }


        if(desplazamientoActual > 20000  && desplazamientoActual <= 23500){
            contenedorPropiedades.fadeIn();
            contenedorPropiedades.css('opacity',`${((propiedades_opacity_tres <= 1) ? propiedades_opacity_tres : 1)}`);
        }else{
            contenedorPropiedades.fadeOut();
        }

    }

    //Cambio de titulo en contenedor tres

    let formaLimon = $('#formaLimon');

    if($(window).width() < 780){

        if(desplazamientoActual > 3000 && desplazamientoActual < 7600){

            titulo_contenedor_tres.css('font-size','30pt');
            titulo_contenedor_tres.text('PROPIEDADES DE LA MIEL');

            formaLimon.css('transform','translate(900px,100px)');

        }else if(desplazamientoActual > 7600){
            titulo_contenedor_tres.text('BENEFICIOS DEL LIMÓN EN EL CABELLO');
            titulo_contenedor_tres.css('width','100%');
    
            if($(window).width() < 450){
                formaLimon.css('transform','translate(60%,50px)');
                titulo_contenedor_tres.css('font-size','30pt');
            }else if($(window).width() < 780){
                formaLimon.css('transform','translate(140%,40px)');
                titulo_contenedor_tres.css('font-size','30pt');
            }
        }
    
    }else{

        if(desplazamientoActual > 6000 && desplazamientoActual < 24000){
            titulo_contenedor_tres.css('width','0px');
            titulo_contenedor_tres.css('width','100%');
    
    
            titulo_contenedor_tres.css('font-size','80pt');
            titulo_contenedor_tres.text('PROPIEDADES DE LA MIEL');
    
            formaLimon.css('transform','translate(200%, 900px)');
    
        }else if(desplazamientoActual > 24000){
            titulo_contenedor_tres.text('BENEFICIOS DEL LIMÓN EN EL CABELLO');
            titulo_contenedor_tres.css('width','100%');
    
            formaLimon.css('transform','translate(170%, 100px)');
            titulo_contenedor_tres.css('font-size','50pt');
                
        }

    }



    let infoLimon = $('.infoLimon');


    if($(window).width() < 780){

        let imgLimon_opacity_uno = (-9.8 + ((desplazamientoActual / 1000) * 1.4));
        let imgLimon_opacity_dos = (-9.8 + ((desplazamientoActual / 1000) * 1.4));
        let imgLimon_opacity_tres = (-9.8 + ((desplazamientoActual / 1000) * 1.4));
        let imgLimon_opacity_cuatro = (-9.8 + ((desplazamientoActual / 1000) * 1.4));
    
        if(desplazamientoActual < 7600){
            imgLimon.eq(0).css('opacity','0');
            imgLimon.eq(1).css('opacity','0');
            imgLimon.eq(2).css('opacity','0');
            imgLimon.eq(3).css('opacity','0');
            infoLimon.css('transform','translateX(-200%)');
        }

        if(desplazamientoActual > 7700){
            imgLimon.eq(0).css('opacity',`${((imgLimon_opacity_uno <= 1)?imgLimon_opacity_uno:1)}`);
    
            if($(window).width() < 450){
                infoLimon.css('transform','translateX(30px)');
            }else if($(window).width() < 780){
                infoLimon.css('transform','translateX(150px)');
            }else{
                infoLimon.css('transform','translateX(150px)');
            }
        }

        if(desplazamientoActual > 7850){
            imgLimon.eq(1).css('opacity',`${((imgLimon_opacity_dos <= 1)?imgLimon_opacity_dos:1)}`);
        }
    
        if(desplazamientoActual > 8000){
            imgLimon.eq(3).css('opacity',`${((imgLimon_opacity_tres <= 1)?imgLimon_opacity_tres:1)}`);
        }
    
        if(desplazamientoActual > 8150){
            imgLimon.eq(2).css('opacity',`${((imgLimon_opacity_cuatro <= 1)?imgLimon_opacity_cuatro:1)}`);
        }

    }else{

        let imgLimon_opacity_uno = (-25 + (desplazamientoActual / 1000));
        let imgLimon_opacity_dos = (-26 + (desplazamientoActual / 1000));
        let imgLimon_opacity_tres = (-28 + (desplazamientoActual / 1000));
        let imgLimon_opacity_cuatro = (-27 + (desplazamientoActual / 1000));
    
        if(desplazamientoActual > 24000  && desplazamientoActual < 25000){
            imgLimon.eq(0).css('opacity','0');
            imgLimon.eq(1).css('opacity','0');
            imgLimon.eq(2).css('opacity','0');
            imgLimon.eq(3).css('opacity','0');
            infoLimon.css('transform','translateX(-200%)');
        }

        if(desplazamientoActual > 25000 && desplazamientoActual <= 26000){
            imgLimon.eq(0).css('opacity',`${((imgLimon_opacity_uno <= 1)?imgLimon_opacity_uno:1)}`);
    
            if($(window).width() < 450){
                infoLimon.css('transform','translateX(30px)');
            }else if($(window).width() < 780){
                infoLimon.css('transform','translateX(150px)');
            }else{
                infoLimon.css('transform','translateX(150px)');
            }
        }

        if(desplazamientoActual > 26000 && desplazamientoActual <= 28000){
            imgLimon.eq(1).css('opacity',`${((imgLimon_opacity_dos <= 1)?imgLimon_opacity_dos:1)}`);
        }
    
        if(desplazamientoActual > 28000 && desplazamientoActual <= 30000){
            imgLimon.eq(2).css('opacity',`${((imgLimon_opacity_tres <= 1)?imgLimon_opacity_tres:1)}`);
        }
    
        if(desplazamientoActual > 27000 && desplazamientoActual <= 29000){
            imgLimon.eq(3).css('opacity',`${((imgLimon_opacity_cuatro <= 1)?imgLimon_opacity_cuatro:1)}`);
        }
    }

    let contenedor_cuatro_h2 = $('#contenedor_cuatro h2');
    let romero_sin_fondo = $('#romero_sin_fondo');
    let parrafo_romero = $('#parrafo_romero');


    if($(window).width() < 780){

        if(desplazamientoActual > 8550){
            infoLimon.css('opacity','0');
            formaLimon.css('opacity','0');
            titulo_contenedor_tres.css('opacity','0');
            contenedor_cuatro_h2.css('transform','translateX(0%) scale(0.8)');
        }else{
            contenedor_cuatro_h2.css('transform','translateX(-100%) scale(0)');
            infoLimon.css('opacity','1');
            formaLimon.css('opacity','1');
            titulo_contenedor_tres.css('opacity','1');
        }

        if(desplazamientoActual > 8900 && desplazamientoActual < 20000){

            let opacity_titulo = (9.8 - (desplazamientoActual / 1000));

            contenedor_cuatro_h2.css('opacity',`${opacity_titulo}`);
        }

        if(desplazamientoActual > 9100){
            parrafo_romero.css('transform','translate(50px,-200px)');
        }else{
            parrafo_romero.css('transform','translate(50px,0px)');
        }

    }else{
        if(desplazamientoActual > 33200){
            contenedor_cuatro_h2.css('transform','translateX(25%) scale(1.4)');
        }else{
            contenedor_cuatro_h2.css('transform','translateX(-100%) scale(0)');
        }

        if(desplazamientoActual > 35000 && desplazamientoActual < 36100){

            let opacity_titulo = (36.3 - (desplazamientoActual / 1000));
    
            contenedor_cuatro_h2.css('opacity',`${opacity_titulo}`);
        }


        if($(window).width() < 1600){

            if(desplazamientoActual > 34800){
                romero_sin_fondo.css('bottom','150px');
                parrafo_romero.css('transform','translate(50px,-250px)');
            }else{
                romero_sin_fondo.css('bottom','-500px');
                parrafo_romero.css('transform','translate(50px,0px)');
            }
    
        }else{
    
            if(desplazamientoActual > 34800){
                romero_sin_fondo.css('bottom','240px');
                parrafo_romero.css('transform','translate(50px,-400px)');
            }else{
                romero_sin_fondo.css('bottom','-500px');
                parrafo_romero.css('transform','translate(50px,0px)');
            }
    
        }
    }





    let contenedorFlor = $('#contenedorFlor');
    let hojaFlor1 = $('#hojaFlor1');
    let hojaFlor2 = $('#hojaFlor2');
    let hojaFlor3 = $('#hojaFlor3');
    let hojaFlor4 = $('#hojaFlor4');
    let hojaFlor5 = $('#hojaFlor5');
    let hojaFlor6 = $('#hojaFlor6');
    let hojaFlor7 = $('#hojaFlor7');
    let hojaFlor8 = $('#hojaFlor8');
    let hojaFlor9 = $('#hojaFlor9');
    let hojaFlor10 = $('#hojaFlor10');
    let hojaFlor11 = $('#hojaFlor11');
    let hojaFlor12 = $('#hojaFlor12');
    let hojaFlor13 = $('#hojaFlor13');
    let hojaFlor14 = $('#hojaFlor14');
    let hojaFlor15 = $('#hojaFlor15');
    let hojaFlor16 = $('#hojaFlor16');


    if($(window).width() < 780){

        if(desplazamientoActual > 10600){
            contenedorFlor.css('transform','scale(0.3)');
        }else{
            contenedorFlor.css('transform','scale(0.2)');
        }

        if(desplazamientoActual > 10750){
            hojaFlor1.css('opacity',1);
        }else{
            hojaFlor1.css('opacity',0);
        }
    
        if(desplazamientoActual > 10800){
            hojaFlor2.css('opacity',1);
        }else{
            hojaFlor2.css('opacity',0);
        }
    
        if(desplazamientoActual > 10850){
            hojaFlor3.css('opacity',1);
        }else{
            hojaFlor3.css('opacity',0);
        }
    
        if(desplazamientoActual > 10900){
            hojaFlor4.css('opacity',1);
        }else{
            hojaFlor4.css('opacity',0);
        }
        
        if(desplazamientoActual > 10950){
            hojaFlor5.css('opacity',1);
        }else{
            hojaFlor5.css('opacity',0);
        }
    
        if(desplazamientoActual > 11000){
            hojaFlor6.css('opacity',1);
        }else{
            hojaFlor6.css('opacity',0);
        }
    
        if(desplazamientoActual > 11050){
            hojaFlor7.css('opacity',1);
        }else{
            hojaFlor7.css('opacity',0);
        }
    
        if(desplazamientoActual > 11100){
            hojaFlor8.css('opacity',1);
        }else{
            hojaFlor8.css('opacity',0);
        }
    
        if(desplazamientoActual > 11150){
            hojaFlor9.css('opacity',1);
        }else{
            hojaFlor9.css('opacity',0);
        }
    
        if(desplazamientoActual > 11200){
            hojaFlor10.css('opacity',1);
        }else{
            hojaFlor10.css('opacity',0);
        }
    
        if(desplazamientoActual > 11250){
            hojaFlor11.css('opacity',1);
        }else{
            hojaFlor11.css('opacity',0);
        }
    
        if(desplazamientoActual > 11300){
            hojaFlor12.css('opacity',1);
        }else{
            hojaFlor12.css('opacity',0);
        }
    
        if(desplazamientoActual > 11350){
            hojaFlor13.css('opacity',1);
        }else{
            hojaFlor13.css('opacity',0);
        }
    
        if(desplazamientoActual > 11400){
            hojaFlor14.css('opacity',1);
        }else{
            hojaFlor14.css('opacity',0);
        }
    
        if(desplazamientoActual > 11450){
            hojaFlor15.css('opacity',1);
        }else{
            hojaFlor15.css('opacity',0);
        }
    
        if(desplazamientoActual > 11500){
            hojaFlor16.css('opacity',1);
        }else{
            hojaFlor16.css('opacity',0);
        }

    }else{

        if(desplazamientoActual > 36300){
            contenedorFlor.css('transform','scale(0.7)');
        }else{
            contenedorFlor.css('transform','scale(0.2)');
        }
    
        if(desplazamientoActual > 36450){
            hojaFlor1.css('opacity',1);
        }else{
            hojaFlor1.css('opacity',0);
        }
    
        if(desplazamientoActual > 36500){
            hojaFlor2.css('opacity',1);
        }else{
            hojaFlor2.css('opacity',0);
        }
    
        if(desplazamientoActual > 36550){
            hojaFlor3.css('opacity',1);
        }else{
            hojaFlor3.css('opacity',0);
        }
    
        if(desplazamientoActual > 36600){
            hojaFlor4.css('opacity',1);
        }else{
            hojaFlor4.css('opacity',0);
        }
        
        if(desplazamientoActual > 36650){
            hojaFlor5.css('opacity',1);
        }else{
            hojaFlor5.css('opacity',0);
        }
    
        if(desplazamientoActual > 36700){
            hojaFlor6.css('opacity',1);
        }else{
            hojaFlor6.css('opacity',0);
        }
    
        if(desplazamientoActual > 36750){
            hojaFlor7.css('opacity',1);
        }else{
            hojaFlor7.css('opacity',0);
        }
    
        if(desplazamientoActual > 36800){
            hojaFlor8.css('opacity',1);
        }else{
            hojaFlor8.css('opacity',0);
        }
    
        if(desplazamientoActual > 36850){
            hojaFlor9.css('opacity',1);
        }else{
            hojaFlor9.css('opacity',0);
        }
    
        if(desplazamientoActual > 36900){
            hojaFlor10.css('opacity',1);
        }else{
            hojaFlor10.css('opacity',0);
        }
    
        if(desplazamientoActual > 36950){
            hojaFlor11.css('opacity',1);
        }else{
            hojaFlor11.css('opacity',0);
        }
    
        if(desplazamientoActual > 37000){
            hojaFlor12.css('opacity',1);
        }else{
            hojaFlor12.css('opacity',0);
        }
    
        if(desplazamientoActual > 37050){
            hojaFlor13.css('opacity',1);
        }else{
            hojaFlor13.css('opacity',0);
        }
    
        if(desplazamientoActual > 37100){
            hojaFlor14.css('opacity',1);
        }else{
            hojaFlor14.css('opacity',0);
        }
    
        if(desplazamientoActual > 37150){
            hojaFlor15.css('opacity',1);
        }else{
            hojaFlor15.css('opacity',0);
        }
    
        if(desplazamientoActual > 37200){
            hojaFlor16.css('opacity',1);
        }else{
            hojaFlor16.css('opacity',0);
        }
    

    }


    if($(window).width() < 780){
        if(desplazamientoActual > 11600){
            contenedorFlor.css('opacity','0.2');
        }else{
            contenedorFlor.css('opacity','1');
        }
    }else{
        if(desplazamientoActual > 38000){
            contenedorFlor.css('transform','translateX(-300px) scale(0.55)');
        }
    }


    if($(window).width() < 780){

        if(desplazamientoActual > 12300 && desplazamientoActual <= 20000){
            //Rama

            let opacity_rama = (-8 + (desplazamientoActual / 1550));
    
            rama_vainilla.css('opacity',`${(opacity_rama <= 0.3) ? opacity_rama : '0.3'}`);

            //Flor

            let opacity_flor = (-8 + (desplazamientoActual / 1600));
    
            flor_vainilla.css('opacity',`${(opacity_flor <= 0.5) ? opacity_flor : '0.5'}`);
        }

     }else{

        if(desplazamientoActual > 39000 && desplazamientoActual <= 43450){

            //Rama

            let desplazamiento_rama_vainilla = (11300 - ((desplazamientoActual / 10) * 2.70));
            rama_vainilla.css('left',-1 * (360 + desplazamiento_rama_vainilla) + 'vw');

            //Flor

            let desplazamiento_flor_vainilla = (11700 - ((desplazamientoActual / 10) * 2.78));
            let rotacion_flor = (11700 - ((desplazamientoActual / 10) * 2.78));

            flor_vainilla.css('transform','rotate('+rotacion_flor+'deg)');
            flor_vainilla.css('right',-200 - desplazamiento_flor_vainilla);

        }

     }

    let menu_principal_footer = $('#menu_principal_footer');
     let listaElementosVainilla = $('#listaElementosVainilla');


    if($(window).width() < 780){

        if(desplazamientoActual > 13300){
            listaElementosVainilla.css('left','30px');
        }else{
            listaElementosVainilla.css('left','-200%');
        }

        if(desplazamientoActual > 15380){
            menu_principal_footer.css('display','flex');
            menu_principal_footer.fadeIn();
        }else if(desplazamientoActual > 15000 && desplazamientoActual < 15380){
            menu_principal_footer.fadeOut();
        }
    }else{

        if(desplazamientoActual > 43450){
            listaElementosVainilla.css('left','50px');
        }else{
            listaElementosVainilla.css('left','-200%');
        }

        if(desplazamientoActual > 45200){
            menu_principal_footer.css('display','flex');
            menu_principal_footer.fadeIn();
        }else if(desplazamientoActual > 45000 && desplazamientoActual < 45200){
            menu_principal_footer.fadeOut();
        }
    }

});
