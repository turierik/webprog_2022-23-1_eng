<?php
    function array_every($array, $cb){
        foreach($array as $i){
            if (!$cb($i)) return false; 
        }
        return true;
    }

    /* function array_every($array, $cb){
        $i = reset($array);
        do {
            if (!$cb($i)) return false;
        } while ($i = next($array));
        return true;
    } */

    $t = [2, 4, 6];
    function is_even($n){
        return $n % 2 == 0;
    }

    echo array_every($t, 'is_even') ? 'true' : 'false';
?>