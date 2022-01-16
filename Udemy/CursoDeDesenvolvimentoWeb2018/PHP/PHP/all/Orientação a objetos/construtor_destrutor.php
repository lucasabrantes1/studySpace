<?php

Class Pessoa{

	private $nome;


    public function correr(){
    	echo $this->nome ."correndo<br>","<br>";
    }

   function __construct($parametro_nome){
   	echo"Construtor iniciado <br>";
   	$this->nome = $parametro_nome;
   	
   }

   function __destruct(){
   	echo "Objeto Removido<br>";
   }

 
}


$pessoa = new Pessoa('Jamilton<br>');
$pessoa->correr();














?>