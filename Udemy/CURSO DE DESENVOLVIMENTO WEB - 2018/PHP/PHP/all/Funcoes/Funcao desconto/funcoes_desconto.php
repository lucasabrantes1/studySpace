<?php

function calculo_desconto($valor_total, $desconto){

	$valor_desconto = $valor_total * ($desconto/100);
    //desconto = 800 x 10 / 100 = 80rs
    $valor_total_com_desconto = $valor_total - $valor_desconto;
    // 800 - 80 reais = 720 

    return $valor_total_com_desconto;
}

?>