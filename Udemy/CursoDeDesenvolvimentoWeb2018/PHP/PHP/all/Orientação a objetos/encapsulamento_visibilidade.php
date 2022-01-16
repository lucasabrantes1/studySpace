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
	private $tipo;

    


	public function setPlaca($parametro_placa){
      //validcação da placa
		$this->placa = $parametro_placa;	
	}

	public function getPlaca(){
		return $this->placa;
	}


}

	

	

	$veiculo = new Veiculo();
	$veiculo->setPlaca('JAM2363');


	echo $veiculo->getPlaca()


?>