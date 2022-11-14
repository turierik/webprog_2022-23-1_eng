<?php
    function fact_l($n){
        $res = 1;
        for ($i = $n; $i > 1; $i--)
            $res *= $i;
        return $res;
    }

    function fact_r($n){
        if ($n == 0) return 1;
        return $n * fact_r($n - 1);
    }

    echo fact_l(5).'<br>'.fact_r(5);
?>