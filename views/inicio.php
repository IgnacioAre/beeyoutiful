
<head>
    <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/inicio.css">
    <title>BEEYOUTIFUL</title>
</head>

<main>

    <div id="intro">
        <div id="contenedorLetras">
            <img class="letras" id="img_bee" src="<?php echo SERVER_URL; ?>assets/img/bee_abeja.png" height="200px" alt="">
            <img class="letras" id="img_you" src="<?php echo SERVER_URL; ?>assets/img/you.png" height="100px" alt="">
            <img class="letras" id="img_tiful" src="<?php echo SERVER_URL; ?>assets/img/tiful.png" height="150px" alt="">
        </div>
        <video src="<?php echo SERVER_URL; ?>assets/video/honey_video.mp4"></video>
    </div>

    <section id="contenedor_uno">
        <div class="clickeable" id="img_uno"></div>
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
            <div class="panal clickeable"></div>
            <div class="panal clickeable"></div>
            <div class="panal clickeable"></div>
            <h2 id="titulo_contenedor_tres">PROPIEDADES DE LA MIEL</h2>
            <div id="contenedorPropiedades">

                <ul class="listaElementos">
                    <h3>En el cabello:</h3>
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

            <div id="formaLimon">
                <div class="imgLimon clickeable"></div>
                <div class="imgLimon clickeable"></div>
                <div class="imgLimon clickeable"></div>
                <div class="imgLimon clickeable"></div>
            </div>

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


    <section id="contenedor_cuatro">
        <h2>BENEFICIOS DEL ROMERO <br> EN EL CABELLO</h2>

        <ul id="parrafo_romero">
            <li>Tiene un efecto vasodilatador, algo que favorece la circulación sanguínea de los folículos. <br> De esta forma reciben mejor los nutrientes, por lo que evitamos que el cabello se debilite.</li>
            <li>Es antiinflamatorio, por lo que puede generar una sensación calmante en los cueros cabelludos irritados.</li>
            <li>Su acción antioxidante lo convierte en un buen acondicionador natural, al hidratar, <br> aportar brillo y fuerza y retrasar el envejecimiento celular.</li>
        </ul>

        <div id="contenidoRomero">
            <img id="romero_sin_fondo" src="<?php echo SERVER_URL; ?>assets/img/romero_sin_fondo.png" alt="">
            <img id="piso_tierra_sin_fondo" src="<?php echo SERVER_URL; ?>assets/img/piso_tierra_sin_fondo.png" alt="">
        </div>
    </section>

    <section id="contenedor_cinco">
        <img id="piso_tierra_sin_fondo_invertido" src="<?php echo SERVER_URL; ?>assets/img/piso_tierra_sin_fondo_invertido.png" alt="">
        <div id="contenedorFlor">
            <div id="centroFlor"></div>
            <div class="hojaFlor" id="hojaFlor1"></div>
            <div class="hojaFlor" id="hojaFlor2"></div>
            <div class="hojaFlor" id="hojaFlor3"></div>
            <div class="hojaFlor" id="hojaFlor4"></div>
            <div class="hojaFlor" id="hojaFlor5"></div>
            <div class="hojaFlor" id="hojaFlor6"></div>
            <div class="hojaFlor" id="hojaFlor7"></div>
            <div class="hojaFlor" id="hojaFlor8"></div>
            <div class="hojaFlor" id="hojaFlor9"></div>
            <div class="hojaFlor" id="hojaFlor10"></div>
            <div class="hojaFlor" id="hojaFlor11"></div>
            <div class="hojaFlor" id="hojaFlor12"></div>
            <div class="hojaFlor" id="hojaFlor13"></div>
            <div class="hojaFlor" id="hojaFlor14"></div>
            <div class="hojaFlor" id="hojaFlor15"></div>
            <div class="hojaFlor" id="hojaFlor16"></div>
        </div>
        
        <ul id="listaElementosCalendula">
            <h3>BENEFICIOS DE LA CALÉNDULA</h3>
            <li>Tiene propiedades regeneradoras y cicatrizantes.</li>
            <li>Su poder emoliente e hidratante lo hace muy indicado <br> para ser utilizado por vía tópica</li>
            <li>Potencia la correcta producción de colágeno y glucoproteínas.</li>
            <li>Rica en vitamina E, lo que aporta protección y nutrición a las células.</li>
        </ul>

    </section>


    <div id="contenedorModalIMG">
        <img id="imgGrande" src="" alt="Imagen">
        <span id="cerrarModalIMG">X</span>
    </div>

</main>

<script src="<?php echo SERVER_URL; ?>js/inicio.js"></script>