<?php
    include_once('./config/config.php');
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo SERVER_URL; ?>assets/css/index.css">
    <link rel="Shortcut Icon" type="image/x-icon" href="<?php echo SERVER_URL; ?>assets/img/icon.png">
    <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet">
    <script src="<?php echo SERVER_URL; ?>js/JQuery.js"></script>
    <script src="<?php echo SERVER_URL; ?>js/sweetalert2.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/ScrollMagic.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/debug.addIndicators.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/animation.gsap.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/TweenLite.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/TimelineLite.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/CSSPlugin.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>ScrollMagic/BezierPlugin.min.js"></script>
    <script src="<?php echo SERVER_URL; ?>js/index.js"></script>
</head>
<body>


    <?php
    

    $url = $_SERVER['REQUEST_URI'];
        if (strpos($url, '?')) {
            $url = strstr($url, '?', true);
        }

    $url = substr($url,1);

    
    $partesRuta = explode('/',$url);




    // ########### SECCIÓN DE RUTAS ########### //

    define('base_url',__DIR__.'/views/');


    // ################## CREACIÓN DE PARAMETROS ##################

    //Dominio/param1/param2/param3...
    //localhost/0/1/2/3...

    (isset($partesRuta[1]))?$param1 = $partesRuta[1]:$param1='';
    (isset($partesRuta[2]))?$param2 = $partesRuta[2]:$param2='';
    (isset($partesRuta[3]))?$param3 = $partesRuta[3]:$param3='';

    // ################## FIN PARAMETROS ##################



    //  DEFINICIÓN DE RUTAS

    switch($url){

        //  RUTA SIN PARAMETROS GET

        /* RUTAS CLIENTE */
        case '': 
            include_once base_url.'inicio.php';
            break;
            
        default: 
            include_once base_url.'error_404.php'; 
        break;
    }


    ?>
    

</body>
</html>