<?php
class Veiculo{

	/*
	public    não iremos utilizar mais a o var na criação de classe e sim
	private   um desses modelos é uma boa pratica definir um desses
    protect    
	*/
     

     /*
	public $placa;
	private $cor;
	protected $tipo;
     */



	private $placa;
	private $cor;
	protected $tipo='caminhonete';

    


	public function setPlaca($parametro_placa){
      //validcação da placa
		$this->placa = $parametro_placa;	
	}

	public function getPlaca(){
		return $this->placa;
	}


}


class Carro extends veiculo{
	public function exibirTipo(){
		echo $this->tipo;
	}

}

	

	

	$Carro = new Carro();
	$Carro-> exibirTipo();


?>