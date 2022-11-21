<?php
    include_once('storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $data = $stor -> findAll();
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista</title>
</head>
<body>
    <a href="reg.php">Új regisztráció</a>
    <h1>Regisztráltak listája</h1>
    <ul>
        <?php foreach($data as $s): ?>
            <li><a href="show.php?id=<?= $s['taj'] ?>"><?= $s['fullname'] ?></a></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>