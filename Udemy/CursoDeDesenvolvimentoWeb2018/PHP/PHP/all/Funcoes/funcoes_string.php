<?php

/*
//strtolower     -   string to lowercase
$texto = "curso cAAAAmpleto de php";
echo strtolower($texto);
*/



/*
//strtoupper     -   string to uppercase
$texto = "Curso Completo de PHP 10 # %";
echo strtoupper($texto);
*/


/*
//ucfirst        -   upper case firs
$texto = "curso completo de php 10 # %";
echo ucfirst($texto);
*/

//------------------------------------------------------------------------------------------


//strlen - string length (comprimento) ira contar td ate spaço
/*$texto = "curso completo de php 10 # %";
echo strlen($texto);
*/


/*
//str_replace - subistitui uma string
$texto = "R$12.40";
echo str_replace(".", ",",$texto  );
*/


//subtr - subistitui uma string
       //12345678 9.....
$texto = "Entenda porque sue smartphones esquenta tanto, se vc tem um smartphones";

$noticia = substr($texto, 0, 40);
echo $noticia."...";























/*

$cpf = isset($_POST['cpf']) ? ($_POST['cpf']) : '' ;

$total_string_cpf =  strlen($cpf);


if($total_string_cpf != 11 && $cpf != ''){
   echo "CPF invalido";
}

?>



<form method="post" action="">
	<label>CPF:
	<input type="text" name="cpf">
	<input type="submit" value="cadastrar">
	</label>

</form>
*/