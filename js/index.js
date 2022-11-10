let url = $(location).attr('href').split('/');
const urlCompleta = url[0]+"//"+url[2]+"/";

$(document).ready(()=>{

    const clickeable = $('.clickeable');
    const contenedorModalIMG = $('#contenedorModalIMG');
    let cerrarModalIMG = $('#cerrarModalIMG');

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


    $('#irInicio').click(()=>{
        window.location.href = urlCompleta;
    });
    
    $('#irBalsamo').click(()=>{
        window.location.href = urlCompleta + 'balsamo';
    });
    
    $('#irCera').click(()=>{
        window.location.href = urlCompleta + 'cera';
    });
});
