<?php
    session_start();
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    $error = false;
    if ($_POST){
        include_once('storage.php');
        $stor = new Storage(new JsonIO('users.json'));
        
        $user = $stor -> findOne([ 'username' => $username ]);
        if (!$user){
           $error = true;
        } else {
            if (!password_verify($password, $user['password'])){
                $error = true;
            } else {
                // successful login
                $_SESSION['user_id'] = $user['id'];
                header('location: index.php');
                exit();
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <?php if ($error): ?>
        <span style="color: red">Invalid username and/or password!</span><br><br>
    <?php endif; ?>
    <form method="POST" action="login.php">
        Username: <input type="text" name="username"><br>
        Password: <input type="password" name="password"><br>
        <button type="submit">Login</button>
    </form>
    <?php
        //$hash = password_hash("example", PASSWORD_DEFAULT);
        //echo password_verify("example", $hash) ? "true" : "false";
    ?>
</body>
</html>