<?php
    $t = [1, 2, 3, 4, 5, 0, 8];
    print_r(array_map(fn($n) => $n*$n, array_filter($t, fn($n) => $n % 2 == 0)));
?>