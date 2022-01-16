<?php

// classe mãe ou superclasse


class felino{

	var $mamifero = 'sim'; // na class felino todos são mamiferos
    

    //metodo                    // na class felino todos cocrrem
	function correr(){
		echo 'Correr como felino';
	}

}


/*classe filha ou subclasse ira herdar as propriedades e metodos da class felino 
iremos da o echo mais como tem o extends ele vai puxar as informações da classe felino. ou seja felino = chita
*/
//classe filha ou subclasse
class Chita extends Felino{
    
    //polimorfismo - é herdado do metodo  da class
	function correr(){
	echo "Correr como chita 100KM/H";
    }

}





/*podemos criar outra classe sem ter que digitar nehuma linha de codigo para utilizala novamente

class gato extends Felino{
}
*/



$chita =  new chita();

echo $chita->mamifero . '<br>';
$chita->correr();






?>