<?php

class Pessoa{
	//Atributos
	var $nome;

	//Métodos
	function setNome($nome_definido){
        $this->nome = $nome_definido;
	}

	function getNome(){
	  return $this->nome;
	}

	//getters e setter 

}

$Pessoa = new Pessoa();


$Pessoa->setNome('Lucas');
echo $Pessoa->getNome();



echo "<br/>";


class casa{
	//atributos
	var $tipo;


	//metodos
	function setTipo($tipo_definido){
		$this->tipo = $tipo_definido;
      }



    function getTipo(){
			return $this->tipo;
	}


}


$casa = new casa();

$casa->setTipo('Casa de madeira');
echo $casa->getTipo();








?>