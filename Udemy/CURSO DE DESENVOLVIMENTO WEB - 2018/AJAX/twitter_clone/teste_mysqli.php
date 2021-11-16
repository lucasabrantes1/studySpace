<?php



require_once('db.class.php');


$sql = " SELECT * FROM usuarios ";




$objDb = new db ();
$link = $objDb->conecta_mysql();



$resultado_id = mysqli_query($link, $sql);

if ($resultado_id) {

  
	$dados_usuario = array();


	while($linha = mysqli_fetch_array($resultado_id, MYSQLI_ASSOC)){
		$dados_usuario[] = $linha;
	}

	 foreach ($dados_usuario as $usuario) {
	 		# code...
	 	    var_dump($usuario);
	 	    echo "<br/><br/><br/><br/><br/><br/>";
	 	}	

} else {
	echo "Erro na execução da consulta, favor entrar contato com o admin do siste";
}





?>