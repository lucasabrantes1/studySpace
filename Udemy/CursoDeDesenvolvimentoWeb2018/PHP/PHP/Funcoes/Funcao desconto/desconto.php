<?php

require_once("funcoes_desconto.php");

$valor_total = 800;
$desconto = 10;

$valor_total_com_desconto = calculo_desconto($valor_total, $desconto);

?>


Valor Total: R$ <?php echo $valor_total ?> <br>
Valor desconto:<?php echo $desconto ?> % <br>
Valor total com desconto: R$ <?php echo $valor_total_com_desconto  ?>


