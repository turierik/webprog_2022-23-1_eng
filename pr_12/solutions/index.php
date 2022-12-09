<?php
    session_start(); // $_SESSION
    if (!isset($_SESSION['count'])) $_SESSION['count'] = 0;
    $_SESSION['count']++;

    if (!isset($_SESSION['user_id'])){
        header('location: login.php');
        exit();
    } else {
        include_once('storage.php');
        $stor = new Storage(new JsonIO('users.json'));
        $user = $stor -> findById($_SESSION['user_id']);
    }
?>

<h1>Counter: <?= $_SESSION['count'] ?></h1>

<h1>Hello, <?= $user['username'] ?>!</h1>
<a href="logout.php">Logout</a><br>

Search by name: <input type="text" id="search">

<table>

</table>

<script src="ajax.js"></script>