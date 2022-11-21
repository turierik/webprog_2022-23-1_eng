<?php
    // show given TAJ ID if exists
    include_once('storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $id = $_GET['id'] ?? -1;
    $s = $stor -> findOne(['taj' => $id]);
    if ($s === null){
        header('location: index.php');
        exit();
    }
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
</head>
<body>
    Full name: <?= $s['fullname'] ?> <br>
    E-mail: <?= $s['email'] ?> <br>
    TAJ: <?= $s['taj'] ?> <br>
    Age: <?= $s['age'] ?>  <br>
    Gender: <?= $s['gender'] ?> <br>
    Registered: <?= $s['regdate'] ?> <br>
    Notes: <?= $s['notes'] ?> <br>
    <a href="delete.php?id=<?= $id ?>">Delete</a> <br>
    <a href="index.php">Back to home</a>
</body>
</html>
