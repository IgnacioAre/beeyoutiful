
<head>
    <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/inicio.css">
    <title>BEEYOUTIFUL</title>
</head>

<main>

    <div id="intro">
        <div id="contenedorLetras">
            <img class="letras" id="img_bee" src="<?php echo SERVER_URL; ?>assets/img/bee.png" alt="">
            <img class="letras" id="img_you" src="<?php echo SERVER_URL; ?>assets/img/you.png" alt="">
            <img class="letras" id="img_tiful" src="<?php echo SERVER_URL; ?>assets/img/tiful.png" alt="">
        </div>
        <video src="<?php echo SERVER_URL; ?>assets/video/honey_video.mp4"></video>
    </div>

    <section id="contenedor_uno">
        <div id="img_uno"></div>
        <div id="contenedor_texto_uno">
            <span id="t1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, perferendis.
            </span>
            <span id="t2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni!
            </span>
            <span id="t3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, perferendis.
            </span>
        </div>
        
    </section>

    <section id="contenedor_dos">

        <div class="contentTextosHidden">
            <span class="texto_dos">Lorem ipsum dolor sit amet.</span>
            <div class="mask"></div>
        </div>

        <div class="contentTextosHidden">
            <span class="texto_dos">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            <div class="mask"></div>
        </div>

        <div class="contentTextosHidden">
            <span class="texto_dos">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div class="mask"></div>
        </div>
    </section>
    
    <section id="contenedor_tres">
        <div class="contenedorPanal">
            <div class="panal"></div>
            <div class="panal"></div>
            <div class="panal"></div>
            <h2 id="titulo_contenedor_tres">PROPIEDADES DE LA MIEL</h2>
            <div id="contenedorPropiedades">

                <ul class="listaElementos">
                    <h3>En el pelo:</h3>
                    <li>Hidrata en profundidad</li>
                    <li>Aporta brillo</li>
                    <li>Limpia en profundidad</li>
                    <li>Alisa el cabello</li>
                    <li>Adiós a la caspa</li>
                    <li>Fortalece el pelo</li>
                    <li>Evita el envejecimiento del pelo</li>
                </ul>

                <ul class="listaElementos">
                    <h3>En los labios:</h3>
                    <li>Hidrata</li>
                    <li>Suaviza</li>
                    <li>Ayuda a la regeneración <br> de los mismos</li>
                    <li>Mejora su aspecto</li>
                </ul>

            </div>


            <div class="panal"></div>
            <div class="panal"></div>
            <div class="panal"></div>

            <ul class="listaElementos infoLimon">
                <li>Previene la caspa</li>
                <li>Mejora la textura del cabello</li>
                <li>Ayuda a mantenerlo brillante</li>
            </ul>


            <!-- <video id="videoElaboracion" preload controls>
                <source src="<?php //echo SERVER_URL; ?>assets/img/elaboracion.mp4" type="video/mp4">
            </video> -->
        </div>
    </section>


    <div id="contenedorModalIMG">
        <img id="imgGrande" src="" alt="Imagen">
        <span id="cerrarModalIMG">X</span>
    </div>

</main>

<script src="<?php echo SERVER_URL; ?>js/inicio.js"></script>