<head>
    <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/presentaciones.css">
    <title>BEEYOUTIFUL | Bálsamo Labial</title>
</head>

<main>

    <?php
        echo'<div id="menu_principal">
                <div id="irInicio"><img src="'.SERVER_URL.'assets/img/home.png" /> <span>IR AL INICIO</span></div>
                <div id="irCera"><img src="'.SERVER_URL.'assets/img/cera.png" /> <span>CERA CAPILAR</span></div>
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