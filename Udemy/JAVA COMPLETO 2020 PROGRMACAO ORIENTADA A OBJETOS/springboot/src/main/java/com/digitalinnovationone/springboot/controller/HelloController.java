package com.digitalinnovationone.springboot.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/")
    public String helloMessage(){
        return "Hello, Digital innovation One";
    }
}


/*
Para rodar o codigo acima no cmd(terminal) mudaremos para pasta desse projeto (springboot
pasta raiz), e digitatemos o comando
mvn spring-boot:run
e assim o projeto sera executado*
--------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------

mvn clean package - prepara para o empacotamento
e roda os teste unitarios

mudar para a pasta target

Depois de empacotado o nossa aplicacao nos digitamos o comando
mvn package  && java -jar target/spring-boot-example-0.1.0. jar

--------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------



*/
