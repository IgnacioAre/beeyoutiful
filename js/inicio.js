let menu_principal = $('#menu_principal');
const panal = $('.panal');
const clickeable = $('.clickeable');
let imgLimon = $('.imgLimon');
const intro =  document.querySelector('#intro');
const contenedor_uno =  document.querySelector('#contenedor_uno');
const video = document.querySelector('video');
const text = $('.tituloIntro');
const contenedorModalIMG = $('#contenedorModalIMG');
let cerrarModalIMG = $('#cerrarModalIMG');

const bee = $('#img_bee');
const you = $('#img_you');
const tiful = $('#img_tiful');

const controller = new ScrollMagic.Controller();


clickeable.click((e)=>{
    let element = $(e.target);
    let path = urlCompleta+'assets/img/';

    let url = element.css("background-image").split('"');
    let name = url[1].split('/')[5];

    $('#imgGrande').attr('src',path+name);
    contenedorModalIMG.css('display','flex');
    contenedorModalIMG.fadeIn('slow');
});

cerrarModalIMG.click(()=>{
    contenedorModalIMG.fadeOut();
});

contenedorModalIMG.click((e)=>{

    if($(e.target).attr('id') != 'cerrarModalIMG' &&$(e.target).attr('id') != 'imgGrande'){
        cerrarModalIMG.css('transform','rotate(-20deg)');
    
        setTimeout(() => {
            cerrarModalIMG.css('transform','rotate(20deg)');
        }, 100);
    
        setTimeout(() => {
            cerrarModalIMG.css('transform','rotate(-20deg)');
        }, 200);
    
        setTimeout(() => {
            cerrarModalIMG.css('transform','rotate(20deg)');
        }, 300);
    
        setTimeout(() => {
            cerrarModalIMG.css('transform','rotate(0deg)');
        }, 400);
    }

});

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
});

setInterval(()=>{
    delay += (scrollPos - delay) * aceleracion;
    video.currentTime = scrollPos;
}, 99.9);

//End animación video


let img_uno = $('#img_uno');
let t1 = $('#t1');
let t2 = $('#t2');
let t3 = $('#t3');
let mask = $('.mask');
let texto_dos = $('.texto_dos');
let contenedorPropiedades = $('#contenedorPropiedades');
let contentTextosHidden = $('.contentTextosHidden');


