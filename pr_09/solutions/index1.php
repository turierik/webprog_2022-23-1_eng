<?php
    var_dump($_POST);
    
    /* $something_else = 'Default';
    if (isset($_POST['something-else']))
        $something_else = $_POST['something-else']; */
    
    $something_else = $_POST['something-else'] ?? 'Default';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="index1.php">
        Name: <input type="text" name="something-else"><br>
        <button type="submit">Send form</button>
    </form>

    <h1>Hi, dear <?= $something_else ?>!</h1>
</body>
</html>