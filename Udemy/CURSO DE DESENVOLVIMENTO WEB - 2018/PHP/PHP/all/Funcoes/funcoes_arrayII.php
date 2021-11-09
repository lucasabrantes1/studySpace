<?php
/*
//is_array
$array = array();
$retorno = is_array($array);

if ($retorno) {
	# code...
	echo "Verdadeiro";
} else {
	# code...
	echo("Falso");
}
*/






/*
//in_array
$array = array('mac','linux','windows');
$retorno = is_array('mac',$array);

if ($retorno) {
	# code...
	echo "Verdadeiro";
} else {
	# code...
	echo("Falso");
*/





/*
//array_keys

$produtos = array(10=>'notebook', 11=>'teclado');
$chaves_array = array_keys($produtos); 


var_export($chaves_array)
*/

/*
//sort
$frutas = array(0=>'Banana', 1=>'Amora', 2=>'Carambola');
sort( $frutas );
var_export($frutas);
*/


/*
//asort
$frutas = array(0=>'Banana', 1=>'Amora', 2=>'Carambola');
asort( $frutas );
var_export($frutas);
*/






/*
//count
$frutas = array(0=>'Banana', 1=>'Amora', 2=>'Carambola');
$itens_array = count($frutas);
echo $itens_array;
*/




/*
//array_merge
$array1 = array('mac','linux');
$array2 = array('windows');

$novo_array = array_merge($array1,$array2);
var_export($novo_array)
*/



//exlode
$string = "20/10/2020";
$retorno = explode('/', $string);

var_export($retorno);







//implode
$nova_string = implode("/", $retorno);

echo $nova_string;




?>