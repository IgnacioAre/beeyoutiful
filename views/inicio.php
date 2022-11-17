
<?php if(!isset($_GET['pagina'])){ ?>
<head>
    <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/inicio.css">
    <title>BEEYOUTIFUL | Inicio</title>
</head>

<?php
if(!isset($_GET['width']) )
{
echo "<script language=\"JavaScript\">
<!-- 
document.location=\"$PHP_SELF?width=\"+screen.width;
//-->
</script>";
}
?>

<main>
    
    <?php
        echo'<div id="menu_principal">
                <img class="beeyoutiful_circle" src="'.SERVER_URL.'assets/img/beeyoutiful_circle.svg" width="70px" />
                <div class="irBalsamo"><img src="'.SERVER_URL.'assets/img/balsamo.png" /> <span>BALSAMO LABIAL</span></div>
                <div class="irCera"><img src="'.SERVER_URL.'assets/img/cera.png" /> <span>CERA CAPILAR</span></div>
            </div>';
    ?>

    <div id="intro">
        <div id="contenedorLetras">
            <img class="letras" id="img_bee" src="<?php echo SERVER_URL; ?>assets/img/bee_abeja.png" height="200px" alt="">
            <img class="letras" id="img_you" src="<?php echo SERVER_URL; ?>assets/img/you.png" height="100px" alt="">
            <img class="letras" id="img_tiful" src="<?php echo SERVER_URL; ?>assets/img/tiful.png" height="150px" alt="">
        </div>
        <video <?php echo ($_GET['width'] < 780) ? "autoplay loop muted" : '' ?> src="<?php echo SERVER_URL; ?>assets/video/honey_video.mp4"></video>
    </div>

    <section id="contenedor_uno">
        <div class="clickeable" id="img_uno"></div>
        <div id="contenedor_texto_uno">
            <span id="t1">
                En nuestra profesión muchas veces realizamos trabajos donde necesitamos modelar el cabello para lograr un resultado óptimo del peinado.
                <br><br>
                La cera modeladora es un producto de fácil manejo y nos permite realizar un trabajo prolijo, por lo tanto quisimos elaborar un producto natural.
                <br><br>
                Creímos interesante también hacer un bálsamo de labios casero, que evite la deshidratación y pueda ser utilizado por toda la familia y todos los tipos de piel, incursionando en la cosmética ecológica y natural.
            </span>
        </div>
        
    </section>

    <section id="contenedor_dos">

        <div class="contentTextosHidden">
            <span class="texto_dos">Utilizamos como ingrediente base la cera natural de abejas</span>
            <div class="mask"></div>
        </div>

        <div class="contentTextosHidden">
            <span class="texto_dos">y escogimos una variedad de aromas para obtener diferentes beneficios</span>
            <div class="mask"></div>
        </div>

        <div class="contentTextosHidden">
            <span class="texto_dos">y a su vez tener más variedad en nuestros productos.</span>
            <div class="mask"></div>
        </div>
    </section>
    
    <section id="contenedor_tres">
        <div class="contenedorPanal">
            <div class="panal clickeable"></div>
            <div class="panal clickeable"></div>
            <div class="panal clickeable"></div>

            <div id="contenedorTituloTres">
                <h2 id="titulo_contenedor_tres">PROPIEDADES DE LA MIEL</h2>

                <div id="formaLimon">
                <div class="imgLimon clickeable"></div>
                <div class="imgLimon clickeable"></div>
                <div class="imgLimon clickeable"></div>
                <div class="imgLimon clickeable"></div>
            </div>
            </div>

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

            <ul class="listaElementos infoLimon">
                <li>Previene la caspa</li>
                <li>Mejora la textura del cabello</li>
                <li>Ayuda a mantenerlo brillante</li>
            </ul>

        </div>
    </section>


    <section id="contenedor_cuatro">
        <div id="contenedorTituloCuatro">
            <h2>BENEFICIOS DEL ROMERO <br> EN EL CABELLO</h2>
        </div>

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
            <li>Su poder emoliente e hidratante lo hace muy indicado <br> para ser utilizado por vía tópica.</li>
            <li>Potencia la correcta producción de colágeno y glucoproteínas.</li>
            <li>Rica en vitamina E, lo que aporta protección y nutrición a las células.</li>
        </ul>

    </section>

    <section id="contenedor_seis">

        <div id="contenedorVainilla">
            <img id="rama_vainilla" src="<?php echo SERVER_URL; ?>assets/img/rama_vainilla.png" alt="">
            <img id="flor_vainilla" src="<?php echo SERVER_URL; ?>assets/img/flor_vainilla.png" alt="">
            <ul id="listaElementosVainilla">
                <h3>BENEFICIOS DE LA VAINILLA</h3>
                <li>Tiene propiedades relajantes.</li>
                <li>Propiedades antibacterianas y antioxidantes</li>
                <li>Potencia la correcta producción de colágeno y glucoproteínas.</li>
                <li>Hidrata la piel en profundidad y actúa creando una película protectora <br> sobre los labios para repararlos.</li>
            </ul>
        </div>
        
    </section>

    <section id="contenedor_siete">
        <h2>PROCESO DE UNIFICACIÓN DE INGREDIENTES</h2>
        <video autoplay loop muted src="<?php echo SERVER_URL; ?>assets/img/elaboracion.mp4"></video>
        <p>Utilizamos productos naturales y específicos para cosmética, <br> 
        con el fin de obtener óptimos resultados en la elaboración <br> 
        y conservar las propiedades de los mismos.</p>
    </section>

    <?php
        echo'<div id="menu_principal_footer">
                <img class="beeyoutiful_circle" src="'.SERVER_URL.'assets/img/beeyoutiful_circle.svg" width="70px" />
                <div class="irBalsamo"><img src="'.SERVER_URL.'assets/img/balsamo.png" /> <span>BALSAMO LABIAL</span></div>
                <div class="irCera"><img src="'.SERVER_URL.'assets/img/cera.png" /> <span>CERA CAPILAR</span></div>
            </div>';
    ?>

</main>

<script src="<?php echo SERVER_URL; ?>js/inicio.js"></script>


<?php } else if($_GET['pagina'] == 'balsamo'){ ?>


    <head>
        <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/presentaciones.css">
        <title>BEEYOUTIFUL | Bálsamo Labial</title>
    </head>

    <main>

        <?php
            echo'<div id="menu_principal">
                    <div id="irInicio"><img src="'.SERVER_URL.'assets/img/home.png" /> <span>IR AL INICIO</span></div>
                    <div class="irCera"><img src="'.SERVER_URL.'assets/img/cera.png" /> <span>CERA CAPILAR</span></div>
                </div>';
        ?>

        <div class="contenidoPresentaciones">
            <h1 class="titulo">Nuestro bálsamo labial en sus dos presentaciones...</h1>

            <div class="contenedorCards">
                <div class="card">
                    <div class="balsamo_vainilla clickeable"></div>
                    <span class="etiqueta">Bálsamo de Vainilla</span>
                    <img class="liston" src="<?php echo SERVER_URL; ?>assets/img/liston.svg" alt="">
                </div>
                <div class="card">
                    <div class="balsamo_calendula clickeable"></div>
                    <span class="etiqueta">Bálsamo de Caléndula</span>
                    <img class="liston" src="<?php echo SERVER_URL; ?>assets/img/liston.svg" alt="">
                </div>
            </div>
        </div>

    </main>

    <script src="<?php echo SERVER_URL; ?>js/presentaciones.js"></script>


<?php } else if($_GET['pagina'] == 'cera'){ ?>

    <head>
        <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/presentaciones.css">
        <title>BEEYOUTIFUL | Cera Capilar</title>
    </head>

    <main>

        <?php
            echo'<div id="menu_principal">
                    <div id="irInicio"><img src="'.SERVER_URL.'assets/img/home.png" /> <span>IR AL INICIO</span></div>
                    <div class="irBalsamo"><img src="'.SERVER_URL.'assets/img/balsamo.png" /> <span>BALSAMO LABIAL</span></div>
                </div>';
        ?>

        <div class="contenidoPresentaciones">
            <h1 class="titulo">Nuestra cera capilar en sus dos presentaciones...</h1>

            <div class="contenedorCards">
                <div class="card">
                    <div class="cera_limon clickeable"></div>
                    <span class="etiqueta">Cera de Limón</span>
                    <img class="liston" src="<?php echo SERVER_URL; ?>assets/img/liston.svg" alt="">
                </div>
                <div class="card">
                    <div class="cera_romero clickeable"></div>
                    <span class="etiqueta">Cera de Romero</span>
                    <img class="liston" src="<?php echo SERVER_URL; ?>assets/img/liston.svg" alt="">
                </div>
            </div>
        </div>

    </main>

    <script src="<?php echo SERVER_URL; ?>js/presentaciones.js"></script>

<?php } else { ?>


<?php } ?>


