<?php
/*

//caracteres especiais "_"
//iniciar funcao com número
function  primeira_funcao(){
	//codigo de execução da função
echo "Curso de PHP";
}

primeira_funcao();

*/

//----------------------------------------------------------------------------------------------------------------



//Função sem retorno

function exibir_noas_vindas($nome='indefinido'){
	echo "Bem vindo ao curso php, ".$nome;
}



//Função com retorno (tem a tag return)
function calcular_soma($numero1,$numero2){
	return $numero1+$numero2;
}



/*
//chamar a função sem retorno é diferente
exibir_noas_vindas();
*/




//chamar a funcao com retorno note a diferença no lugar do echo pode ser uma variavel.
 echo calcular_soma(2,2);
 
 
?>