$(document).on("scroll", function(){
    //Obtengo el valor del scroll en el documento
    var desplazamientoActual = $(document).scrollTop();

    console.log(desplazamientoActual);

    //Animación imagen_uno y textos

    if(desplazamientoActual >= 5200 && desplazamientoActual <= 6300){
        img_uno.addClass('showUp');
        t1.addClass('showUp');
    }else{
        img_uno.removeClass('showUp');
        t1.removeClass('showUp');
    }

    if(desplazamientoActual >= 5800 && desplazamientoActual <= 6150){
        img_uno.addClass('shadowFade');
    }else{
        img_uno.removeClass('shadowFade');
    }


    if(desplazamientoActual >= 5600 && desplazamientoActual <= 6100){
        t1.addClass('showUp');
    }else{
        t1.removeClass('showUp');
    }

    if(desplazamientoActual >= 5750 && desplazamientoActual <= 6250){
        t2.addClass('showUp');
    }else{
        t2.removeClass('showUp');
    }

    if(desplazamientoActual >= 5900 && desplazamientoActual <= 6400){
        t3.addClass('showUp');
    }else{
        t3.removeClass('showUp');
    }


    //Texto Hidden


    if(desplazamientoActual > 5500 && desplazamientoActual < 12900){

        let desplazamiento_mask_uno = (-1800 + ((desplazamientoActual / 10) * 2.7));
        let desplazamiento_mask_dos = (-2200 + ((desplazamientoActual / 10) * 2.7));
        let desplazamiento_mask_tres = (-2600 + ((desplazamientoActual / 10) * 2.8));

        mask.eq(0).css('transform',`translate(${((desplazamiento_mask_uno >= 0 && desplazamiento_mask_uno)?desplazamiento_mask_uno:0)}px,0px)`);
        contentTextosHidden.eq(0).css('transform',`translate(0px,-${(-550 + ((desplazamientoActual / 10) * 0.8))}px)`);

        mask.eq(1).css('transform',`translate(${((desplazamiento_mask_dos >= 0)?desplazamiento_mask_dos:0)}px,0px)`);
        contentTextosHidden.eq(1).css('transform',`translate(0px,-${(-600 + ((desplazamientoActual / 10) * 0.8))}px)`);

        mask.eq(2).css('transform',`translate(${((desplazamiento_mask_tres >= 0)?desplazamiento_mask_tres:0)}px,0px)`);
        contentTextosHidden.eq(2).css('transform',`translate(0px,-${(-650 + ((desplazamientoActual / 10) * 0.8))}px)`);
    }
    

    //Menu superior opciones

    if(desplazamientoActual >= 5500){

        menu_principal.find('div').eq(0).css('opacity','0');
        setTimeout(() => {
            menu_principal.find('div').eq(1).css('opacity','0');
        }, 200);


    }else{


        menu_principal.find('div').eq(0).css('opacity','1');
        setTimeout(() => {
            menu_principal.find('div').eq(1).css('opacity','1');
        }, 200);

    }

    if(desplazamientoActual >= 5800){
        menu_principal.find('div').eq(0).fadeOut();
        menu_principal.find('div').eq(1).fadeOut();
    }else{
        menu_principal.find('div').eq(0).fadeIn();
        menu_principal.find('div').eq(1).fadeIn();
    }



    if(desplazamientoActual > 13000){
        contentTextosHidden.fadeOut('fast');
    }else{
        contentTextosHidden.fadeIn('fast');
    }

    if(desplazamientoActual > 13800){
        $('#contenedor_dos').css('background-color','#e7c341');
    }else{
        $('#contenedor_dos').css('background-color','#f8dad0');
    }

    let panal_scale_uno = (-18.5 + (desplazamientoActual / 1000));
    let panal_scale_dos = (-19 + (desplazamientoActual / 1000));
    let panal_scale_tres = (-19.5 + (desplazamientoActual / 1000));
    let propiedades_opacity_tres = (-20.5 + (desplazamientoActual / 1000));

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

    if(desplazamientoActual > 13000){
        $('.contenedorPanal h2').css('transform',`matrix3d(${((matrix_uno <= 2.5) ? matrix_uno : 2.5)}, 0, 0, 0, 0, ${((matrix_dos <= 2.2) ? matrix_dos : 2.2)}, ${((matrix_tres <= 0) ? matrix_tres : 0)}, 0, 0, ${((matrix_cuatro >= 0) ? matrix_cuatro : 0)}, ${((matrix_cinco <= 1) ? matrix_cinco : 1)}, 0, 0, ${((matrix_seis >= 0.2) ? matrix_seis : 0.2)}, 0, 1)`);
    }

    if(desplazamientoActual < 18500){
        panal.eq(0).css('transform','scale(0)');
        panal.eq(1).css('transform','scale(0)');
        panal.eq(2).css('transform','scale(0)');
        contenedorPropiedades.css('opacity','0');
    }

    if(desplazamientoActual > 18500){
        panal.eq(0).css('transform',`scale(${((panal_scale_uno <= 1)?panal_scale_uno:1)})`);
    }    

    if(desplazamientoActual > 19000){
        panal.eq(1).css('transform',`scale(${((panal_scale_dos <= 1)?panal_scale_dos:1)})`);
    }

    if(desplazamientoActual > 19500){
        panal.eq(2).css('transform',`scale(${((panal_scale_tres <= 1)?panal_scale_tres:1)})`);
    }

    if(desplazamientoActual > 20500){
        contenedorPropiedades.css('opacity',`${((propiedades_opacity_tres <= 1) ? propiedades_opacity_tres : 1)}`);
    }

    if(desplazamientoActual > 22000){
        panal.eq(0).fadeOut('slow');
    }else{
        panal.eq(0).fadeIn('slow');
    }

    if(desplazamientoActual > 22500){
        panal.eq(1).fadeOut('slow');
    }else{
        panal.eq(1).fadeIn('slow');
    }

    if(desplazamientoActual > 23000){
        panal.eq(2).fadeOut('slow');
        contenedorPropiedades.fadeOut('slow');
    }else{
        panal.eq(2).fadeIn('slow');
        contenedorPropiedades.fadeIn('slow');
    }


    //Cambio de titulo en contenedor tres

    if(desplazamientoActual < 23000){
        $('#titulo_contenedor_tres').css('width','100%');
    }

    if(desplazamientoActual > 23000 && desplazamientoActual < 24000){
        $('#titulo_contenedor_tres').css('width','0px');

        setTimeout(() => {
            $('#titulo_contenedor_tres').css('font-size','80pt');
            $('#titulo_contenedor_tres').text('PROPIEDADES DE LA MIEL');
        }, 400);

        if($(window).width() < 1600){
            $('#formaLimon').css('transform','translate(150%, 900px)');
        }else{
            $('#formaLimon').css('transform','translate(200%, 900px)');
        }

    }else if(desplazamientoActual > 24000){
        $('#titulo_contenedor_tres').text('BENEFICIOS DEL LIMÓN EN EL CABELLO');
        $('#titulo_contenedor_tres').css('width','100%');
        $('#titulo_contenedor_tres').css('font-size','50pt');
        if($(window).width() < 1600){
            $('#formaLimon').css('transform','translate(150%, -100px)');
        }else{
            $('#formaLimon').css('transform','translate(200%, -100px)');
        }
    }


    let imgLimon_opacity_uno = (-25 + (desplazamientoActual / 1000));
    let imgLimon_opacity_dos = (-26 + (desplazamientoActual / 1000));
    let imgLimon_opacity_tres = (-28 + (desplazamientoActual / 1000));
    let imgLimon_opacity_cuatro = (-27 + (desplazamientoActual / 1000));

    if(desplazamientoActual < 25000){
        imgLimon.eq(0).css('opacity','0');
        imgLimon.eq(1).css('opacity','0');
        imgLimon.eq(2).css('opacity','0');
        imgLimon.eq(3).css('opacity','0');
        $('.infoLimon li').css('transform','translateX(-200%)');
    }

    if(desplazamientoActual > 25000){
        imgLimon.eq(0).css('opacity',`${((imgLimon_opacity_uno <= 1)?imgLimon_opacity_uno:1)}`);
        $('.infoLimon li').eq(0).css('transform','translateX(0%)');
    }

    if(desplazamientoActual > 26000){
        imgLimon.eq(1).css('opacity',`${((imgLimon_opacity_dos <= 1)?imgLimon_opacity_dos:1)}`);romero_sin_fondo
        $('.infoLimon li').eq(1).css('transform','translateX(0%)');
    }

    if(desplazamientoActual > 28000){
        imgLimon.eq(2).css('opacity',`${((imgLimon_opacity_tres <= 1)?imgLimon_opacity_tres:1)}`);
        $('.infoLimon li').eq(2).css('transform','translateX(0%)');
    }

    if(desplazamientoActual > 27000){
        imgLimon.eq(3).css('opacity',`${((imgLimon_opacity_cuatro <= 1)?imgLimon_opacity_cuatro:1)}`);
    }

    if(desplazamientoActual > 33200){
        $('#contenedor_cuatro h2').css('transform','translate(5%,0%)');
    }else{
        $('#contenedor_cuatro h2').css('transform','translate(-100%,0%)');
    }


    if(desplazamientoActual > 35000){
        $('#contenedor_cuatro h2').css('transform','translate(5%,600%)');
    }

    if(desplazamientoActual > 38000){
        $('#contenedor_cuatro h2').css('transform','translate(5%,0%)');
    }


    if($(window).width() < 1600){

        if(desplazamientoActual > 38800){
            $('#romero_sin_fondo').css('bottom','150px');
        }else{
            $('#romero_sin_fondo').css('bottom','-500px');
        }

        if(desplazamientoActual > 38800){
            $('#parrafo_romero li').eq(0).css('transform','translate(50px,-350px)');
        }else{
            $('#parrafo_romero li').eq(0).css('transform','translate(50px,0px)');
        }

        if(desplazamientoActual > 39000){
            $('#parrafo_romero li').eq(1).css('transform','translate(50px,-300px)');
        }else{
            $('#parrafo_romero li').eq(1).css('transform','translate(50px,0px)');
        }

        if(desplazamientoActual > 39200){
            $('#parrafo_romero li').eq(2).css('transform','translate(50px,-250px)');
        }else{
            $('#parrafo_romero li').eq(2).css('transform','translate(50px,0px)');
        }

    }else{

        if(desplazamientoActual > 38800){
            $('#romero_sin_fondo').css('bottom','240px');
        }else{
            $('#romero_sin_fondo').css('bottom','-500px');
        }

        if(desplazamientoActual > 38800){
            $('#parrafo_romero li').eq(0).css('transform','translate(50px,-650px)');
        }else{
            $('#parrafo_romero li').eq(0).css('transform','translate(50px,0px)');
        }

        if(desplazamientoActual > 39000){
            $('#parrafo_romero li').eq(1).css('transform','translate(50px,-550px)');
        }else{
            $('#parrafo_romero li').eq(1).css('transform','translate(50px,0px)');
        }

        if(desplazamientoActual > 39200){
            $('#parrafo_romero li').eq(2).css('transform','translate(50px,-450px)');
        }else{
            $('#parrafo_romero li').eq(2).css('transform','translate(50px,0px)');
        }

    }


    if(desplazamientoActual > 39000 && desplazamientoActual < 40100){

        let opacity_titulo = (40.3 - (desplazamientoActual / 1000));

        $('#contenedor_cuatro h2').css('opacity',`${opacity_titulo}`);
    }



    if(desplazamientoActual > 40300){
        $('#contenedorFlor').css('transform','scale(0.7)');
    }else{
        $('#contenedorFlor').css('transform','scale(0.2)');
    }

    if(desplazamientoActual > 40450){
        $('#hojaFlor1').css('opacity',1);

    }else{
        $('#hojaFlor1').css('opacity',0);
    }

    if(desplazamientoActual > 40500){
        $('#hojaFlor2').css('opacity',1);
    }else{
        $('#hojaFlor2').css('opacity',0);
    }

    if(desplazamientoActual > 40550){
        $('#hojaFlor3').css('opacity',1);
    }else{
        $('#hojaFlor3').css('opacity',0);
    }

    if(desplazamientoActual > 40600){
        $('#hojaFlor3').css('opacity',1);
    }else{
        $('#hojaFlor3').css('opacity',0);
    }
    
    if(desplazamientoActual > 40650){
        $('#hojaFlor3').css('opacity',1);
    }else{
        $('#hojaFlor3').css('opacity',0);
    }

    if(desplazamientoActual > 40700){
        $('#hojaFlor3').css('opacity',1);
    }else{
        $('#hojaFlor3').css('opacity',0);
    }

    if(desplazamientoActual > 40750){
        $('#hojaFlor4').css('opacity',1);
    }else{
        $('#hojaFlor4').css('opacity',0);
    }

    if(desplazamientoActual > 40800){
        $('#hojaFlor5').css('opacity',1);
    }else{
        $('#hojaFlor5').css('opacity',0);
    }

    if(desplazamientoActual > 40850){
        $('#hojaFlor6').css('opacity',1);
    }else{
        $('#hojaFlor6').css('opacity',0);
    }

    if(desplazamientoActual > 40900){
        $('#hojaFlor7').css('opacity',1);
    }else{
        $('#hojaFlor7').css('opacity',0);
    }

    if(desplazamientoActual > 40950){
        $('#hojaFlor8').css('opacity',1);
    }else{
        $('#hojaFlor8').css('opacity',0);
    }

    if(desplazamientoActual > 41000){
        $('#hojaFlor9').css('opacity',1);
    }else{
        $('#hojaFlor9').css('opacity',0);
    }

    if(desplazamientoActual > 41050){
        $('#hojaFlor10').css('opacity',1);
    }else{
        $('#hojaFlor10').css('opacity',0);
    }

    if(desplazamientoActual > 41100){
        $('#hojaFlor11').css('opacity',1);
    }else{
        $('#hojaFlor11').css('opacity',0);
    }

    if(desplazamientoActual > 41150){
        $('#hojaFlor12').css('opacity',1);
    }else{
        $('#hojaFlor12').css('opacity',0);
    }

    if(desplazamientoActual > 41200){
        $('#hojaFlor13').css('opacity',1);
    }else{
        $('#hojaFlor13').css('opacity',0);
    }

    if(desplazamientoActual > 41250){
        $('#hojaFlor14').css('opacity',1);
    }else{
        $('#hojaFlor14').css('opacity',0);
    }

    if(desplazamientoActual > 41300){
        $('#hojaFlor15').css('opacity',1);
    }else{
        $('#hojaFlor15').css('opacity',0);
    }

    if(desplazamientoActual > 41350){
        $('#hojaFlor16').css('opacity',1);
    }else{
        $('#hojaFlor16').css('opacity',0);
    }

    if(desplazamientoActual > 43000){
        $('#contenedorFlor').css('transform','translateX(-300px) scale(0.55)');
    }

});


