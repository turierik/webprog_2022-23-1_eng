<?php
    $fullname = $_POST['fullname'] ?? '';
    $email = $_POST['email'] ?? '';
    $taj = $_POST['taj'] ?? '';
    $age = $_POST['age'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $accept = $_POST['accept'] ?? false;
    $accept = filter_var($accept, FILTER_VALIDATE_BOOLEAN);
    $regdate = $_POST['regdate'] ?? date('Y-m-d');
    $notes = $_POST['notes'] ?? '';
    $errors = [];
    if ($_POST){
        if (trim($fullname) === '')
            $errors['fullname'] = 'Full name is required.';
        else if ( count(explode(' ', $fullname)) < 2 )
            $errors['fullname'] = 'Full name must be at least 2 words.';
        
        if (trim($email) === '')
            $errors['email'] = 'Email is required.';
        else if ( !filter_var($email, FILTER_VALIDATE_EMAIL) )
            $errors['email'] = 'Invalid email address.';

        if (trim($taj) === '')
            $errors['taj'] = 'TAJ is required.';
        //else if ( strlen($taj) !== 9 || $taj < 100000000 || $taj > 999999999 )
        else if ( count(array_filter(str_split($taj), fn($c) => $c >= '0' && $c <= '9')) !== 9 || strlen($taj) !== 9)
            $errors['taj'] = 'TAJ format wrong.';

        if ( trim($age) === '' )
            $errors['age'] = 'The age is required.';
        else if ( filter_var($age, FILTER_VALIDATE_INT) === false){
            $errors['age'] = 'The age must be an integer.';
            $age = intval($age);
            if ($age < 0) $errors['age'] = 'The age must be non-negative.';
        }
            
        if ($gender != 'm' && $gender != 'f')
            $errors['gender'] = 'Invalid gender.';

        if (!$accept)
            $errors['accept'] = 'Need to accept.';
        
        $errors = array_map(fn($e) => "<span style='color:red'>$e</span>", $errors);

        if (count($errors) == 0){
            // form is OK :)
            include_once('storage.php');
            $stor = new Storage(new JsonIO('data.json'));
            $res = $stor -> findOne(['taj' => $taj]);
            if ($res === null){
                $stor -> add([
                    'fullname' => $fullname,
                    'email' => $email,
                    'taj' => $taj,
                    'age' => $age,
                    'gender' => $gender,
                    'regdate' => $regdate,
                    'notes' => $notes
                ]);
            } else {
                $stor -> update($res['id'], [
                    'fullname' => $fullname,
                    'email' => $email,
                    'taj' => $taj,
                    'age' => $age,
                    'gender' => $gender,
                    'regdate' => $regdate,
                    'notes' => $notes
                ]);
            }
            
            header('location: index.php');
        }
    }
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
    <form action="reg.php" method="post">
        Full name: <input type="text" name="fullname" value="<?= $fullname ?>"> <?= $errors['fullname'] ?? '' ?> <br>
        E-mail: <input type="text" name="email" value="<?= $email ?>"> <?= $errors['email'] ?? '' ?> <br>
        TAJ (9 digits): <input type="text" name="taj" value="<?= $taj ?>"> <?= $errors['taj'] ?? '' ?><br>
        Age: <input type="text" name="age" value="<?= $age ?>">  <?= $errors['age'] ?? '' ?><br>
        Gender:
            <input type="radio" name="gender" value="m" <?= $gender == 'm' ? 'checked' : '' ?>>male
            <input type="radio" name="gender" value="f" <?= $gender == 'f' ? 'checked' : '' ?>>female <?= $errors['gender'] ?? '' ?> <br>
        <input type="checkbox" name="accept" <?= $accept ? 'checked' : '' ?>> Accept terms and conditions. <?= $errors['accept'] ?? '' ?> <br>
        Registration date: <input type="date" name="regdate" value="<?= $regdate ?>"><br>
        Notes: <br><textarea name="notes"><?= $notes ?></textarea><br>
        <button type="submit">Register</button>
    </form>
    <a href="index.php">Back to home</a>
</body>
</html>