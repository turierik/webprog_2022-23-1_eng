<?php
    var_dump($_POST);

    $full_name = $_POST['full_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $age = $_POST['age'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $student = $_POST['student'] ?? false;
    $student = filter_var($student, FILTER_VALIDATE_BOOLEAN);

    $errors = [];

    if ($_POST){
        if ( trim($full_name) === '' )
            $errors['full_name'] = 'The name is required.';
        else if ( count(explode(" ", $full_name)) < 2 )
            $errors['full_name'] = 'The name must be at least 2 words long.';

        if ( trim($email) === '' )
            $errors['email'] = 'The email is required.';
        else if ( !filter_var($email, FILTER_VALIDATE_EMAIL) )
            $errors['email'] = 'The email format must be valid.';

        if ( trim($age) === '' )
            $errors['age'] = 'The age is required.';
        else if ( filter_var($age, FILTER_VALIDATE_INT) === false){
            $errors['age'] = 'The age must be an integer.';
            $age = intval($age);
            if ($age < 0) $errors['age'] = 'The age must be non-negative.';
        }
            
        if ($gender != 'm' && $gender != 'f')
            $errors['gender'] = 'Invalid gender.';
        
        if (!$student)
            $errors['student'] = 'Needs to be checked.';
    }

    $errors = array_map(fn($e) => "<span style='color:red'>$e</span>", $errors);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ex. 2</title>
</head>
<body>
    <form method="POST" action="index2.php">
        Full name: <input type="text" name="full_name" value="<?= $full_name ?>"> <?= $errors['full_name'] ?? '' ?> <br>
        Email: <input type="text" name="email" value="<?= $email ?>"><?= $errors['email'] ?? '' ?><br>
        Age: <input type="text" name="age"  value="<?= $age ?>"><br><?= $errors['age'] ?? '' ?> 
        Gender: 
            <input type="radio" name="gender" value="f" <?= $gender == 'f' ? 'checked' : '' ?>>Female<br>
            <input type="radio" name="gender" value="m" <?= $gender == 'm' ? 'checked' : '' ?>>Male<br>
            <?= $errors['gender'] ?? '' ?>
        Student: <input type="checkbox" name="student" <?= $student ? 'checked' : '' ?>><?= $errors['student'] ?? '' ?><br>
        <button type="submit">Validate</button>
    </form>
</body>
</html>