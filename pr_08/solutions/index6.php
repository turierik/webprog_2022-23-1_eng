<?php
    $bank = [
        [
            "question" => "What day is it today?",
            "answers" => ["a" => "Sunday", "b" => "Monday", "c" => "Tuesday", "d" => "Wednesday"],
            "correct" => "b"
        ],
        [
            "question" => "Is it too early in the morning?",
            "answers" => [1 => "Yes!", 2 => "No.", 3 => "Maybe?"],
            "correct" => 1
        ]
    ]
?>

<h1>Quiz</h1>
<?php foreach($bank as $id => $q): ?>
    <b> <?= $q["question"] ?> </b><br>
    <?php foreach ($q["answers"] as $jel => $szoveg): ?>
        <input type="radio" name="q<?= $id ?>" value="<?=$jel?>" <?= $jel == $q["correct"] ? "checked" : "" ?> disabled> <?= $jel . ".) " . $szoveg ?><br>
    <?php endforeach; ?>
    <br>
<?php endforeach; ?>