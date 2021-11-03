<?php


class db {

//host

private $host = 'localhost';


//usuario

private $usuario = 'root';

//senha

private $senha = '';


//banco de dados onde vamos executar os comandos
private $database = 'twitter_clone';

    public function conecta_mysql(){
    
        //criar a conexao
        //mysqli_connect(localizacao do bd, usuario de acesso,senha, banco de dados;) parametros necessarios
        $con = mysqli_connect ($this->host, $this->usuario, $this->senha, $this->database);


       //ajustar o charset de comunicação entre a aplicação e o banco de dados
       // 2 parametros -  mysqli_connect em variavel, charset
       mysqli_set_charset($con, 'utf8'); 


       //verificar se houve erro de conexao
       if (mysqli_connect_errno()) {
       	echo 'erro ao tentar conectar com o bd mysql:'.mysqli_connect_error();
       }
 

 return $con;

    }
   



}


?>