const intro =  document.querySelector('#intro');
const contenedor_uno =  document.querySelector('#contenedor_uno');
const video = document.querySelector('video');
const text = $('.tituloIntro');

const bee = $('#img_bee');
const you = $('#img_you');
const tiful = $('#img_tiful');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: intro,
    duration: 9000,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller);


//Video animación

let aceleracion = 1;
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

        bee.css('margin-top',scrollText * 70);

    }else{ 
        bee.css('opacity',1);
        you.css('opacity',1);
        tiful.css('opacity',1);
        bee.css('margin-top',4 * 70);
    }
});

setInterval(()=>{
    delay += (scrollPos - delay) * aceleracion;
    video.currentTime = scrollPos;
}, 100);