<?php
    // delete given TAJ ID if exists
    include_once('storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $id = $_GET['id'] ?? -1;
    $s = $stor -> findOne(['taj' => $id]);
    $stor -> delete($s['id']);
    header('location: index.php');
?>