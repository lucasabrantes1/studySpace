<?php

 session_start();

require_once('db.class.php');

$usuario = $_POST['usuario'];
$senha = md5($_POST['senha']);



$sql = "SELECT id, usuario, email FROM usuarios where usuario = '$usuario' and senha ='$senha' ";




$objDb = new db ();
$link = $objDb->conecta_mysql();



$resultado_id = mysqli_query($link, $sql);

if ($resultado_id) {
	$dados_usuario = mysqli_fetch_array($resultado_id);

if(isset($dados_usuario['usuario'])){

$_SESSION['id_usuario'] = $dados_usuario['id'];
$_SESSION['usuario'] = $dados_usuario['usuario'];
$_SESSION['email'] = $dados_usuario['usuario'];


 header('location: home.php');

} else {
	header('Location: index.php?erro=1');
}

} else {
	echo "Erro na execução da consulta, favor entrar contato com o admin do siste";
}





























?>