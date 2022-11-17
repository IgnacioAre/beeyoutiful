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