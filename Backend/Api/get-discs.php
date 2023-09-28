<?php
    include __DIR__."../../data/disc.php";

    //API
    header('Content-Type: application/json');
    echo json_encode($dischi);
?>