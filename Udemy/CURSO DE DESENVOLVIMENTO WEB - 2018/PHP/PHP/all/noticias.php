<?php

$noticias = array();

$noticias[1]['titulo'] = 'titulo da noticia 1';
$noticias[1]['conteudo'] = 'conteudo dessa noticia 1';


$noticias[2]['titulo'] = 'titulo da noticia 2';
$noticias[2]['conteudo'] = 'conteudo dessa noticia 2';


$noticias[3]['titulo'] = 'titulo da noticia 3';
$noticias[3]['conteudo'] = 'conteudo dessa noticia 3';

/* ------------------ while---------------------
$idx = 1;
while ($idx <= 3) {
	# code...
	echo $noticias[$idx]['titulo'];
	echo "<br/>";
	echo $noticias[$idx]['conteudo'];
	echo "<br/>";
	$idx = $idx + 1;
}
*/

/* ------------------- do while ----------------
$ixd = 1;
do{

	echo $noticias[$ixd]['titulo'];
	echo "<br/>";
	echo $noticias[$ixd]['conteudo'];
	echo "<br/>";

   $ixd = $ixd + 1;
} while ($ixd < 4);
*/

/*

for ($idx = 1; $idx <= 4; $idx = $idx + 1) { 
	
	echo $noticias[$idx]['titulo'];
	echo '<br />';
	echo $noticias[$idx]['conteudo'];
	echo '<br />';
}

*/








//var_dump($noticia)




?>