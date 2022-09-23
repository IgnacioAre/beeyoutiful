let menu_principal = $('#menu_principal');

const intro =  document.querySelector('#intro');
const contenedor_uno =  document.querySelector('#contenedor_uno');
const video = document.querySelector('video');
const text = $('.tituloIntro');

const bee = $('#img_bee');
const you = $('#img_you');
const tiful = $('#img_tiful');

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



let img_uno = $('#img_uno');
let t1 = $('#t1');
let t2 = $('#t2');
let t3 = $('#t3');
let t4 = $('#t4');
let mask = $('.mask');
let texto_dos = $('.texto_dos');
let contentTextosHidden = $('.contentTextosHidden');

/* const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
}); */

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

    if(desplazamientoActual >= 6050 && desplazamientoActual <= 6550){
        t4.addClass('showUp');
    }else{
        t4.removeClass('showUp');
    }


    //Texto Hidden
    console.log(-700 + ((desplazamientoActual / 10) * 1));

    mask.eq(0).css('transform',`translate(${(-1400 + ((desplazamientoActual / 10) * 2))}px,0px)`)
    contentTextosHidden.eq(0).css('transform',`translate(0px,-${(-700 + ((desplazamientoActual / 10) * 1))}px)`);

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

    //desplazamientoAnterior = desplazamientoActual;

});

//End animación video

