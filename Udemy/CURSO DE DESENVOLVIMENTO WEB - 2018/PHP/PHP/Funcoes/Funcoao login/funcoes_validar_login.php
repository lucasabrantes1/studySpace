<?php


function valida_login($login, $senha){
//validar direto em um banco de dados
  
$login_bd = 'lucas.abrantes';
$senha_bd = '123';

if($login == $login_bd && $senha == $senha_bd){
   return true;
}

return false;

}



?>