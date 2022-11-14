<?php
    $errors = ["STOF" => "Stack overflow",
            "OOM" => "Out of memory",
            "MSSC" => "Missing semicolon"];
?>

<ul>
    <?php
        foreach($errors as $i => $e){
            echo "<li>$i. $e</li>";
        }
    ?>

    <?php foreach($errors as $i => $e): ?>
        <li> <?= $e ?> </li>
    <?php endforeach; ?> 
</ul>