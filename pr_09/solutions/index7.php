<?php
    $students = [
        42 => ['name' => 'John Doe', 'year' => 1969, 'gender' => 'm'],
        ['name' => 'Mrs. Smith', 'year' => 2011, 'gender' => 'f'],
        ['name' => 'George Big', 'year' => 1940, 'gender' => 'm'],
        ['name' => 'Edward Prince', 'year' => 2000, 'gender' => 'f'],
        ['name' => 'Jack Willams', 'year' => 1997, 'gender' => 'm']
    ];

    $min_year = min(array_column($students, 'year'));
    $matches = array_filter($students, fn($s) => $s['year'] == $min_year);
    $keys = array_keys($matches);
    $oldest = $matches[$keys[0]]['name'];

    /* $index = null;
    foreach ($students as $i => $s){
        if ($index === null || $s['year'] < $students[$index]['year'])
            $index = $i;
    }
    $oldest = $students[$index]['name']; */

    function countGender($students, $gender) {
        /*$count = 0;
        foreach ($students as $s){
            if ($s['gender'] == $gender) $count++;
        }
        return $count;*/
        return count(array_filter($students, fn($s) => $s['gender'] == $gender));
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex. 7</title>
</head>
<body>
    <h1>Student register</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($students as $s): ?>
            <tr>
                <td><?= $s['name'] ?></td>
                <td><?= $s['year'] ?></td>
                <td><?= $s['gender'] == 'm' ? 'male' : 'female' ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table><br>
    Oldest student: <?= $oldest ?> <br><br>
    <div style="height: 30px; background-color: lightblue; width: <?= 100*countGender($students, 'm') ?>px"></div><br>
    <div style="height: 30px; background-color: hotpink; width: <?= 100*countGender($students, 'f') ?>px"></div><br>
</body>
</html>