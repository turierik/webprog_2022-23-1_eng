<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "something<br>";
        echo("apple<br>");
        print "pear<br>";
        print("grapes<br>");

        // no let, no var, no const, no type... 
        $x = 42;
        echo $x . "<br>";

        $t = [5, 2, 0, 7, 8];
        // print_r($t);
        var_dump($t);

        /*function is_even($n){
            return $n % 2 == 0;
        }*/

        // JS: t.filter(callback)
        //$u = array_filter($t, 'is_even');
        $zero = 0; 
        $u = array_filter($t, function ($n) use ($zero) {
            return $n % 2 == $zero;
        });
        //$u = array_filter($t, fn($n) => $n % 2 == 0);
        var_dump($u);

        // PHP associative array ~ JS object
        $car = [
            'owner'  => 'John',
            'year'   => 1996,
            'broken' => false
        ];
    ?>
</body>
</html>