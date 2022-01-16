<?php
/*
//isset()
$valor ='lucas';
if (isset($valor)) {
	echo'variavel iniciada';
} else 
*/




/*empty()  -
ela retorna verdadeira sempre que uma variavel estiver vazia dada as condições abaixo
true -> '' , 0, '0', false, null, array().

false -> em todos os outros casos ela vai retornar false, dizendo que essa variavel nao esta vazia


$valor = "";
if (empty($valor)) {
	echo "variavel vazia";
}

*/

//is_numeric()
$valor = '1';
if (is_numeric($valor)) {
	echo "Valor numero";
} else{
	echo "digite apenas numeros sem ponto.";
}

?>
